"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useMemo, JSX } from "react";
import "./oklch.css";

interface Variant {
  color: string;
  delta: number;
  type: string;
  value: string;
}

interface memoValueType {
  lVariants: Variant[];
  cVariants: Variant[];
  hVariants: Variant[];
  aVariants: Variant[];
  isValid: boolean;
}

export default function OklchSeparateVariantsDemo() {
  const [input, setInput] = useState("oklch(0.6 0.2 260)");
  const [copiedColorKey, setCopiedColorKey] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const { lVariants, cVariants, hVariants, aVariants, isValid } = useMemo<memoValueType>(() => {
    try {
      const match = input.match(/oklch\(([^)]+)\)/);
      if (!match)
        return { lVariants: [], cVariants: [], hVariants: [], aVariants: [], isValid: false };

      const [l, c, h] = match[1].split(/\s+/).map(Number);

      if (isNaN(l) || isNaN(c) || isNaN(h)) {
        return { lVariants: [], cVariants: [], hVariants: [], aVariants: [], isValid: false };
      }

      const lStep = 0.1;
      const cStep = 0.05;
      const hStep = 60;

      const lVariants = [-2, -1, 0, 1, 2, 3]
        .map((s) => {
          const lv = Math.min(1, Math.max(0, l + s * lStep));

          // To avoid negative lightness values
          if (lv < 0) return null;

          // Avoid lightness values > 1
          if (lv > 1) return null;

          return {
            color: `oklch(${lv.toFixed(2)} ${c} ${h})`,
            delta: s * lStep,
            type: "L",
            value: lv.toFixed(2),
          };
        })
        .filter((v) => v !== null);

      const cVariants = [-2, -1, 0, 1, 2, 3]
        .map((s) => {
          const cv = Math.max(0, c + s * cStep);

          // To avoid negative chroma values
          if (cv < 0) return null;

          // Note: No upper limit for chroma in OKLCH, but extremely high values may not render well
          if (cv > 1) return null;

          return {
            color: `oklch(${l.toFixed(2)} ${cv.toFixed(2)} ${h})`,
            delta: s * cStep,
            type: "C",
            value: cv.toFixed(2),
          };
        })
        .filter((v) => v !== null);

      const hVariants = [-2, -1, 0, 1, 2, 3].map((s) => {
        const hv = (h + s * hStep + 360) % 360;

        //
        return {
          color: `oklch(${l.toFixed(2)} ${c} ${hv})`,
          delta: s * hStep,
          type: "H",
          value: Math.round(hv).toString(),
        };
      });

      // Alpha variants: from fully transparent to fully opaque
      const alphaSteps = [0, 0.2, 0.4, 0.6, 0.8, 1];
      const aVariants = alphaSteps.map((a) => ({
        color: `oklch(${l.toFixed(2)} ${c.toFixed(2)} ${h} / ${a})`,
        delta: a,
        type: "A",
        value: a.toFixed(2),
      }));

      return { lVariants, cVariants, hVariants, aVariants, isValid: true };
    } catch {
      return { lVariants: [], cVariants: [], hVariants: [], aVariants: [], isValid: false };
    }
  }, [input]);

  const formatColorWithHighlight = (color: string, type: string) => {
    const match = color.match(/oklch\((.+)\)/);
    if (!match) return color;

    const content = match[1];
    const parts = content.split(" ");

    // Map type to index in the split array
    // Format: "L C H" or "L C H / A"
    // Split: ["L", "C", "H"] or ["L", "C", "H", "/", "A"]
    let targetIndex = -1;
    if (type === "L") targetIndex = 0;
    else if (type === "C") targetIndex = 1;
    else if (type === "H") targetIndex = 2;
    else if (type === "A") targetIndex = 4;

    return (
      <>
        oklch(
        {parts.map((part, i) => {
          const isTarget = i === targetIndex;
          return (
            <span
              key={i}
              className={isTarget ? "font-bold text-red-500 rounded px-0.5" : ""}
            >
              {part}
              {i < parts.length - 1 ? " " : ""}
            </span>
          );
        })}
        )
      </>
    );
  };

  const renderVariant = (variant: Variant): JSX.Element => {
    const isBase = variant.delta === 0;

    return (
      <div
        key={variant.type + variant.value}
        className={`flex-[0_1_30%] group transition-all duration-200 hover:scale-105 hover:shadow-lg`}
      >
        <div
          className={`h-34 rounded-lg shadow-md flex items-end justify-center p-3 relative overflow-hidden ${
            isBase ? "ring-4 ring-white/50 shadow-xl" : ""
          }`}
          style={{ background: variant.color }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigator.clipboard
                ?.writeText(variant.color)
                .then(() => setCopiedColorKey(variant.type + variant.value));
            }
          }}
          onClick={() => {
            navigator.clipboard
              ?.writeText(variant.color)
              .then(() => setCopiedColorKey(variant.type + variant.value));
          }}
        >
          <div className="absolute inset-0 transition-colors duration-200" />

          {/* badge: type + value */}
          <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-sm rounded px-2 py-1 text-white text-xs font-medium">
            {variant.type}: {variant.value}
          </div>

          {/* full color token (click to copy) */}
          <div
            className={`absolute bottom-3 left-3 bg-white/90 text-black text-[12px] px-2 py-0.5 rounded-md tracking-wider shadow-sm ${
              isBase ? "italic" : ""
            }`}
          >
            {formatColorWithHighlight(variant.color, variant.type)}
          </div>

          {isBase && (
            <div className="absolute top-3 right-3 bg-white/90 text-black text-[10px] italic px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Base
            </div>
          )}

          <AnimatePresence>
            {copiedColorKey === variant.type + variant.value && (
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-lg rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                onAnimationComplete={() => setCopiedColorKey("")}
              >
                Copied!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

  const renderSection = (title: string, variants: Variant[], description: string): JSX.Element => (
    <div
      className="space-y-4 rounded-2xl p-6 border"
      title="Click or press Enter to copy color"
      style={{
        backgroundColor: "var(--color-surface)",
        // subtle thin horizontal lines on top of the surface
        backgroundImage:
          "repeating-linear-gradient(180deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 20px)",
        backgroundRepeat: "repeat",
        backgroundPosition: "0 0",
        borderColor: "var(--color-border-200)",
      }}
    >
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex flex-wrap gap-3">{variants.map((v) => renderVariant(v))}</div>
    </div>
  );

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
            {renderSection(
              "Lightness Variants",
              lVariants,
              "Adjusting lightness from dark to bright while keeping chroma and hue constant. Lighteness (L) ranges from 0 to 1."
            )}

            {renderSection(
              "Chroma Variants",
              cVariants,
              "Adjusting color intensity from muted to vibrant while keeping lightness and hue constant. Chroma (C) ranges from 0 to theoretically unlimited vibrant colors, but in practice values above ~0.5 may not render well."
            )}

            {renderSection(
              "Hue Variants",
              hVariants,
              "Rotating through different hues while keeping lightness and chroma constant. Hue (H) is measured in degrees around the color wheel (0-360)."
            )}

            {/* Alpha section added */}
            {renderSection(
              "Alpha (Transparency) Variants",
              aVariants,
              "Varying alpha from fully transparent to fully opaque. Useful for overlays and subtle UI accents. Alpha (A) ranges from 0 (transparent) to 1 (opaque)."
            )}
          </div>
        )}


        {/* Theme Controller & Context */}
        <div className="top-4 z-50 mt-16">
          <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-4 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-base font-semibold text-gray-900">Theme</h2>
              <p className="text-gray-500 text-xs hidden md:block">
                Switching modes only affects <b>L</b> (lightness). Hue/Chroma stay constant.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-gray-100/80 p-1 rounded-xl border border-gray-200/50">
              <button
                onClick={() => setDarkMode(false)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  !darkMode
                    ? "bg-white text-gray-900 shadow-sm ring-1 ring-black/5"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Light
              </button>
              <button
                onClick={() => setDarkMode(true)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  darkMode
                    ? "bg-gray-800 text-white shadow-sm ring-1 ring-black/5"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                Dark
              </button>
            </div>
          </div>
        </div>

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
