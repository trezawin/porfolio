"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { useTheme } from "./theme-provider";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Achievements", href: "/achievements" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-950/80 dark:supports-[backdrop-filter]:bg-neutral-950/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="font-semibold tracking-tight">
          {PROFILE.name}
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-opacity ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="inline-flex items-center gap-1 rounded-2xl border px-2.5 py-1.5 text-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            {theme === "dark" ? (
              <>
                <Sun className="h-4 w-4" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="h-4 w-4" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>
          <Link
            href="/CV-Treza_BAWM_WIN.pdf"
            download
            className="rounded-2xl border px-3 py-1.5 text-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Download Résumé
          </Link>
        </div>
      </div>
      <nav className="flex gap-3 border-t border-neutral-200 px-4 py-2 text-sm md:hidden dark:border-neutral-800">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full border px-3 py-1 transition ${
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
