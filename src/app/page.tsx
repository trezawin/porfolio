"use client";
import React, { useEffect, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import { Mail, Github, Linkedin, ChevronDown, MapPin, Sun, Moon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PROFILE = {
  name: "Treza Bawm Win",
  role: "AI and Data science enthusiast",
  location: "Paris, France",
  email: "treza.win@gmail.com",
  blurb:
    "I'm passionate about turning data into intelligent systems and leveraging AI. Been worked as software engineer/analyst for a decade, I bring both solid technical depth and a fresh drive to apply machine learning and analytics to solve real-world challenges.",
  headshot: "/profile-pic.jpeg",
  socials: [
    { label: "GitHub", href: "https://github.com/trezawin", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/treza-bawm-win-b0991545/", icon: Linkedin },
    { label: "Email", href: "mailto:treza.win@gmail.com", icon: Mail },
  ],
};

const SKILLS = [
  "Java", "Python", "SQL", "LLMs", "Machine Learning",
  "Pandas", "Scikit-learn", "NumPy", "Data Analytics", "Tableau",
  "Dataiku", "Snowflake Cortex", "REST APIs", "FastAPI",
  "Docker", "Git", "Maven", "Jira",
  "Confluence", "Design Patterns", "DS & Algorithms", "Agile / Scrum",
  "Team Leadership", "Static Analysis", "Smart-contract Auditing",
];

const EXPERIENCE = [
  {
    company: "APM Creative Digital",
    role: "AI Engineer Intern",
    period: "Sep 2025 — Present",
    summary:
      "Applying LLMs with static analysis to support smart-contract auditing and compliance for real-world-asset (RWA) contracts.",
    details: [
      "Designed a hybrid GPT-4/CodeBERT + rule-based pipeline to flag risky clauses and map to HK compliance controls.",
      "Built reproducible benchmarking with dataset curation, prompts, and evaluation metrics (precision/recall/F1).",
      "Prototyped Python services (FastAPI) and orchestration scripts for batch audits over contract repositories.",
    ],
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "Senior System Analyst",
    period: "May 2022 — Sep 2024",
    summary:
      "Led development on multi-airports message center and improved security/compliance posture across products.",
    details: [
      "Delivered analytics to optimize high-volume airport message flows and enable instant airport switching.",
      "Drove Blackduck & Fortify remediation program, cutting license risk by >50% and reducing downtime by ~30%.",
      "Collaborated with cross-functional teams; created dashboards and runbooks to standardize incident response.",
    ],
  },
  {
    company: "Amadeus IT Group",
    role: "Software Development Engineer",
    period: "Nov 2018 — Apr 2022",
    summary:
      "Built airport resource management capabilities with rules and optimization aligned to business KPIs.",
    details: [
      "Implemented Drools rule engine to prioritize operations against airport SLAs and KPI thresholds.",
      "Developed services in Java with REST integrations; improved test coverage and CI reliability.",
      "Partnered with operations teams to validate rules against real-world scenarios and performance constraints.",
    ],
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "System Analyst",
    period: "Aug 2012 — Oct 2018",
    summary:
      "Delivered optimization and backend services for airport operations and supported UAT for major customers.",
    details: [
      "Built fixed-resource optimization using OptaPlanner; tuned constraints to balance throughput vs. cost.",
      "Developed Java server-side apps with REST, JMS, ActiveMQ, and EJB across distributed environments.",
      "Supported UAT for Changi Airport; coordinated triage and defect resolutions with stakeholders.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Smart-Contract Auditing AI",
    blurb:
      "Hybrid LLM + static analysis workflow to audit RWA contracts and align with HK compliance; dataset prep and evaluation pipelines for model benchmarking.",
    tags: ["LLMs", "Static Analysis", "Python"],
    url: "#",
  },
  {
    title: "Multi-Airports Message Center",
    blurb:
      "High-traffic airport message management app with analytics to optimize flows and instant airport switching.",
    tags: ["Java", "Analytics", "APIs"],
    url: "#",
  },
  {
    title: "Security Scanning Tooling",
    blurb:
      "Led Blackduck & Fortify tooling to resolve security/compliance issues and cut license risk by >50%.",
    tags: ["Security", "DevEx", "Leadership"],
    url: "#",
  },
  {
    title: "Airport Resource Optimization",
    blurb:
      "Drools rule engine and optimization for airport resources, aligning operations to business KPIs.",
    tags: ["Java", "Drools", "Optimization"],
    url: "#",
  },
];

const EDUCATION = [
  {
    school: "ESCP Business School",
    degree: "M.Sc. in Big Data & Business Analytics",
    period: "Oct 2024 — Jun 2025",
    details: [
      "Machine Learning, NLP, Forecasting, BI dashboards",
      "Capstone & coursework spanning data engineering and analytics",
    ],
  },
  {
    school: "National University of Singapore — Institute of Systems Science",
    degree: "Graduate Diploma in Systems Analysis",
    period: "Singapore",
    details: [
      "Structured software engineering, systems analysis, and development lifecycle",
    ],
  },
  {
    school: "University of Computer Studies, Yangon",
    degree: "Bachelor of Computer Science (B.C.Sc., Honours)",
    period: "Yangon, Myanmar",
    details: [
      "Foundations in algorithms, data structures, databases, and software engineering",
    ],
  },
];

const MILESTONES = [
  { year: "2025", title: "AI Engineer Internship", detail: "Applied LLM + static analysis to smart-contract auditing at APM Creative Digital." },
  { year: "2022", title: "Senior System Analyst", detail: "Led multi-airports messaging analytics and security tooling at Amadeus." },
  { year: "2018", title: "Software Development Engineer", detail: "Shipped airport resource management features with rule engines." },
  { year: "2012", title: "System Analyst", detail: "Built optimization and backend services for airport operations." },
];

const INTRO_FOOTER: string[] = [
  "• Currently exploring RWA contract compliance with LLM + static analysis.",
  "• Open to applied AI roles that bridge analytics and engineering.",
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

export default function Portfolio() {
  const [theme, setTheme] = useState<string>("system");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (typeof window !== "undefined") localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight">
              {PROFILE.name}
            </a>
            <nav className="hidden gap-6 text-sm md:flex">
              {[
                ["Education", "#education"],
                ["Experience", "#experience"],
                ["Milestones", "#milestones"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:opacity-70 transition-opacity">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {/* Header socials */}
              <div className="hidden sm:flex items-center gap-2">
                {PROFILE.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="rounded-2xl border px-2.5 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition inline-flex items-center gap-1"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}<span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
              </button>
              <a
                href="/CV-Treza_BAWM_WIN.pdf"
                download
                className="rounded-2xl border px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Download Résumé
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Right-side section dots */}
        <nav aria-label="Sections" className="fixed right-4 top-1/2 z-40 -translate-y-1/2 hidden md:flex flex-col gap-3">
          {[
            ["#home", "Home"],
            ["#education", "Education"],
            ["#experience", "Experience"],
            ["#milestones", "Milestones"],
            ["#projects", "Projects"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href as string}
              href={href as string}
              aria-label={`Go to ${label}`}
              className="h-3 w-3 rounded-full border hover:scale-110 transition"
            />
          ))}
        </nav>


        {/* Mobile sticky socials (phones) */}
        <nav aria-label="Mobile social" className="fixed inset-x-0 bottom-4 z-40 mx-auto flex w-max gap-3 rounded-2xl border bg-white/80 p-2 shadow backdrop-blur dark:bg-neutral-900/80 md:hidden">
          {PROFILE.socials.map((s) => (
            <a
              key={`mobile-${s.label}`}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </nav>

        {/* Hero / Intro */}
        <section id="home" className="mx-auto max-w-6xl px-4 pt-8 md:pt-12 lg:pt-16 h-screen snap-start flex flex-col items-start">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div initial={fadeUp.initial} animate={fadeUp.animate}>
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                <MapPin className="h-3.5 w-3.5" /> {PROFILE.location}
              </span>
              <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                {PROFILE.role}
              </h1>
              <p className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
                {PROFILE.blurb}
              </p>
              {INTRO_FOOTER.length > 0 && (
                <p className="mt-3 max-w-prose text-neutral-700 dark:text-neutral-300">
                  {INTRO_FOOTER.join(" ")}
                </p>
              )}
              <a href="#education" className="mt-10 inline-flex items-center text-sm opacity-70 hover:opacity-100">
                <ChevronDown className="mr-2 h-4 w-4" /> Learn more
              </a>
            </motion.div>

            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                className="relative mx-auto w-1/3 md:w-1/2 aspect-square"
              >
                <motion.img
                  src={PROFILE.headshot}
                  alt={`${PROFILE.name} headshot`}
                  className="h-full w-full rounded-full object-cover shadow-2xl"
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
              <div className="mt-16 flex max-w-[38rem] flex-wrap justify-center gap-2">
                {SKILLS.map((s) => (
                  <span key={s} className="rounded-full border px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mx-auto max-w-6xl px-4 py-16 md:py-24 h-screen snap-start flex items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Education</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Formal training that complements hands-on experience.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <Card key={e.school} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between gap-4">
                    <span>{e.school}</span>
                    <span className="text-sm font-normal opacity-70">{e.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">{e.degree}</p>
                  {e.details && (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                      {e.details.map((d: string) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-4 py-16 md:py-24 h-screen snap-start flex items-start">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A snapshot of where I’ve learned and shipped.</p>
          </div>
          <div className="h-[calc(100vh-12rem)] w-full overflow-y-auto pr-2">
            <ol className="relative ml-4 border-l pl-6 space-y-8 md:space-y-10">
              {EXPERIENCE.map((job) => (
                <li key={`${job.company}-${job.period}`} className="relative">
                  <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border bg-white dark:bg-neutral-950" />
                  <div className="flex flex-col md:flex-row md:items-baseline md:gap-6">
                    <div className="shrink-0 text-xs md:text-sm opacity-70 md:w-40">{job.period}</div>
                    <div className="grow rounded-3xl border p-5 md:p-6">
                      <div className="flex items-baseline justify-between gap-4">
                        <p className="font-medium">
                          {job.role} <span className="opacity-80">· {job.company}</span>
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{job.summary}</p>
                      {Array.isArray(job.details) && (
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
                          {job.details.map((d: string) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Milestones */}
        <section id="milestones" className="mx-auto max-w-6xl px-4 py-16 md:py-24 h-screen snap-start flex items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Milestones</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">Career highlights at a glance.</p>
          </div>
          <ol className="relative border-l pl-6">
            {MILESTONES.map((m) => (
              <li key={`${m.year}-${m.title}`} className="mb-8 ml-2">
                <div className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full border bg-white dark:bg-neutral-950" />
                <div className="flex items-baseline justify-between">
                  <p className="text-sm opacity-70">{m.year}</p>
                  <p className="ml-4 font-medium">{m.title}</p>
                </div>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{m.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects (compact) */}
        <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-24 h-screen snap-start flex items-center">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold tracking-tight">Projects (selected)</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A light selection. More examples available on request.
            </p>
          </div>
          <ul className="space-y-4">
            {PROJECTS.map((p) => (
              <li key={p.title} className="rounded-2xl border p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">{p.blurb}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border px-2.5 py-0.5 text-xs opacity-80">{t}</span>
                      ))}
                    </div>
                  </div>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noreferrer" className="text-sm underline opacity-80 hover:opacity-100">
                      View
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-16 h-screen snap-start flex items-center">
          <div className="grid items-center gap-10 rounded-3xl border px-6 py-10 md:grid-cols-3">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold tracking-tight">Let’s build something great</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Have a brief, a product idea, or just want to say hi? I’m open to selected freelance work and collaborations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="rounded-2xl">
                  <a href={`mailto:${PROFILE.email}`}>Email me</a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl">
                  <a href={PROFILE.socials[1].href} target="_blank" rel="noreferrer">
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
            <div className="md:justify-self-end">
              <div className="rounded-2xl border p-4 text-sm">
                <p className="font-medium">Contact</p>
                <p className="mt-1 flex items-center gap-2 opacity-80">
                  <Mail className="h-4 w-4" /> {PROFILE.email}
                </p>
                <div className="mt-3 flex gap-2">
                  {PROFILE.socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs hover:bg-black hover:text-white dark:hover:bg:white dark:hover:text-black"
                    >
                      <s.icon className="h-3.5 w-3.5" /> {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and a sprinkle of motion.
      </footer>
    </div>
  );
}