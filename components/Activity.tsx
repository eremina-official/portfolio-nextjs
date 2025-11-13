"use client";

import { useState } from "react";
import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
};

type ActivityProps = {
  links: NavLink[];
  pathname: string;
};

export function Activity({ links, pathname }: ActivityProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="relative flex items-center">
        <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-600 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-zinc-900 ${
                  isActive ? "text-zinc-900" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-zinc-300 p-2 text-sm text-zinc-700 transition hover:border-indigo-200 hover:text-indigo-600 md:hidden"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
          aria-expanded={isOpen}
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 translate-x-full bg-white shadow-xl transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : ""
        }`}
      >
        <nav className="flex h-full flex-col gap-6 px-6 py-12 text-base font-medium text-zinc-700">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-indigo-600 ${
                  isActive ? "text-indigo-600" : ""
                }`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-30 bg-black/20 md:hidden"
          onClick={closeMenu}
          aria-label="Close navigation overlay"
        />
      )}
    </>
  );
}

