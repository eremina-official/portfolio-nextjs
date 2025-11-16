import { useTranslations } from "next-intl";

const skills = [
  {
    title: "Core Frontend",
    items: [
      "HTML5 & Semantic Markup",
      "CSS3 & Tailwind CSS",
      "JavaScript (ES2023)",
      "TypeScript",
      "Accessibility (a11y) Best Practices",
      "Responsive Web Design (Mobile-First)",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React & Next.js",
      "Tailwind CSS",
      "TanStack Query (React Query)",
      "Framer Motion",
      "Testing Library & Vitest",
    ],
  },
  {
    title: "Tooling & Workflow",
    items: [
      "Git & GitHub",
      "Figma & Design Handoff",
      "CI/CD Pipelines",
      "Vercel",
      "Performance Auditing",
      "AI Tools (Cursor, GitHub Copilot)",
    ],
  },
];

export default function SkillsPage() {
  const t = useTranslations("skills");

  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t("badge")}</p>
        <h1 className="text-3xl font-semibold text-text sm:text-4xl">{t("title")}</h1>
        <p className="max-w-2xl text-base text-subtext">{t("description")}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {skills.map((category) => (
          <article
            key={category.title}
            className="flex flex-col gap-4 rounded-2xl border border-border-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-primary">{category.title}</h2>
            <ul className="flex flex-col gap-2 text-sm text-text">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden className="text-primary">
                    ▹
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-primary-light bg-indigo-50/50 p-6 text-sm text-primary">
        <p>{t("outro")}</p>
      </section>
    </div>
  );
}
