const skills = [
  {
    title: "Core Frontend",
    items: ["HTML5 & Semantic Markup", "CSS3 & Tailwind CSS", "JavaScript (ES2023)", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React & Next.js", "React Query & SWR", "Framer Motion", "Testing Library & Vitest"],
  },
  {
    title: "Tooling & Workflow",
    items: ["Git & GitHub", "Figma & Design Handoff", "CI/CD Pipelines", "Performance Auditing"],
  },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Skills
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          A toolkit for building delightful web experiences.
        </h1>
        <p className="max-w-2xl text-base text-zinc-600">
          From translating designs into production-ready interfaces to optimizing
          performance and accessibility, these are the skills I lean on to ship
          quality work.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {skills.map((category) => (
          <article
            key={category.title}
            className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-lg font-semibold text-zinc-900">
              {category.title}
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-zinc-600">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden className="text-indigo-500">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-indigo-200 bg-indigo-50/50 p-6 text-sm text-indigo-800">
        <p>
          I continuously explore new tools and best practices—from design systems
          to emerging frameworks—to keep projects modern, efficient, and
          maintainable.
        </p>
      </section>
    </div>
  );
}

