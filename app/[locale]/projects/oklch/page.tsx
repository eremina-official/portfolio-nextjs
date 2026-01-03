"use client";

import { useState } from "react";
import "./oklch.css";
import { useOklchVariants } from "./hooks/useOklchVariants";
import { ThemeController } from "./components/ThemeController";
import { VariantSection } from "./components/VariantSection";
import ErrorBoundary from "../../../../components/ErrorBoundary";

export default function OklchSeparateVariantsDemo() {
  const [input, setInput] = useState("oklch(0.56 0.19 266)");
  const [darkMode, setDarkMode] = useState(false);
  const { lVariants, cVariants, hVariants, aVariants, isValid } = useOklchVariants(input);

  return (
    <div
      className={`${darkMode ? "page-oklch-theme-dark" : "page-oklch-theme"} min-h-screen bg-(--color-oklch-background) py-12 px-4`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-(--color-oklch-text) mb-4">
            OKLCH Color Explorer
          </h1>
          <p className="text-lg text-(--color-oklch-subtext) max-w-2xl mx-auto">
            Explore how Lightness, Chroma, Hue and Alpha variations affect your OKLCH colors. Click
            any color to copy its value.
          </p>
        </div>

        {/* Input Section */}
        <ErrorBoundary
          fallback={
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 text-center mb-8">
              <h3 className="text-red-800 font-bold mb-2">Color Input Error</h3>
              <p className="text-red-600 mb-4">The color input component encountered an error.</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
              >
                Reset Explorer
              </button>
            </div>
          }
        >
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-600">OKLCH Color Input</label>
              <button
                onClick={() => {
                  const l = (Math.random() * 0.5 + 0.3).toFixed(2);
                  const c = (Math.random() * 0.25).toFixed(2);
                  const h = Math.floor(Math.random() * 360);
                  setInput(`oklch(${l} ${c} ${h})`);
                }}
                className="text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-2 py-1 rounded transition-colors"
              >
                🎲 Random Color
              </button>
            </div>
            <div className="relative">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="oklch(0.6 0.2 260)"
                className={`w-full p-4 rounded-xl border-2 transition-colors duration-200 font-mono text-lg ${
                  isValid
                    ? "border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    : "border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                } outline-none`}
              />
              {!isValid && input && (
                <p className="text-red-500 text-sm mt-2">
                  Please enter a valid OKLCH color (e.g., oklch(0.6 0.2 260))
                </p>
              )}
            </div>
          </div>

          {/* Color Variants */}
          {isValid && (
            <div className="space-y-10">
              <VariantSection
                title="Lightness Variants"
                variants={lVariants}
                description="Adjusting lightness from dark to bright while keeping chroma and hue constant. Lighteness (L) ranges from 0 to 1."
              />

              <VariantSection
                title="Chroma Variants"
                variants={cVariants}
                description="Adjusting color intensity from muted to vibrant while keeping lightness and hue constant. Chroma (C) ranges from 0 to theoretically unlimited vibrant colors, but in practice values above ~0.5 may not render well."
              />

              <VariantSection
                title="Hue Variants"
                variants={hVariants}
                description="Rotating through different hues while keeping lightness and chroma constant. Hue (H) is measured in degrees around the color wheel (0-360)."
              />

              <VariantSection
                title="Alpha (Transparency) Variants"
                variants={aVariants}
                description="Varying alpha from fully transparent to fully opaque. Useful for overlays and subtle UI accents. Alpha (A) ranges from 0 (transparent) to 1 (opaque)."
              />
            </div>
          )}
        </ErrorBoundary>

        <ThemeController darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Info Footer */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="font-semibold text-blue-900 mb-2">About OKLCH</h3>
            <p className="text-blue-700 text-sm">
              OKLCH is a perceptually uniform color space that makes it easy to create consistent
              color palettes by adjusting lightness, chroma, hue and alpha independently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
