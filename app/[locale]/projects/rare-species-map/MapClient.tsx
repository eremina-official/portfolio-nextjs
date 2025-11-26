"use client";

import { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import YearRangeButton from "./YearRangeButton";
import TextPanel from "./TextPanel";

const yearsRange1 = [2000, 2015];
const yearsRange2 = [2015, 2025];
const ranges = [yearsRange1, yearsRange2];

const buildUrl = (yearRange: number[]) =>
  `https://api.gbif.org/v2/map/occurrence/density/{z}/{x}/{y}@1x.png?&bin=hex&hexPerTile=144&taxonKey=5219173&year=${yearRange.join(",")}&style=classic.poly`;

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
      style: "https://tiles.basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: [10, 50],
      zoom: 3,
    });

    mapInstanceRef.current = map;

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
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

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

  const downloadMap = async () => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Wait until the map is idle (all tiles rendered)
    await new Promise<void>((resolve) => map.once("idle", () => resolve()));

    const mapCanvas = map.getCanvas();
    const w = mapCanvas.width;
    const h = mapCanvas.height;

    // create merged canvas
    const merged = document.createElement("canvas");
    merged.width = w;
    merged.height = h;
    const ctx = merged.getContext("2d")!;

    // draw the map (WebGL canvas)
    ctx.drawImage(mapCanvas, 0, 0, w, h);

    // draw overlay canvas (same size, aligned)
    // After drawing the base map
    ctx.fillStyle = "rgba(0,0,0,0.65)";
    ctx.fillRect(20, 20, 180, 50);

    ctx.font = "bold 28px Inter";
    ctx.fillStyle = "#fff";
    ctx.fillText(`${selectedRange[0]} – ${selectedRange[1]}`, 35, 55);

    // download
    const url = merged.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = "map-with-label.png";
    document.body.appendChild(link);
    link.click();
    link.remove();  
  };


  return (
    <div className="w-full h-full overflow-hidden flex flex-col">
      <button onClick={downloadMap} className="px-4 py-2 bg-emerald-500 text-white rounded">
      Download Map
    </button>

      {/* Pure Dark Header */}
      <div className="w-full backdrop-blur-xl bg-gray-950/95 border-b-2 border-gray-800/50 ">
        <div className="px-8 py-6 flex flex-wrap gap-4 justify-between items-center">
          {/* Title and Species Info */}
          <div className="max-w-7xl">
            <h1 className="text-3xl font-bold text-gray-100 mb-3 tracking-tight">
              Gray Wolf Distribution Map
            </h1>
            <div className="flex items-center gap-4 text-sm flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Species:
                </span>
                <span className="italic text-white font-medium">
                  {canisLupus.usage.canonicalName}
                </span>
              </div>
              <span className="text-gray-600">|</span>
              {/* <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wide border border-emerald-500/30">
                {canisLupus.usage.rank}
              </span> */}
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Source:
                </span>
                <a
                  href="https://www.gbif.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline font-medium transition-all"
                >
                  GBIF
                </a>
              </div>
            </div>
          </div>
          <button onClick={downloadMap} className="px-4 py-2 bg-emerald-500 text-white rounded">
            Download Map
          </button> 
        </div>
      </div>

      {/* Main Content: Map + Text Panel */}
      <div className="h-full lg:max-h-[780px] flex-1 flex flex-col lg:flex-row bg-gradient-to-br from-gray-50 to-gray-100 lg:overflow-hidden">
        {/* Map Section */}
        <div className="relative flex-1">
          {/* Floating Year Range Control Panel */}
          <div className="absolute top-8 left-8 z-10 backdrop-blur-xl bg-gray-900/95 rounded-2xl border-2 border-gray-800/50 overflow-hidden">
            <div className="px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Time Period
                </span>
              </div>
              <div className="flex gap-3 flex-wrap">
                {ranges.map((range) => (
                  <YearRangeButton
                    key={range.join(",")}
                    label={range.join(" - ")}
                    isSelected={selectedRange.join(",") === range.join(",")}
                    onClick={() => setSelectedRange(range)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div ref={mapRef} className="w-full h-[780px]" />
        </div>

          {/* Explanatory Text Panel */}
          <TextPanel />
      </div>
    </div>
  );
}
