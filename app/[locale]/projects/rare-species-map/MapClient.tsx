"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const yearsRange1 = "2000,2015";
const yearsRange2 = "2015,2025";

const buildUrl = (yearRange: string) =>
  `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?&bin=hex&hexPerTile=144&taxonKey=5219173&year=${yearRange}&style=classic.poly`;

const canisLupus = {
  usage: {
    key: "5219173",
    name: "Canis lupus Linnaeus, 1758",
    canonicalName: "Canis lupus",
    authorship: "Linnaeus, 1758",
    rank: "SPECIES",
    code: "ZOOLOGICAL",
    status: "ACCEPTED",
    genericName: "Canis",
    specificEpithet: "lupus",
    type: "SCIENTIFIC",
    formattedName: "<i>Canis</i> <i>lupus</i> Linnaeus, 1758",
  },
};

export default function MapClient() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<maplibregl.Map | null>(null);
  const [selectedRange, setSelectedRange] = useState(yearsRange1);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize MapLibre
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json", // dark style with country borders
center: [10, 50],
      zoom: 3,
    });

    mapInstanceRef.current = map;

    // country=PL&taxonKey=5231190&style=whiteheat.point

    map.on("load", () => {
      // Add GBIF raster tile layer
      map.addSource("gbif-tiles", {
        type: "raster",
        tiles: [buildUrl(selectedRange)],
        tileSize: 256,
      });

      map.addLayer({
        id: "gbif-layer",
        type: "raster",
        source: "gbif-tiles",
        paint: {
          "raster-opacity": 0.85,
        },
      });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove(); // clean up WebGL context
        mapRef.current = null;
      }
    };  }, []);

  // Update map layer when selected range changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !map.isStyleLoaded()) return;

    // Check if source exists
    if (map.getSource("gbif-tiles")) {
      // Remove the layer first
      if (map.getLayer("gbif-layer")) {
        map.removeLayer("gbif-layer");
      }
      // Then remove the source
      map.removeSource("gbif-tiles");
    }

    // Add the source with the new URL
    map.addSource("gbif-tiles", {
      type: "raster",
      tiles: [buildUrl(selectedRange)],
      tileSize: 256,
    });

    // Add the layer back
    map.addLayer({
      id: "gbif-layer",
      type: "raster",
      source: "gbif-tiles",
      paint: {
        "raster-opacity": 0.85,
      },
    });
  }, [selectedRange]);

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ 
        display: "flex", 
        gap: "10px", 
        padding: "10px",
        backgroundColor: "#f5f5f5",
        borderBottom: "1px solid #ddd"
      }}>
        <button
          onClick={() => setSelectedRange(yearsRange1)}
          style={{
            padding: "10px 20px",
            backgroundColor: selectedRange === yearsRange1 ? "#333" : "#fff",
            color: selectedRange === yearsRange1 ? "#fff" : "#333",
            border: "2px solid #333",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          2000-2015
        </button>
        <button
          onClick={() => setSelectedRange(yearsRange2)}
          style={{
            padding: "10px 20px",
            backgroundColor: selectedRange === yearsRange2 ? "#333" : "#fff",
            color: selectedRange === yearsRange2 ? "#fff" : "#333",
            border: "2px solid #333",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        >
          2015-2025
        </button>
      </div>
      <div ref={mapRef} style={{ width: "100%", flex: 1 }} />
    </div>
  );
}
