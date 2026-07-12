import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Pizza,
  Flame,
  ChefHat,
  UtensilsCrossed,
  CirclePlus,
  Droplet,
  CupSoda,
} from "lucide-react";
import type { CategoryIcon } from "../data/menuData";

/* ---------- Eyebrow label ---------- */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`eyebrow inline-flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </span>
  );
}

/* Dev/QA switch: `?reveal=all` forces every reveal to play on mount so the
   whole page can be screenshot without scrolling. Harmless in production. */
export const revealAll =
  typeof window !== "undefined" && window.location.search.includes("reveal=all");
const forceShow = revealAll;

/* Choose animation trigger: on-mount (above the fold / forced) vs on-scroll. */
function triggerProps(target: object, mount: boolean) {
  return mount || forceShow
    ? { animate: target }
    : { whileInView: target, viewport: { once: true, margin: "-8%" } };
}

/* ---------- Line-by-line mask reveal for headings ---------- */
export function LineReveal({
  lines,
  className = "",
  delay = 0,
  mount = false,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  mount?: boolean;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <motion.span
            className="block will-change-transform"
            initial={{ y: "115%" }}
            {...triggerProps({ y: "0%" }, mount)}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------- Simple fade-rise reveal wrapper ---------- */
export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  mount = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  mount?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      {...triggerProps({ opacity: 1, y: 0 }, mount)}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Refined custom pierogi (dumpling) glyph — flat crimped fold, rounded belly. */
function PierogiGlyph({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3.5 9c0.4 6 4 9.5 8.5 9.5s8.1-3.5 8.5-9.5Z" />
      <path d="M6.2 9.2v1.5M9.1 9.2v1.7M12 9.2v1.8M14.9 9.2v1.7M17.8 9.2v1.5" />
    </svg>
  );
}

/* ---------- Category glyphs — modern, fitting each category ---------- */
export function CategoryGlyph({
  name,
  className = "w-5 h-5",
}: {
  name: CategoryIcon;
  className?: string;
}) {
  const p = { className, strokeWidth: 1.6 } as const;

  switch (name) {
    case "pizza":
      return <Pizza {...p} />;
    case "stone":
      return <Flame {...p} />;
    case "pasta":
      return <ChefHat {...p} />;
    case "pierogi":
      return <PierogiGlyph className={className} />;
    case "plate":
      return <UtensilsCrossed {...p} />;
    case "extras":
      return <CirclePlus {...p} />;
    case "sauce":
      return <Droplet {...p} />;
    case "drink":
      return <CupSoda {...p} />;
    default:
      return null;
  }
}

/* ---------- Small decorative leaf / spark marks (SVG, no emoji) ---------- */
export function Sprig({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 21V8" />
      <path d="M12 12c-1-3-3.5-4-6-4 0 3 2 5 6 5Z" />
      <path d="M12 9c1-2.5 3-3.5 5.5-3.5C17.5 8 15.5 10 12 10Z" />
    </svg>
  );
}
