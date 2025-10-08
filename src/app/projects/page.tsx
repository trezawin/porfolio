import Link from "next/link";
import { PROJECTS } from "@/lib/portfolio-data";

function hexToRgb(hex: string) {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function rgbToHex(r: number, g: number, b: number) {
  return `#${[r, g, b]
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("")}`;
}

function mixColors(baseHex: string, mixHex: string, amount: number) {
  const base = hexToRgb(baseHex);
  const mix = hexToRgb(mixHex);

  const clamp = (value: number) => Math.max(0, Math.min(255, Math.round(value)));

  return rgbToHex(
    clamp(base.r * (1 - amount) + mix.r * amount),
    clamp(base.g * (1 - amount) + mix.g * amount),
    clamp(base.b * (1 - amount) + mix.b * amount)
  );
}

function getTagColor(accent: string, index: number, total: number) {
  if (!accent.startsWith("#") || accent.length !== 7) {
    return {
      background: "#e5e5e5",
      foreground: "#171717",
      border: "#d4d4d4",
    };
  }

  const mixAmount =
    total <= 1 ? 0.7 : 0.6 + (index / Math.max(total - 1, 1)) * 0.2;

  const border = mixColors(accent, "#ffffff", Math.min(mixAmount, 0.85));

  return { background: "transparent", foreground: accent, border };
}

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

      <ul className="relative ml-3 space-y-14 border-l border-neutral-200 pl-6 dark:border-neutral-800">
        {PROJECTS.map((project) => {
          const accent = project.accent ?? "#0ea5e9";

          return (
            <li key={project.title} className="relative pl-6">
              <span className="absolute -left-3 top-[0.45rem] flex h-5 w-5 items-center justify-center rounded-full bg-white dark:bg-neutral-950">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: accent }}
                />
              </span>
              <div className="space-y-3">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="space-y-1.5">
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </p>
                    <span
                      className="block h-1 w-12 rounded-full opacity-80"
                      style={{ backgroundColor: accent }}
                    />
                  </div>
                  {project.url && (
                    <Link
                      href={project.url}
                      target={
                        project.url.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        project.url.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="text-sm font-medium underline underline-offset-4 transition hover:opacity-80"
                      style={{ color: accent }}
                    >
                      View project
                    </Link>
                  )}
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {project.blurb}
                </p>
                <ul className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => {
                    const color = getTagColor(
                      accent,
                      index,
                      project.tags.length
                    );
                    return (
                      <li key={tag}>
                        <span
                          className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium shadow-sm transition hover:-translate-y-0.5"
                          style={{
                            backgroundColor: color.background,
                            color: color.foreground,
                            borderColor: color.border,
                          }}
                        >
                          {tag}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
