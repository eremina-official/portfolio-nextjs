import Link from "next/link";
import type { Project } from "@/types/projectTypes";
import { useTranslations } from "next-intl";
import Image from "next/image";

type CardProps = {
  project: Project;
};

export function Card({ project }: CardProps) {
  const t = useTranslations("projectsPage");
  const { id, href, tech, github, thumbnail } = project;
  const currentProject = `projects.${id}`;

  return (
    <article
        key={id}
        className="relative group flex h-full flex-col rounded-2xl border border-border-200 bg-white/90 px-6 py-7 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {/* Card link overlay */}
        <Link
          href={href}
          className="absolute inset-0 z-10"
          aria-label="Open project details"
        />

        <div
          className={`
            relative mb-4 h-40 rounded-xl
            bg-cover bg-center
            after:absolute after:inset-0
            ${thumbnail ? '' : 'after:bg-gradient-to-t after:from-black/60'} transition-transform duration-300 group-hover:scale-102
          `}
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />


        <div className="flex items-center justify-between">
          <h3
            className="text-lg font-semibold bg-clip-text text-transparent 
            transition-all duration-500 
            bg-[linear-gradient(to_right,_theme(colors.text),_theme(colors.text))] 
            group-hover:bg-gradient-to-r 
            group-hover:from-primary group-hover:to-accent"
          >
            {t(`${currentProject}.title`)}
          </h3>
        </div>

        <p className="mt-3 flex-1 text-sm text-subtext leading-relaxed">
          {t(`${currentProject}.description`)}
        </p>

        {tech.length ? (
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-500">
            {tech.map((item) => (
              <li key={item} className="rounded-full px-4 py-1 text-xs font-medium
             bg-primary/10 backdrop-blur-sm
             border border-primary/20
             text-accent/80">
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex items-center justify-between border-t border-border-200 pt-4 text-sm">
          {/* Primary action */}
          <div className="flex items-center gap-1 font-medium text-primary transition-colors group-hover:text-primary-dark">
            {t(href !== "#" ? "ctaLabel" : "comingSoon")}
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </div>

          {/* Secondary action */}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 inline-flex items-center gap-1 rounded-lg px-3 py-1.5
                      text-subtext transition
                      hover:bg-zinc-100 hover:text-text
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
          >
            GitHub
            <span aria-hidden className="text-xs">↗</span>
          </a>
        </div>
      </article>
  );
}
