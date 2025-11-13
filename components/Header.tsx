import Link from "next/link";
import { Activity } from "@/components/Activity";
import { useTranslations } from "next-intl";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900">
          {t("title")}
        </Link>
        <Activity />
      </div>
    </header>
  );
}
