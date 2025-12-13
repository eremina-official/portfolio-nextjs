import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { useTranslations } from "next-intl";
import GitHubIcon from "@/assets/icons/github.svg";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b border-zinc-200 shadow-sm backdrop-blur-sm z-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
            {t("title")}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NavBar />
          <Link
            href="https://github.com/eremina-official/portfolio-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio source on GitHub"
            className="order-1 md:order-2 inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition hover:border-primary/30 hover:bg-white/80 hover:shadow-md hover:text-primary"
          >
            <GitHubIcon className="size-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
