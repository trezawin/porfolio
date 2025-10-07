import { MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/portfolio-data";

function getStartYear(period: string) {
  const match = period.match(/\d{4}/);
  return match ? match[0] : period;
}

export default function ExperiencePage() {
  const grouped = EXPERIENCE.reduce<
    Record<string, Array<(typeof EXPERIENCE)[number]>>
  >(
    (acc, role) => {
      const year = getStartYear(role.period);
      acc[year] = acc[year] ? [...acc[year], role] : [role];
      return acc;
    },
    {}
  );

  const experienceByYear = Object.entries(grouped).sort(
    ([yearA], [yearB]) =>
      (Number(yearB) || 0) - (Number(yearA) || 0)
  );

  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-32 -z-10 hidden h-[32rem] rounded-[3rem] bg-gradient-to-r from-fuchsia-200/40 via-sky-200/40 to-emerald-200/40 blur-3xl dark:from-fuchsia-500/10 dark:via-sky-500/10 dark:to-emerald-500/10 md:block"
      />
      <header className="mb-10 md:mb-14">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Experience
        </h1>
        {/* <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-300">
          Highlights from leading engineering initiatives, building ML-driven
          systems, and partnering with stakeholders in complex domains.
        </p> */}
      </header>

      <div className="space-y-14">
        {experienceByYear.map(([year, roles]) => (
          <section key={year}>
            <div className="flex items-baseline gap-4">
              <h2 className="text-4xl font-semibold tracking-tight text-transparent bg-gradient-to-r from-fuchsia-500 via-fuchsia-500 to-fuchsia-500 bg-clip-text">
                {year}
              </h2>
            </div>

            <div className="mt-6 space-y-6">
              {roles.map((role) => (
                <article
                  key={`${role.company}-${role.period}`}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-white/60 bg-white/80 p-8 shadow-lg ring-1 ring-white/40 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl dark:border-neutral-800/60 dark:bg-neutral-950/70 dark:ring-neutral-900/60 md:mx-auto md:w-[85%] md:px-10 md:py-9"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-200/40 via-transparent to-emerald-200/40 opacity-0 transition group-hover:opacity-100 dark:from-fuchsia-500/15 dark:to-emerald-500/15" />
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-fuchsia-200/80 via-sky-200/80 to-emerald-200/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm dark:from-fuchsia-500/20 dark:via-sky-500/20 dark:to-emerald-500/20 dark:text-neutral-200">
                    {role.period}
                  </span>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                        {role.role}
                      </h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        {role.company}
                      </p>
                    </div>
                    {role.location && (
                      <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                        <MapPin className="h-3 w-3" />
                        <span>{role.location}</span>
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {role.summary}
                  </p>
                  {Array.isArray(role.details) && (
                    <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                      {role.details.map((detail) => (
                        <li
                          key={detail}
                          className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-gradient-to-r before:from-fuchsia-500 before:to-emerald-500"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
