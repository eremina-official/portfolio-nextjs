import { JSX } from "react";
import { Variant } from "../hooks/useOklchVariants";
import { VariantCard } from "./VariantCard";

interface VariantSectionProps {
  title: string;
  variants: Variant[];
  description: string;
}

export function VariantSection({ title, variants, description }: VariantSectionProps): JSX.Element {
  return (
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
      <div className="flex flex-wrap gap-3">
        {variants.map((v) => (
          <VariantCard key={v.type + v.value} variant={v} />
        ))}
      </div>
    </div>
  );
}
