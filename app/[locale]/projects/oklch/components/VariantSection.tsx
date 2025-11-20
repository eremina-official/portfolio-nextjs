import { JSX } from "react";
import { Variant } from "../hooks/useOklchVariants";
import { VariantCard } from "./VariantCard";
import bg from "../bg-maple-leaf.png";

interface VariantSectionProps {
  title: string;
  variants: Variant[];
  description: string;
}

export function VariantSection({ title, variants, description }: VariantSectionProps): JSX.Element {
  return (
    <div
      className="space-y-4 rounded-2xl p-6 border-2 border-(--color-border-200) bg-white/80"
      title="Click or press Enter to copy color"
      style={variants[0].type === "A" ? {
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      } : {
        backgroundColor: "var(--color-surface)",
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
