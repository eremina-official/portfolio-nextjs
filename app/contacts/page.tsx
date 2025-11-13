import Link from "next/link";

export default function ContactsPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          Let’s create something together.
        </h1>
        <p className="max-w-2xl text-base text-zinc-600">
          Whether you have a product idea, a design ready to be implemented, or
          you simply want to say hello, feel free to reach out through any of
          the channels below.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            Email
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Prefer a written overview? Send me a message with project context or
            a quick hello.
          </p>
          <Link
            href="mailto:hello@example.com"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
          >
            hello@example.com
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            LinkedIn
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Let’s connect and chat about work, collaboration opportunities, or
            shared interests.
          </p>
          <Link
            href="https://www.linkedin.com/"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect on LinkedIn
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            GitHub
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            Explore more experiments, open-source contributions, and in-progress
            ideas.
          </p>
          <Link
            href="https://github.com/"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Profile
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>
      </section>

      <section className="rounded-2xl border border-dashed border-zinc-200 bg-white p-6 text-sm text-zinc-600">
        <p>
          Located in your favorite time zone. Available for freelance projects,
          full-time roles, and speaking engagements.
        </p>
      </section>
    </div>
  );
}

