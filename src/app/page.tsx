"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, ExternalLink, ChevronDown, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// --- Replace these with your real details ---
const PROFILE = {
  name: "Treza Bawm Win",
  role: "Applied AI Engineer & Software Developer",
  location: "Paris, France",
  email: "treza.win@gmail.com",
  blurb:
    "Applied AI Engineer & Software Developer with 10+ years of backend experience in Java/Python, data analytics, and ML. Recently completed an M.Sc. in Big Data & Business Analytics (ESCP) and currently applying LLMs with static analysis for smart‑contract auditing.",
  headshot:
    "/profile-pic.jpeg",
  socials: [
    { label: "GitHub", href: "#", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
    { label: "Email", href: "mailto:treza.win@gmail.com", icon: Mail },
  ],
};

const SKILLS = [
  "Java", "Python", "SQL", "LLMs (GPT‑4, CodeBERT)", "Machine Learning",
  "Pandas", "Scikit‑learn", "NumPy", "Data Analytics", "Tableau",
  "Dataiku", "Snowflake Cortex", "REST APIs", "FastAPI", "React",
  "Node.js (basic)", "Docker", "Git", "Maven", "Jira",
  "Confluence", "Design Patterns", "DS & Algorithms", "Agile / Scrum",
  "Team Leadership", "Static Analysis", "Smart‑contract Auditing"
];

const EXPERIENCE = [
  {
    company: "APM Creative Digital",
    role: "AI Engineer Intern",
    period: "Aug 2025 — Present",
    summary:
      "Applying LLMs (GPT‑4, CodeBERT) with static analysis to support smart‑contract auditing. Building hybrid AI frameworks for RWA contract compliance and benchmarking pipelines.",
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "Senior System Analyst",
    period: "May 2022 — Sep 2024",
    summary:
      "Built multi‑airports message center with analytics to optimize message management; led team on Blackduck/Fortify tooling, reducing license risk >50% and improving stability (‑30% downtime).",
  },
  {
    company: "Amadeus IT Group",
    role: "Software Development Engineer",
    period: "Nov 2018 — Apr 2022",
    summary:
      "Developed airport resource management solutions; designed a Drools rule engine to prioritize operations against airport KPIs.",
  },
  {
    company: "Amadeus GDS PTE LTD",
    role: "System Analyst",
    period: "Aug 2012 — Oct 2018",
    summary:
      "Delivered fixed‑resource optimization with OptaPlanner; led server‑side apps using Java, REST, JMS, ActiveMQ, and EJB; supported UAT for Changi Airport.",
  },
];

const PROJECTS = [
  {
    title: "Smart‑Contract Auditing AI",
    blurb:
      "Hybrid LLM + static analysis workflow to audit RWA contracts and align with HK compliance; dataset prep and evaluation pipelines for model benchmarking.",
    tags: ["LLMs", "Static Analysis", "Python"],
    url: "#",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Multi‑Airports Message Center",
    blurb:
      "High‑traffic airport message management app with analytics to optimize flows and instant airport switching.",
    tags: ["Java", "Analytics", "APIs"],
    url: "#",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Security Scanning Tooling",
    blurb:
      "Led Blackduck & Fortify tooling to resolve security/compliance issues and cut license risk by >50%.",
    tags: ["Security", "DevEx", "Leadership"],
    url: "#",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    title: "Airport Resource Optimization",
    blurb:
      "Drools rule engine and optimization for airport resources, aligning operations to business KPIs.",
    tags: ["Java", "Drools", "Optimization"],
    url: "#",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1600&auto=format&fit=crop",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Portfolio() {
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
                ["About", "#about"],
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="hover:opacity-70 transition-opacity">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="/resume.pdf"
                className="rounded-2xl border px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
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
            <div className="mt-6 flex flex-wrap gap-3">
              {PROFILE.socials.map((s) => (
                <Button key={s.label} asChild variant="outline" className="rounded-2xl">
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <s.icon className="mr-2 h-4 w-4" /> {s.label}
                  </a>
                </Button>
              ))}
            </div>
            <a href="#about" className="mt-10 inline-flex items-center text-sm opacity-70 hover:opacity-100">
              <ChevronDown className="mr-2 h-4 w-4" /> Learn more
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            className="relative"
          >
            <img
              src={PROFILE.headshot}
              alt={`${PROFILE.name} headshot`}
              className="aspect-square w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-transparent via-transparent to-black/10 dark:to-white/10" />
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold tracking-tight">About</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">
              A short story about what I value and how I work.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed">
            <p>
              I blend product design and front‑end engineering to craft experiences that feel effortless. My work
              often starts in Figma and ends in code—bridging the gap between intention and implementation.
            </p>
            <p>
              Recently, I’ve been experimenting with motion as narrative, design tokens as contracts, and systems
              that scale across marketing and product.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {SKILLS.map((s) => (
                <span key={s} className="rounded-full border px-3 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-300">A snapshot of where I’ve learned and shipped.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {EXPERIENCE.map((job) => (
            <Card key={job.company} className="rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-baseline justify-between gap-4">
                  <span>{job.company}</span>
                  <span className="text-sm font-normal opacity-70">{job.period}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">{job.role}</p>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{job.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300">A few favorites. More on request.</p>
          </div>
          <a href="#contact" className="inline-flex items-center text-sm opacity-80 hover:opacity-100">
            Work with me <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="group overflow-hidden rounded-3xl">
              <div className="relative">
                <img src={p.image} alt={p.title} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <CardHeader className="space-y-1">
                <CardTitle className="text-base">{p.title}</CardTitle>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.blurb}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border px-2.5 py-0.5 text-xs opacity-80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <Button asChild variant="secondary" className="rounded-2xl">
                    <a href={p.url} target="_blank" rel="noreferrer" className="inline-flex items-center">
                      Visit <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 pt-16">
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
                    className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <s.icon className="h-3.5 w-3.5" /> {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and a sprinkle of motion.
      </footer>
    </div>
  );
}
