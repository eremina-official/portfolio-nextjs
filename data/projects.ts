import type { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    id: 1,
    title: "OKLCH Color Explorer",
    tech: ["Next.js", "Tailwind CSS", "OKLCH"],
    href: "/projects/oklch",
  },
  {
    id: 2,
    title: "Map showing species distribution",
    tech: ["React", "TypeScript", "Framer Motion"],
    href: "#",
  },
  {
    id: 3,
    title: "EWF wrestling roleplaying page",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "#",
  },
  {
    id: 4,
    title: "Rare species map",
    tech: ["Next.js", "MapLibre GL", "Tailwind CSS"],
    href: "/projects/rare-species-map",
  },
];
