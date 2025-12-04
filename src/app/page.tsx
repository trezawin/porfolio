"use client";

import { useEffect, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROFILE, PROJECTS } from "@/lib/portfolio-data";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const VISIT_COUNT_KEY = "treza-portfolio-visit-count";
const VISITOR_LOCATIONS_KEY = "treza-portfolio-visitor-locations";
const OWNER_FLAG_KEY = "treza-portfolio-owner";

function resolveVisitorLocation(): string | null {
  if (typeof window === "undefined") return null;

  try {
    const locale = navigator.languages?.[0] || navigator.language || "en-US";
    const [, regionCode] = locale.split("-");
    let regionName: string | undefined;

    if (regionCode && typeof Intl.DisplayNames !== "undefined") {
      try {
        const displayNames = new Intl.DisplayNames([locale], { type: "region" });
        regionName = displayNames.of(regionCode.toUpperCase()) ?? undefined;
      } catch {
        regionName = undefined;
      }
    }

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const city = timeZone
      ? timeZone.split("/").pop()?.replace(/_/g, " ")
      : undefined;

    const parts = [city, regionName].filter(Boolean);
    if (parts.length > 0) return parts.join(", ");
    if (timeZone) return timeZone.replace(/_/g, " ");
    return null;
  } catch {
    return null;
  }
}

export default function HomePage() {
  const [visitCount, setVisitCount] = useState<number | null>(null);
  const [visitorLocations, setVisitorLocations] = useState<string[]>([]);
  const [isOwnerView, setIsOwnerView] = useState(false);
  const [, ...restLines] = PROFILE.blurb.split("\n");
  const heroHashtags = [
    "#10-years engineer pedigree",
    "#AI & data science addict",
    "#Always learning, always curious",
  ];
  const highlightCards = [
    {
      title: "Current focus",
      body:
        "Building RAG solution for auditing regulatory compliance in digital finance; the blockchain tech. Refers to below featured work for more info. \nAnd to enjoy small little things.",
    },
    {
      title: "What teams say",
      body:
        "I'm proactive and reliable, I bring structure, clarity, and drive to every project.",
    },
    {
      title: "How I work",
      body:
        "Hands-on with code, product-minded with partners, and relentless about learning something new every sprint.",
    },
  ];

  const featuredProjects = PROJECTS.slice(0, 2);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const params = new URLSearchParams(window.location.search);
      const ownerParam = params.get("owner");
      if (ownerParam === "1") {
        window.localStorage.setItem(OWNER_FLAG_KEY, "true");
      } else if (ownerParam === "0") {
        window.localStorage.removeItem(OWNER_FLAG_KEY);
      }

      const storedOwner = window.localStorage.getItem(OWNER_FLAG_KEY) === "true";
      const hostOwner =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

      setIsOwnerView(storedOwner || hostOwner);
    } catch (error) {
      console.error("Failed to resolve owner view state", error);
    }
  }, []);

  useEffect(() => {
    if (!isOwnerView || typeof window === "undefined") return;

    try {
      const storedCount = Number.parseInt(
        window.localStorage.getItem(VISIT_COUNT_KEY) ?? "0",
        10
      );
      const nextCount = Number.isFinite(storedCount) ? storedCount + 1 : 1;
      window.localStorage.setItem(VISIT_COUNT_KEY, String(nextCount));
      setVisitCount(nextCount);

      const rawLocations = window.localStorage.getItem(VISITOR_LOCATIONS_KEY);
      let storedLocations: string[] = [];
      if (rawLocations) {
        try {
          storedLocations = JSON.parse(rawLocations);
          if (!Array.isArray(storedLocations)) storedLocations = [];
        } catch {
          storedLocations = [];
        }
      }

      const resolved = resolveVisitorLocation();
      let nextLocations = storedLocations;
      if (resolved && !storedLocations.includes(resolved)) {
        nextLocations = [...storedLocations, resolved];
        window.localStorage.setItem(
          VISITOR_LOCATIONS_KEY,
          JSON.stringify(nextLocations)
        );
      }
      setVisitorLocations(nextLocations);
    } catch (error) {
      console.error("Failed to update visit metrics", error);
    }
  }, [isOwnerView]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-16 md:pb-24 md:pt-20">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={fadeUp.initial} animate={fadeUp.animate}>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
            <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
          </span>
          <div className="mt-6 max-w-2xl space-y-4 text-neutral-600 dark:text-neutral-300">
            <h1 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 md:text-2xl">
              Hi,
            </h1>
            {restLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
            {PROFILE.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
              >
                <social.icon className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            className="relative w-1/2 max-w-xs"
          >
            <motion.img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="aspect-square w-full rounded-full object-cover shadow-2xl"
              initial={{ y: 0, rotate: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: 2 }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-transparent to-sky-500/20 blur-xl"
            />
          </motion.div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
            {heroHashtags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {highlightCards.map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              {card.title}
            </h2>
            <p className="mt-3 whitespace-pre-line text-sm text-neutral-700 dark:text-neutral-300">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <section className="mt-16 border-t pt-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Featured work
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              A quick sample of recent projects. Explore the full list for more.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-2xl">
            <Link href="/projects">
              Browse all projects <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
            >
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {project.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                {project.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="rounded-full border px-3 py-1 dark:border-neutral-700">
                    {tag}
                  </span>
                ))}
              </div>
              {project.url && (
                <Link
                  href={project.url}
                  target={project.url.startsWith("http") ? "_blank" : undefined}
                  rel={project.url.startsWith("http") ? "noreferrer" : undefined}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-900 underline underline-offset-4 opacity-80 transition hover:opacity-100 dark:text-neutral-200"
                >
                  View project <ChevronRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {isOwnerView && visitCount !== null && (
        <div className="mt-16 border-t pt-6 text-center text-xs text-neutral-500 dark:text-neutral-400">
          <p>
            Visits on this device{" "}
            <span className="font-medium text-neutral-800 dark:text-neutral-100">
              {visitCount}
            </span>
          </p>
          {visitorLocations.length > 0 && (
            <p className="mt-2">
              Stored visitor regions: {visitorLocations.join(" • ")}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
