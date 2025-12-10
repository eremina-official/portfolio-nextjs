"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageMenu } from "@/components/LanguageMenu";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

type NavLink = {
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/contacts", label: "Contacts" },
];

const mdBreakpoint = 768; // Tailwind's 'md' breakpoint in pixels

export function NavBar() {
  const pathname = usePathname();
  const locale = useLocale() || "en";
  const t = useTranslations("nav");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const normalizedPath = pathname === `/${locale}` ? "/" : pathname.replace(/^\/[^/]+(?=\/|$)/, "");

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      const md = window.matchMedia(`(min-width: ${mdBreakpoint}px)`);
      if (md.matches) {
        setIsNavOpen(true);
      } else {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const md = window.matchMedia(`(min-width: ${mdBreakpoint}px)`);
    const handle = () => setIsNavOpen(md.matches);
    handle();
    md.addEventListener("change", handle);
    return () => md.removeEventListener("change", handle);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsNavOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative flex items-center justify-between">
      {/* mobile menu button */}
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white p-2 text-sm text-zinc-700 shadow-sm transition hover:border-primary-light hover:text-primary md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isNavOpen}
        aria-controls="mobile-menu"
        onClick={toggleNav}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              isNavOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${
              isNavOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${
              isNavOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      <div className="relative flex items-center gap-4">
        <nav
          className={`flex flex-col md:flex-row md:static md:translate-x-0 md:bg-transparent md:shadow-none absolute top-12 right-[-25] w-[70vw] max-w-xs rounded-2xl border border-zinc-200 bg-white/95 p-4 shadow-xl ring-1 ring-black/5 transition-transform duration-300 ease-in-out ${
            isNavOpen ? "translate-x-0" : "translate-x-full"
          } md:border-0 md:bg-transparent md:p-0 md:shadow-none md:ring-0 md:w-auto md:max-w-none md:transform-none md:items-center md:h-auto`}
        >
          {navLinks.map((link, index) => {
            const isActive = normalizedPath === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-3 md:px-3 md:py-2 font-semibold whitespace-nowrap cursor-pointer transition-colors duration-200 ${
                  index !== navLinks.length - 1 ? "border-b md:border-0 border-zinc-200" : ""
                } ${isActive ? "text-primary" : "text-zinc-700 hover:text-primary"}`}
                onClick={() => !isNavOpen || setIsNavOpen(false)}
              >
                {t(link.label)}
                <span
                  className={`pointer-events-none absolute left-4 right-4 bottom-2 md:-bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary/70 to-accent/70 transition-all duration-200 md:left-0 md:right-0 ${
                    isActive
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="mx-auto hidden md:block">
          <LanguageMenu />
        </div>
      </div>
    </div>
  );
}
