import Link from "next/link";
import type { Project } from "@/types/projectTypes";
import { useTranslations } from "next-intl";

type CardProps = {
  project: Project;
};

export function Card({ project }: CardProps) {
  const t = useTranslations("home.projectsSection");
  const { id, href, tech } = project;
  const currentProject = `projects.${id}`;

  return (
    <Link href={href} className="block">
      <article
        key={id}
        className="group flex h-full flex-col rounded-2xl border border-border-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text">{t(`${currentProject}.title`)}</h3>
        </div>
        <p className="mt-3 flex-1 text-sm text-subtext">{t(`${currentProject}.description`)}</p>
        {tech.length ? (
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-500">
            {tech.map((item) => (
              <li key={item} className="rounded-full bg-indigo-50 px-5 py-2 text-accent">
                {item}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-6 inline-flex items-center text-sm font-medium text-primary transition group-hover:text-primary-dark">
          {t(href !== "#" ? `ctaLabel` : `comingSoon`)}
          <span aria-hidden className="ml-1 transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}
