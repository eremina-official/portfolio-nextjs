import type { Project } from "@/types/projectTypes";

export const projects: Project[] = [
  {
    id: 1,
    title: "Travel Planner Dashboard",
    description:
      "A responsive dashboard that helps users plan trips, manage itineraries, and visualize budgets in real time.",
    tech: ["Next.js", "Tailwind CSS", "Chart.js"],
    href: "#",
  },
  {
    id: 2,
    title: "E-commerce Product Gallery",
    description:
      "An immersive product browsing experience with interactive filtering, 3D previews, and accessibility-first design.",
    tech: ["React", "TypeScript", "Framer Motion"],
    href: "#",
  },
  {
    id: 3,
    title: "Team Collaboration Suite",
    description:
      "A productivity suite featuring shared boards, task timelines, and seamless real-time collaboration tools.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    href: "#",
  },
];
