import { PROFILE } from "@/lib/portfolio-data";

export function SiteSocialRail() {
  return (
    <aside className="fixed right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border bg-white/80 p-3 shadow backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80 lg:flex">
      <span className="h-12 w-px bg-neutral-200 dark:bg-neutral-700" aria-hidden />
      {PROFILE.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target={social.href.startsWith("http") ? "_blank" : undefined}
          rel={social.href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={social.label}
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border text-neutral-700 transition hover:bg-black hover:text-white dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black"
        >
          <social.icon className="h-4 w-4" />
        </a>
      ))}
      <span className="h-12 w-px bg-neutral-200 dark:bg-neutral-700" aria-hidden />
    </aside>
  );
}
