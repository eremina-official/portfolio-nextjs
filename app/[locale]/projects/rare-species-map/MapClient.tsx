"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const yearsRange1 = "2000,2015";
const yearsRange2 = "2015,2025";
const testUrl = `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?&bin=hex&hexPerTile=144&taxonKey=5219173&year=${yearsRange2}&style=classic.poly`;

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
const felisSilvestris = 7964291;

export default function MapClient() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize MapLibre
    const map = new maplibregl.Map({
      container: mapRef.current,
      style: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json", // dark style with country borders
      center: [19, 52],
      zoom: 5,
    });

    // country=PL&taxonKey=5231190&style=whiteheat.point

    map.on("load", () => {
      // Add GBIF raster tile layer
      map.addSource("gbif-tiles", {
        type: "raster",
        tiles: [testUrl],
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

    return () => map.remove();
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100%" }} />;
}
