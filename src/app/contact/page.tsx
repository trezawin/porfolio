import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-heading text-3xl tracking-tight md:text-4xl">
          Contact
        </h1>
        {/* <p className="mt-3 max-w-prose text-neutral-600 dark:text-neutral-300">
          Have a brief, a product idea, or just want to chat? I&apos;m open to
          select freelance work, collaborations, and AI-focused product roles.
        </p> */}
      </header>

      <div className="rounded-3xl border px-6 py-10 md:px-10">
        <div>
          <h2 className="font-heading text-2xl tracking-tight">
            Let&apos;s build something great
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Drop a note about the challenge you&apos;re tackling, and I&apos;ll
            share how I can help — whether it&apos;s analytics, ML prototypes, or
            production-grade systems.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="rounded-2xl">
              <a href={`mailto:${PROFILE.email}`}>Email me</a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl">
              <Link
                href={PROFILE.socials[1].href}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
