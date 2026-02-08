import { Card } from "@/components/Card";
import { projects } from "@/data/projects";
import { useTranslations } from "next-intl";
import { Container } from "@/components/Container";
import * as motion from "motion/react-client";

export default function Projects() {
  const t = useTranslations("projectsPage");

  return (
    <Container className="flex flex-col gap-16 py-12">
      <section className="max-w-4xl flex flex-col gap-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {t("badge")}
        </p>

        <motion.h1
          initial={{ y: 6, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className="font-semibold tracking-tight text-text"
        >
          {t("title")}
        </motion.h1>

        <p className="text-lg text-subtext">{t("description")}</p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </Container>
  );
}
