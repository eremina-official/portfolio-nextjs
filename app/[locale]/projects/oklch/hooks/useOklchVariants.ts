import { useMemo } from "react";

export interface Variant {
  color: string;
  delta: number;
  type: string;
  value: string;
}

export interface OklchVariants {
  lVariants: Variant[];
  cVariants: Variant[];
  hVariants: Variant[];
  aVariants: Variant[];
  isValid: boolean;
}

export function useOklchVariants(input: string): OklchVariants {
  return useMemo(() => {
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
        .filter((v): v is Variant => v !== null);

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
        .filter((v): v is Variant => v !== null);

      const hVariants = [-2, -1, 0, 1, 2, 3].map((s) => {
        const hv = (h + s * hStep + 360) % 360;

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
}
