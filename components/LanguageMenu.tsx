"use client";

import { useTransition, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export type LanguageOption = {
  code: string;
  label: string;
  flag: string;
};

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "pl", label: "Polish", flag: "🇵🇱" },
];

export function LanguageMenu() {
  const t = useTranslations("languageMenu");
  const locale = useLocale() || "en";
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const currentLanguage = languages.find((language) => language.code === locale);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (code: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: code });
    });
  };

  return (
    <>
      <div className="relative">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span aria-hidden>{currentLanguage?.flag}</span>
          <span>{currentLanguage?.label}</span>
        </button>

        {isOpen ? (
          <div className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg">
            {currentLanguage?.label ? (
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {currentLanguage?.label}
              </p>
            ) : null}
            <div className="flex flex-col">
              {languages.map((language) => {
                const isActive = language.code === locale;
                return (
                  <button
                    key={language.code}
                    type="button"
                    className={`flex items-center gap-2 px-4 py-3 text-left text-sm transition ${
                      isActive ? "bg-indigo-50 text-indigo-600" : "text-zinc-600 hover:bg-zinc-50"
                    }`}
                    onClick={() => handleSelect(language.code)}
                    disabled={isPending}
                  >
                    <span aria-hidden>{language.flag}</span>
                    <span>{t(language.label)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
      {isOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-transparent"
          aria-hidden
          tabIndex={-1}
          onClick={() => setIsOpen(false)}
        />
      ) : null}
    </>
  );
}
