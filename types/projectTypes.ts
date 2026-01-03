export type Tag = "web" | "mobile" | "data" | "game";

export interface Project {
  id: number;
  title: string;
  tech: string[];
  href: string;
  github: string;
  thumbnail: string;
  tags: Tag[];
}
