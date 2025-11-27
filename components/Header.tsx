import Link from "next/link";
import { NavBar } from "@/components/NavBar";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b border-zinc-200 shadow-sm backdrop-blur-sm z-10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          {t("title")}
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
