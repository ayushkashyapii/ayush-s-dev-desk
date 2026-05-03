import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

const TAGLINES = [
  "I build systems.",
  "I break things.",
  "I ship fast.",
];

type CenterIdentityLayout = "desk" | "stacked";

export function CenterIdentity({
  layout = "desk",
  compact,
  titleEnd,
}: {
  layout?: CenterIdentityLayout;
  /** Tighter stacked hero (mobile) — less padding and title size. */
  compact?: boolean;
  /** Shown inline after the name (stacked layout only), e.g. mobile plant cutout. */
  titleEnd?: ReactNode;
}) {
  const [line, setLine] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TAGLINES[line];
    const speed = deleting ? 35 : 70;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setLine((l) => (l + 1) % TAGLINES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, line]);

  const positionClass =
    layout === "desk"
      ? "pointer-events-none absolute left-1/2 top-[30%] z-[1] -translate-x-1/2 flex flex-col items-center px-4 text-center"
      : compact
        ? "pointer-events-none relative z-[28] flex flex-col items-center px-2 pt-2 pb-0 text-center"
        : "pointer-events-none flex flex-col items-center px-3 pt-6 pb-2 text-center";

  const titleClass =
    layout === "desk"
      ? "handwritten text-7xl leading-[0.85] text-foreground md:text-[7.5rem]"
      : compact
        ? "handwritten text-[clamp(2.2rem,9vw,2.85rem)] leading-[0.9] text-foreground"
        : "handwritten text-[clamp(2.75rem,12vw,3.75rem)] leading-[0.9] text-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      className={positionClass}
    >
      {layout === "stacked" && titleEnd ? (
        <div className="flex items-end justify-center gap-0.5">
          <h1 className={`${titleClass} shrink-0`}>Ayush Kashyap</h1>
          <span className="pointer-events-none relative z-[45] shrink-0 -mb-px translate-y-px">
            {titleEnd}
          </span>
        </div>
      ) : (
        <h1 className={titleClass}>Ayush Kashyap</h1>
      )}
      <p
        className={`font-mono text-[11px] text-foreground/70 min-h-[1.5em] sm:text-xs ${compact ? "mt-1.5" : "mt-4 md:mt-5"}`}
      >
        <span className="text-primary">›</span> {text}
        <span className="caret text-foreground/60">▍</span>
      </p>
    </motion.div>
  );
}
