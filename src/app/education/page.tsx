import { MapPin } from "lucide-react";
import { EDUCATION } from "@/lib/portfolio-data";

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-heading text-3xl tracking-tight md:text-4xl">
          Education
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Formal learning that complements hands-on engineering across analytics,
          AI, and large-scale software systems.
        </p>
      </header>

      <ol className="relative border-l border-neutral-200 pl-6 dark:border-neutral-800">
        {EDUCATION.map((item, index) => (
          <li
            key={item.school}
            className={`relative ml-2 ${
              index !== EDUCATION.length - 1 ? "mb-10" : ""
            }`}
          >
            <span className="absolute -left-[7px] mt-2 block h-3 w-3 rounded-full border bg-white dark:border-neutral-700 dark:bg-neutral-950" />
            <div
              className="rounded-3xl border p-5 md:p-6"
              style={{
                borderLeftColor:
                  index % 3 === 0
                    ? "#ec4899"
                    : index % 3 === 1
                    ? "#38bdf8"
                    : "#34d399",
                borderLeftWidth: "6px",
              }}
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <p
                  className="font-semibold tracking-tight"
                  style={{
                    color:
                      index % 3 === 0
                        ? "#ec4899"
                        : index % 3 === 1
                        ? "#0ea5e9"
                        : "#10b981",
                  }}
                >
                  {item.school}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                  {item.period}
                </p>
              </div>
              {item.location && (
                <p className="flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                  <MapPin className="h-3 w-3" />
                  <span>{item.location}</span>
                </p>
              )}
              <p className="mt-3 text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {item.degree}
              </p>
              {item.details && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-600 dark:text-neutral-300">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
