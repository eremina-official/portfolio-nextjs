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
    <div className="relative scroll-smooth bg-black/30">
      <div className="flex flex-col gap-8 pb-8">
        <GlassmorphismLoginForm />
        <GlassmorphismLoginFormRed />
        <PremiumProductCard />
      </div>
    </div>
  );
}

