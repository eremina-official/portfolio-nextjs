import type { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    id: 1,
    title: "OKLCH Color Explorer",
    tech: ["Next.js", "Tailwind CSS", "OKLCH"],
    href: "/projects/oklch",
    github: "https://github.com/eremina-official/portfolio-nextjs/tree/main/app/%5Blocale%5D/projects/oklch",
  },
  {
    id: 2,
    title: "Map showing species distribution",
    tech: ["React", "TypeScript", "Framer Motion"],
    href: "#",
    github: "#",
  },
  {
    id: 3,
    title: "EWF wrestling roleplaying page",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Gray wolf distribution map",
    tech: ["Next.js", "MapLibre GL", "Tailwind CSS"],
    href: "/projects/rare-species-map",
    github: 'https://github.com/eremina-official/portfolio-nextjs/tree/main/app/%5Blocale%5D/projects/rare-species-map',
  },
];
