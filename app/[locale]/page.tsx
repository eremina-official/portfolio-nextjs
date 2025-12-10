import Link from "next/link";
import { Card } from "@/components/Card";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { Container } from "@/components/Container";

export default function Home() {
  const t = useTranslations("home");

  return (
    <Container className="flex flex-col gap-16 py-12">
      <section className="max-w-4xl flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">{t("badge")}</p>

        <motion.h1
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          style={{
            backgroundImage:
              "linear-gradient(90deg, oklch(0.5461 0.2152 262.88), oklch(0.50 0.22 350))",
            backgroundSize: "100% 100%",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
        >
          {t("title")}
        </motion.h1>

        <p className="text-lg text-zinc-600">{t("description")}</p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/contacts"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:bg-primary"
          >
            {t("primaryCta")}
          </Link>
          <Link
            href="/skills"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-indigo-200 hover:text-primary"
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <div className="flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">{t("projectsSection.title")}</h2>
            <p className="text-sm text-zinc-500">{t("projectsSection.subtitle")}</p>
          </div>
          <Link
            href="#"
            className="hidden text-sm font-medium text-primary hover:text-primary-dark sm:inline-block"
          >
            {t("projectsSection.viewAll")}
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Container>
  );
}
