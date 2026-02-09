import { Metadata } from "next";
import { GlassmorphismLoginForm } from "./GlassmorphismLoginForm";
import { GlassmorphismLoginFormRed } from "./GlassmorphismLoginFormRed";
import { PremiumProductCard } from "./PremiumProductCard";

export const metadata: Metadata = {
  title: "Glassmorphism CSS Experiments",
  description: "A login form demonstrating glassmorphism design style with a mountain background.",
};

export default function GlassmorphismPage() {
  return (
    // z-1 is used to create corrent stacking context for mobile menu
    <div className="relative scroll-smooth bg-black/30 z-1">
      <div className="flex flex-col">
        <GlassmorphismLoginForm />
        <GlassmorphismLoginFormRed />
        <PremiumProductCard />
      </div>
    </div>
  );
}

