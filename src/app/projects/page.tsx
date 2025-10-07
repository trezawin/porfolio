import Link from "next/link";
import { PROJECTS } from "@/lib/portfolio-data";

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <header className="mb-10 md:mb-14">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Projects
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-300">
          Selected work spanning AI, analytics, and large-scale engineering initiatives.
          More examples are available on request.
        </p>
      </header>

      <ul className="space-y-5">
        {PROJECTS.map((project) => (
          <li key={project.title} className="rounded-3xl border p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-lg font-medium">{project.title}</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                  {project.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-lg bg-neutral-100 px-3 py-1 transition hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.url && (
                <Link
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                  className="text-sm underline opacity-80 transition hover:opacity-100"
                >
                  View project
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
