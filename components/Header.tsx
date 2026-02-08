import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { useTranslations } from "next-intl";
import GitHubIcon from "@/assets/icons/github.svg";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b border-zinc-200 shadow-sm z-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
            {t("title")}
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <NavBar />
          <Link
            href="https://github.com/eremina-official/portfolio-nextjs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View portfolio source on GitHub"
            className="group relative order-1 md:order-2 inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white p-2 text-zinc-700 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:text-primary"
          >
            <span className="absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_ease-in-out_infinite] rounded-[40%] bg-gradient-to-tr from-primary/95 to-accent/35" />
            <GitHubIcon className="relative z-10 size-5" />
          </Link>
        </div>
      </div>
    </header>
  );
}
