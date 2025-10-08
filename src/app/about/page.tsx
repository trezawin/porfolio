import { Globe } from "lucide-react";
import Link from "next/link";
import { PROFILE, SKILL_GROUPS } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <header className="mb-12 md:mb-16">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          About
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Snapshot of what I value, how I work, and the tools I lean on day to day.
        </p>
        <p className="mt-6 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300 md:text-base">
          I'm someone who loves solving problems whether it's debugging code, refining data models, or finding a smarter way to do things. I started my career in software engineering, where I learned the value of clean systems and clear thinking. Over time, my curiosity for data grew into a passion for AI and machine learning. I'm proactive, result-driven, and value clarity and discipline in how I work. Outside of tech, I enjoy learning languages, exploring cities, and finding small ways to make things more efficient both in code and in life.
        </p>
      </header>

      {PROFILE.languages && PROFILE.languages.length > 0 && (
        <section className="mt-12">
          <div className="flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
            <Globe className="h-4 w-4" />
            <h2 className="text-xl font-semibold tracking-tight">Languages</h2>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
            {PROFILE.languages.map((language) => (
              <li key={language.name}>
                {language.name} · {language.level}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 border-t pt-10">
        <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Core toolkit
        </h2>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Technologies and practices I rely on when shaping products and platforms.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="rounded-3xl border p-5 dark:border-neutral-700">
              <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={`${group.title}-${skill}`}
                    className="rounded-full border px-3 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t pt-10 text-m text-neutral-500 dark:text-neutral-400">
        <p>
          Want a deeper dive? I can walk through architecture decisions, product outcomes, or share additional case studies on request.
        </p>
        <p className="mt-2">
          Prefer reading? My résumé has a chronological view: {" "}
          <Link href="/CV-Treza_BAWM_WIN.pdf" download className="underline opacity-80 hover:opacity-100">
            download here
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
