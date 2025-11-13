import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

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
  description:
    "Showcasing work, skills, and contact information for a frontend developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-zinc-50 text-zinc-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-5xl px-6 py-16">{children}</div>
          </main>
          <footer className="border-t border-zinc-200 bg-white/80 py-6 text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Frontend Portfolio. All rights
            reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
