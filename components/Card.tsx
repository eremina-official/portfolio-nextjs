import Link from "next/link";
import type { Project } from "@/types/projectTypes";
import { useTranslations } from "next-intl";

type CardProps = {
  project: Project;
};

export function Card({ project }: CardProps) {
  const t = useTranslations('home');
  const { id, title, description, href, badge, tech } = project;
  
  return (
    <article key={id} className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>
        {badge ? (
          <span className="text-xs font-medium uppercase text-indigo-500">
            {badge}
          </span>
        ) : null}
      </div>
      <p className="mt-3 flex-1 text-sm text-zinc-600">{description}</p>
      {tech.length ? (
        <ul className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-indigo-50 px-3 py-1 text-indigo-600"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
      >
        {t(`projectsSection.ctaLabel`)}
        <span aria-hidden className="ml-1 transition group-hover:translate-x-1">
          →
        </span>
      </Link>
    </article>
  );
}

