import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TAGLINES = [
  "I build systems.",
  "I break things.",
  "I ship fast.",
];

const ASCII = `   ╭───────╮
   │ ◠   ◠ │
   │   ⌣   │
   ╰───────╯`;

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
        if (next === current) setTimeout(() => setDeleting(true), 1400);
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
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 18, delay: 0.1 }}
      className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
    >
      <pre className="font-mono text-[11px] md:text-sm leading-tight text-secondary/80 mb-4 select-none">
{ASCII}
      </pre>
      <h1 className="font-display font-bold text-5xl md:text-7xl tracking-tight text-gradient">
        Ayush Kashyap
      </h1>
      <p className="mt-4 font-mono text-sm md:text-base text-muted-foreground min-h-[1.5em]">
        <span className="text-secondary">$</span> {text}
        <span className="caret text-primary">▍</span>
      </p>
      <p className="mt-3 text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground/60">
        Midnight · Desk · OS
      </p>
    </motion.div>
  );
}
