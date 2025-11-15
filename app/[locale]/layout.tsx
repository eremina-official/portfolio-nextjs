import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio",
  description: "Showcasing work, skills, and contact information for a frontend developer.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  console.log("locale");

  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 text-zinc-900 antialiased`}
      >
        <NextIntlClientProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <div className="mx-auto w-full max-w-7xl px-6 py-16">{children}</div>
            </main>
            <footer className="border-t border-border-200 bg-background py-6 text-center text-sm text-zinc-500">
              © {new Date().getFullYear()} Frontend Portfolio. All rights reserved.
            </footer>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
