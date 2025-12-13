"use client";

import { useTransition, useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { AnimatePresence, motion } from "motion/react";
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function LanguageMenu() {
  const t = useTranslations("languageMenu");
  const locale = useLocale() || "en";
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
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
      setIsOpen(false);
    });
  };

  return (
    <div ref={ref} className="relative z-50">
      <button
        type="button"
        className={`
          group flex items-center gap-2 rounded-full border border-white/20 
          bg-white/80 px-3 py-2 text-sm font-medium text-text shadow-sm 
          transition-all duration-200 
          hover:border-primary/30 hover:bg-white/80 hover:shadow-md cursor-pointer
        `}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="text-lg leading-none" aria-hidden>
          {currentLanguage?.flag}
        </span>
        <span className="hidden sm:inline-block">{currentLanguage?.label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute right-0 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-white/20 bg-white/80 p-1 shadow-xl backdrop-blur-xl ring-1 ring-black/5"
          >
            {currentLanguage?.label && (
              <div className="px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-subtext/80">
                  {t("selectLanguage")}
                </p>
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              {languages.map((language) => {
                const isActive = language.code === locale;
                return (
                  <button
                    key={language.code}
                    type="button"
                    className={`
                      relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text hover:bg-black/5 hover:text-primary"
                      }
                    `}
                    onClick={() => handleSelect(language.code)}
                    disabled={isPending}
                  >
                    <span className="text-lg leading-none" aria-hidden>
                      {language.flag}
                    </span>
                    <span className="flex-1 text-left">{t(language.label)}</span>
                    {isActive && <CheckIcon className="h-4 w-4 text-primary" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
