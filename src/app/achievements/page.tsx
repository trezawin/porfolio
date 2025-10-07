import Link from "next/link";
import { ExternalLink, Award, Trophy } from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/portfolio-data";

export default function AchievementsPage() {
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
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Certifications & Achievements
        </h1>
        <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-300">
          Professional growth validated through formal credentials and real-world
          wins.
        </p>
      </header>

      <section>
        <div className="flex items-center gap-3">
          <Award className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
          <h2 className="text-2xl font-semibold tracking-tight">
            Certifications
          </h2>
        </div>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          Continuous learning across data science, analytics, and engineering
          practices.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div key={`${cert.title}-${cert.issued}`} className="border-l-4 border-fuchsia-400 pl-4 text-sm text-neutral-600 dark:text-neutral-300">
              <p className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {cert.title}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {cert.issuer}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                Issued {cert.issued}
              </p>
              {cert.credentialId && (
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              {cert.credentialUrl && (
                <Link
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs underline underline-offset-4 opacity-80 transition hover:opacity-100"
                >
                  Show credential <ExternalLink className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {achievements.length > 0 && (
        <section className="mt-16">
          <div className="flex items-center gap-3">
            <Trophy className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Highlights
            </h2>
          </div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Selected recognitions from hackathons and collaborative projects.
          </p>
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
