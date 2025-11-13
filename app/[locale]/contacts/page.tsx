import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ContactsPage() {
  const t = useTranslations('contacts');
  return (
    <div className="flex flex-col gap-10">
      <header className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          {t('badge')}
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
          {t('title')}
        </h1>
        <p className="max-w-2xl text-base text-zinc-600">
          {t('description')}
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {t('cards.0.title')}
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            {t('cards.0.description')}
          </p>
          <Link
            href="mailto:hello@example.com"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
          >
            {t('cards.0.label')}
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
            {t('cards.1.title')}
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            {t('cards.1.description')}
          </p>
          <Link
            href="https://www.linkedin.com/"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cards.1.label')}
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              {t('cards.2.title')}
          </h2>
          <p className="mt-3 text-sm text-zinc-600">
            {t('cards.2.description')}
          </p>
          <Link
            href="https://github.com/"
            className="mt-5 inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('cards.2.label')}
            <span aria-hidden className="ml-1">↗</span>
          </Link>
        </article>
      </section>

      <section className="rounded-2xl border border-dashed border-zinc-200 bg-white p-6 text-sm text-zinc-600">
        <p>
          {t('outro')}
        </p>
      </section>
    </div>
  );
}

