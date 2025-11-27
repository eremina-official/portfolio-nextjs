import { motion, AnimatePresence } from "motion/react";
import { useState, JSX } from "react";
import { Variant } from "../hooks/useOklchVariants";

interface VariantCardProps {
  variant: Variant;
}

export function VariantCard({ variant }: VariantCardProps): JSX.Element {
  const [copiedColorKey, setCopiedColorKey] = useState("");
  const isBase = variant.delta === (variant.type === "A" ? 1 : 0);

  const formatColorWithHighlight = (color: string, type: string) => {
    const match = color.match(/oklch\((.+)\)/);
    if (!match) return color;

    const content = match[1];
    const parts = content.split(" ");

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
            <span key={i} className={isTarget ? "font-bold text-red-500 rounded px-0.5" : ""}>
              {part}
              {i < parts.length - 1 ? " " : ""}
            </span>
          );
        })}
        )
      </>
    );
  };

  const handleCopy = () => {
    navigator.clipboard
      ?.writeText(variant.color)
      .then(() => setCopiedColorKey(variant.type + variant.value));
  };

  return (
    <div
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
          if (e.key === "Enter") handleCopy();
        }}
        onClick={handleCopy}
      >
        <div className="absolute inset-0 transition-colors duration-200" />

        {/* badge: type + value */}
        <div className="absolute top-3 left-3 bg-black/20 backdrop-blur-sm rounded px-2 py-1 text-white text-xs font-medium">
          {variant.type}: {variant.value}
        </div>

        {/* full color token (click to copy) */}
        <div
          className={`absolute bottom-3 left-3 bg-white/90 text-black text-[16px] px-2 py-0.5 rounded-md tracking-wider shadow-sm ${
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
}
