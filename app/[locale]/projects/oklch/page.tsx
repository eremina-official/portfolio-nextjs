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

// export default function OklchDarkModeExample() {
//   const [isDark, setIsDark] = useState(false);

//   const light = {
//     bg: "oklch(0.98 0.02 250)",
//     text: "oklch(0.20 0.02 250)",
//     primary: "oklch(0.70 0.20 260)",
//   };

//   const dark = {
//     bg: "oklch(0.12 0.02 250)",
//     text: "oklch(0.95 0.02 250)",
//     primary: "oklch(0.40 0.20 260)",
//   };

//   const theme = isDark ? dark : light;

//   return (
//     <div
//       className="min-h-screen p-10 flex flex-col items-start gap-6 transition-all duration-300"
//       style={{ background: theme.bg, color: theme.text }}
//     >
//       <h1 className="text-3xl font-bold">OKLCH Dark Mode Example</h1>

//       <button
//         onClick={() => setIsDark((prev) => !prev)}
//         className="px-4 py-2 rounded-xl shadow text-white"
//         style={{ background: theme.primary }}
//       >
//         Toggle Dark Mode
//       </button>

//       <p className="max-w-xl text-lg">
//         This page switches between light and dark mode by changing only the <b>L</b>
//         (lightness) value of OKLCH colors. Hue and chroma stay the same, so colors remain visually
//         consistent across themes.
//       </p>
//     </div>
//   );
// }

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

  const renderVariant = (variant: Variant): JSX.Element => (
    <div
      key={variant.type + variant.value}
      className="flex-[0_1_30%] group transition-all duration-200 hover:scale-105 hover:shadow-lg"
    >
      <div
        className="h-34 rounded-lg shadow-md flex items-end justify-center p-3 relative overflow-hidden"
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
        <div className="absolute bottom-3 left-3 bg-black/20 backdrop-blur-sm rounded px-2 py-1 text-white text-sm font-medium">
          {variant.color}
        </div>

        {variant.delta === 0 && (
          <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full shadow-sm" />
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

        {/* Toggle Dark Mode section */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-4 py-2 rounded-xl shadow bg-(--color-oklch-primary) text-(--color-oklch-text)"
        >
          Toggle Dark Mode
        </button>

        <p className="max-w-xl text-lg text-(--color-oklch-text)">
          This page switches between light and dark mode by changing only the <b>L</b>
          (lightness) value of OKLCH colors. Hue and chroma stay the same, so colors remain visually
          consistent across themes.
        </p>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <label className="block text-sm font-medium text-gray-600 mb-2">OKLCH Color Input</label>
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
