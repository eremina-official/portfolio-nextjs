"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageMenu } from "@/components/LanguageMenu";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/contacts", label: "Contacts" },
];

export function Activity() {
  const pathname = usePathname();
  const t = useTranslations('nav');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <div className="mx-auto">
        <LanguageMenu />
      </div>

      <div className="relative flex items-center gap-4">
        <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-zinc-900 ${
                  isActive ? "text-zinc-900" : ""
                }`}
              >
                {t(link.label)}
              </Link>
            );
          })}
        </nav>
        {/* <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-zinc-300 p-2 text-sm text-zinc-700 transition hover:border-indigo-200 hover:text-indigo-600 md:hidden"
          aria-label="Toggle navigation"
          onClick={toggleNav}
          aria-expanded={isNavOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isNavOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity ${
                isNavOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isNavOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button> */}
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-72 translate-x-full bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isNavOpen ? "translate-x-0" : ""
        }`}
      >
        <div className="flex h-full flex-col px-6 py-12">
          <nav className="flex flex-col gap-6 text-base font-medium text-zinc-700">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors hover:text-indigo-600 ${
                    isActive ? "text-indigo-600" : ""
                  }`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto border-t border-zinc-200 pt-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Language
            </p>
            <div className="mt-3">
              <LanguageMenu />
            </div>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={closeNav}
          aria-label="Close navigation overlay"
        />
      )}
    </>
  );
}

