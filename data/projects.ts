import type { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    id: 1,
    title: "OKLCH Color Explorer",
    tech: ["Next.js", "Tailwind CSS", "CSS", "OKLCH"],
    href: "/projects/oklch",
    github: "https://github.com/eremina-official/portfolio-nextjs/tree/main/app/%5Blocale%5D/projects/oklch",
    thumbnail: "/projects/oklch.png",
    tags: ["web"],
  },
  {
    id: 2,
    title: "Coffee Market ETL",
    tech: ["Python", "Pydantic", "SQL", "Azure", "PowerBI"],
    href: "/projects/coffee-market-etl",
    github: "https://github.com/eremina-official/data-coffee-market",
    thumbnail: "",
    tags: ["data"],
  },
  {
    id: 3,
    title: "EWF wrestling roleplaying page",
    tech: ["Wordpress", "SQL", "PHP", "FTP", "HTML/CSS"],
    href: "https://ewf.page.gd/",
    github: "#",
    thumbnail: "/projects/ewf.png",
    tags: ["web"],
  },
  {
    id: 4,
    title: "Gray wolf distribution map",
    tech: ["Next.js", "MapLibre GL", "Tailwind CSS"],
    href: "/projects/rare-species-map",
    github: 'https://github.com/eremina-official/portfolio-nextjs/tree/main/app/%5Blocale%5D/projects/rare-species-map',
    thumbnail: "/projects/gray-wolf-map.png",
    tags: ["web"],
  },
  {
    id: 5,
    title: "Glassmorphism CSS Experiments",
    tech: ["Next.js", "Tailwind CSS", "CSS"],
    href: "/projects/glassmorphism-css-experiments",
    github: "https://github.com/eremina-official/portfolio-nextjs/tree/main/app/%5Blocale%5D/projects/glassmorphism-css-experiments",
    thumbnail: "/projects/glassmorphism-css.png",
    tags: ["web", "css"],
  },
];
