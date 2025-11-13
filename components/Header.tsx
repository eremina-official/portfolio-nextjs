"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Activity } from "@/components/Activity";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/contacts", label: "Contacts" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-zinc-200 bg-white/90 shadow-sm backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          Frontend Portfolio
        </Link>
        <Activity links={navLinks} pathname={pathname} />
      </div>
    </header>
  );
}

