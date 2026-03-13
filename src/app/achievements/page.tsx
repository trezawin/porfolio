import Link from "next/link";
import { ExternalLink, Award, Trophy, CalendarDays, Building2 } from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/portfolio-data";

export default function AchievementsPage() {
  const certificationAccents = ["#16a34a", "#0ea5e9", "#f59e0b", "#ec4899", "#6366f1"];

  const certifications = [...CERTIFICATIONS].sort((a, b) => {
    const dateA = Date.parse(a.issued);
    const dateB = Date.parse(b.issued);
    if (Number.isNaN(dateA) || Number.isNaN(dateB)) return 0;
    return dateB - dateA;
  });

  const achievements = [...ACHIEVEMENTS].sort((a, b) =>
    (b.period ?? "").localeCompare(a.period ?? "")
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-12 md:mb-16">
      <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
          <h2 className="font-heading text-2xl tracking-tight">
            Recent Certifications
          </h2>
        </div>
        {/* <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-300">
          Professional growth validated through formal credentials and real-world
          wins.
        </p> */}
      </header>

      <section>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Continuous learning across data science, analytics, and engineering
          practices.
        </p>
        
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <article
              key={`${cert.title}-${cert.issued}`}
              className="grid grid-cols-[8px_1fr_auto] items-center gap-3 rounded-2xl border bg-white px-3 py-2.5 text-sm text-neutral-600 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300"
            >
              <div
                aria-hidden
                className="h-9 w-2 rounded-full"
                style={{ backgroundColor: certificationAccents[index % certificationAccents.length] }}
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {cert.title}
                </p>
                <p className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                  <Building2 className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{cert.issuer}</span>
                  <span className="text-neutral-400">|</span>
                  <CalendarDays className="h-3.5 w-3.5 shrink-0" />
                  <span>{cert.issued}</span>
                </p>
              </div>
              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 rounded-full border border-neutral-300 px-2 py-1 text-[11px] font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500 dark:hover:bg-neutral-900"
                >
                  Show credential <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      {achievements.length > 0 && (
        <section className="mt-16">
          <br/><br/>
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Selected recognitions from hackathons and collaborative projects.
          </p>
          </div>

          <ul className="mt-6 space-y-5">
            {achievements.map((achievement) => (
              <li
                key={`${achievement.title}-${achievement.period}`}
                className="rounded-3xl border p-5 md:p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                  <p className="font-semibold tracking-tight">
                    {achievement.title}
                  </p>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                    {achievement.period}
                  </p>
                </div>
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {achievement.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
