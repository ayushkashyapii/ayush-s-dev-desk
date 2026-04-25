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
      className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[44%] flex flex-col items-center text-center px-4"
      style={{ zIndex: 1 }}
    >
      <h1 className="handwritten text-7xl md:text-[7.5rem] leading-[0.85] text-foreground">
        Ayush Kashyap
      </h1>
      <p className="mt-3 text-[11px] md:text-xs font-mono uppercase tracking-[0.45em] text-muted-foreground">
        I think, then I build
      </p>
      <p className="mt-5 font-mono text-xs text-foreground/70 min-h-[1.5em]">
        <span className="text-primary">›</span> {text}
        <span className="caret text-foreground/60">▍</span>
      </p>
    </motion.div>
  );
}
