import { PROFILE } from "@/lib/portfolio-data";

export function SiteFooter() {
  return (
    <footer className="border-t py-10 text-center text-sm opacity-70">
      © {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind,
      and a sprinkle of motion.
    </footer>
  );
}
