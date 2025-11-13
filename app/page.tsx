import Link from "next/link";
import { Card } from "@/components/Card";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Frontend Developer
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Crafting thoughtful, performant interfaces that turn ideas into
          intuitive user experiences.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          I design and build modern web applications with a focus on clean
          design, accessible interactions, and maintainable code. Explore the
          selected projects below or reach out if you’d like to collaborate.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contacts"
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-500"
          >
            Let’s work together
          </Link>
          <Link
            href="/skills"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-indigo-200 hover:text-indigo-600"
          >
            View skills
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">
              Featured projects
            </h2>
            <p className="text-sm text-zinc-500">
              Highlights from recent work and explorations.
            </p>
          </div>
          <Link
            href="#"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:inline-block"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
