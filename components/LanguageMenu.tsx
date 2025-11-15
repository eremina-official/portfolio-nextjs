"use client";

import { useTransition, useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import useClickOutside from "@/hooks/useClickOutside";

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
  const ref = useRef<HTMLDivElement | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const currentLanguage = languages.find((language) => language.code === locale);
  const [isOpen, setIsOpen] = useState(false);
  useClickOutside(ref, () => setIsOpen(false));

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
      <div ref={ref} className="relative">
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

        <AnimatePresence>
          {isOpen ? (
            <motion.div
              key="menu"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 z-50 mt-2 w-48 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg"
            >
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
            </motion.div>
          ) : null}
        </AnimatePresence>
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
