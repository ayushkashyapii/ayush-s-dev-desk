import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TAGLINES = [
  "I build systems.",
  "I break things.",
  "I ship fast.",
];

export function CenterIdentity() {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center px-4"
    >
      <p className="text-[10px] font-mono uppercase tracking-[0.45em] text-muted-foreground/70 mb-3">
        — portfolio · est. 2025 —
      </p>
      <h1 className="handwritten text-7xl md:text-[8.5rem] leading-[0.9] text-foreground">
        Ayush Kashyap
      </h1>
      <div className="mt-6 h-[1px] w-32 bg-border" />
      <p className="mt-5 text-sm md:text-base text-muted-foreground italic max-w-md">
        engineer · tinkerer · late-night shipper
      </p>
      <p className="mt-6 font-mono text-xs md:text-sm text-foreground/70 min-h-[1.5em]">
        <span className="text-primary">›</span> {text}
        <span className="caret text-foreground/60">▍</span>
      </p>
    </motion.div>
  );
}
