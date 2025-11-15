"use client";

import { useState, useEffect, Activity } from "react";
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

const mdBreakpoint = 768; // Tailwind's 'md' breakpoint in pixels

export function NavBar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navClassNames = `
  flex flex-col md:flex-row
  md:static md:translate-x-0 md:bg-transparent md:shadow-none
  absolute top-10 right-[-25] w-[35vw] bg-surface shadow-lg rounded-2xl md:rounded-none
  transform transition-transform duration-300 ease-in-out
  ${isNavOpen ? "translate-x-0" : "translate-x-full"}
  md:items-center md:h-auto md:w-auto md:p-0 overflow-hidden
`;

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= mdBreakpoint) {
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
    // Only run on client
    if (window.innerWidth >= 768) {
      setIsNavOpen(true);
    } else {
      setIsNavOpen(false);
    }
  }, [pathname]);

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
        className="inline-flex items-center justify-center rounded-full border border-zinc-300 p-2 text-sm text-zinc-700 transition hover:border-primary-light hover:text-primary md:hidden cursor-pointer"
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
        <nav className={navClassNames}>
          {navLinks.map((link, index) => {
            const normalizedPath =
              pathname === "/" ? "/" : pathname.replace(/^\/[^/]+(?=\/|$)/, "");
            const isActive = normalizedPath === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors p-10 md:p-3 font-semibold ${index !== navLinks.length - 1 ? "border-b" : ""} md:border-none md:rounded-xl border-zinc-300 whitespace-nowrap cursor-pointer active:bg-zinc-100 ${
                  isActive ? "bg-zinc-300" : ""
                }`}
              >
                {t(link.label)}
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
