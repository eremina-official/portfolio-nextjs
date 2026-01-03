import { useTranslations } from "next-intl";
import ContactCard from "./ContactCard";
import { Container } from "@/components/Container";

interface ContactCardData {
  id: string;
  title: string;
  description: string;
  href: string;
  label: string;
  isExternal: boolean;
}

export default function ContactsPage() {
  const t = useTranslations("contacts");

  const contactCards: ContactCardData[] = [
    {
      id: "medium",
      title: t("cards.0.title"),
      description: t("cards.0.description"),
      href: "https://medium.com/@marinaeremina",
      label: t("cards.0.label"),
      isExternal: true,
    },
    {
      id: "linkedin",
      title: t("cards.1.title"),
      description: t("cards.1.description"),
      href: "https://www.linkedin.com/in/marina-eremina-17672b36b",
      label: t("cards.1.label"),
      isExternal: true,
    },
    {
      id: "github",
      title: t("cards.2.title"),
      description: t("cards.2.description"),
      href: "https://github.com/eremina-official",
      label: t("cards.2.label"),
      isExternal: true,
    },
  ];

  return (
    <main>
      <Container className="flex flex-col gap-10 py-8">
        <header className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {t("badge")}
          </p>
          <h1 className="text-3xl font-semibold text-text sm:text-4xl">{t("title")}</h1>
          <p className="max-w-2xl text-base text-subtext">{t("description")}</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card) => (
            <ContactCard
              key={card.id}
              title={card.title}
              description={card.description}
              href={card.href}
              label={card.label}
              isExternal={card.isExternal}
            />
          ))}
        </div>

        <section className="rounded-2xl border border-dashed border-zinc-200 bg-white p-6 text-sm text-zinc-600">
          <p>{t("outro")}</p>
        </section>
      </Container>
    </main>
  );
}
