import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Draggable } from "./Draggable";

interface Note {
  id: string;
  title: string;
  tag: string;
  body: string;
  stack: string[];
  initial: { x: number; y: number };
  rotate: number;
  color: "yellow" | "pink" | "beige" | "mint";
}

const COLOR: Record<Note["color"], { bg: string; tape: string }> = {
  yellow: { bg: "var(--sticky-yellow)", tape: "oklch(0.85 0.04 75 / 0.6)" },
  pink:   { bg: "var(--sticky-pink)",   tape: "oklch(0.82 0.03 30 / 0.55)" },
  beige:  { bg: "var(--sticky-beige)",  tape: "oklch(0.82 0.03 75 / 0.55)" },
  mint:   { bg: "var(--sticky-mint)",   tape: "oklch(0.82 0.03 150 / 0.55)" },
};

const NOTES: Note[] = [
  {
    id: "bt", title: "BitTorrent Client", tag: "go · networking",
    body: "From-scratch BitTorrent peer client. Bencode parser, tracker handshake, piece manager, and parallel block downloads.",
    stack: ["Go", "TCP", "SHA-1"],
    initial: { x: 460, y: 800 }, rotate: -5, color: "yellow",
  },
  {
    id: "ce", title: "Chess Engine", tag: "c++ · perf",
    body: "Bitboard-based engine with magic bitboards, alpha-beta + transposition tables, UCI protocol. ~2200 elo on lichess-bot.",
    stack: ["C++", "UCI", "Bitboards"],
    initial: { x: 660, y: 820 }, rotate: 4, color: "pink",
  },
  {
    id: "vb", title: "Vibe Coder", tag: "react · pwa",
    body: "Pomodoro PWA with curated lofi rooms, ambient soundscapes, and Spotify sync. Offline-first.",
    stack: ["React", "PWA", "Web Audio"],
    initial: { x: 850, y: 790 }, rotate: -3, color: "mint",
  },
];

export function StickyNotes() {
  const [open, setOpen] = useState<Note | null>(null);

  return (
    <>
      {NOTES.map((n) => {
        const c = COLOR[n.color];
        return (
          <Draggable
            key={n.id}
            initial={n.initial}
            rotate={n.rotate}
            className="w-[180px]"
          >
            <button
              onClick={() => setOpen(n)}
              className="relative block w-full text-left p-4 pt-5 rounded-sm hover:scale-[1.02] transition"
              style={{
                background: c.bg,
                boxShadow: "var(--shadow-sticky)",
              }}
            >
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 rotate-[-4deg]"
                style={{
                  width: 56, height: 16,
                  background: c.tape,
                  border: "1px solid oklch(0.7 0.02 80 / 0.3)",
                }}
              />
              <p className="text-[9px] font-mono uppercase tracking-wider text-foreground/55">
                {n.tag}
              </p>
              <h3 className="mt-1 handwritten text-2xl leading-tight text-foreground">{n.title}</h3>
              <div className="mt-2 flex flex-wrap gap-1">
                {n.stack.slice(0, 3).map((s) => (
                  <span key={s} className="text-[10px] font-mono px-1.5 py-0.5 rounded-sm bg-foreground/5 text-foreground/70">
                    {s}
                  </span>
                ))}
              </div>
            </button>
          </Draggable>
        );
      })}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9999] bg-foreground/30 backdrop-blur-[2px] grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, y: 14 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 14 }}
              transition={{ type: "spring", stiffness: 240, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="rounded-md max-w-lg w-full p-7 relative"
              style={{ background: COLOR[open.color].bg, boxShadow: "var(--shadow-lift)" }}
            >
              <span
                className="absolute -top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]"
                style={{
                  width: 90, height: 22,
                  background: COLOR[open.color].tape,
                  border: "1px solid oklch(0.7 0.02 80 / 0.3)",
                }}
              />
              <p className="text-[11px] font-mono uppercase tracking-[0.3em] text-foreground/60">
                {open.tag}
              </p>
              <h2 className="mt-2 handwritten text-4xl text-foreground">{open.title}</h2>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{open.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {open.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-sm border border-foreground/15 bg-foreground/5">
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpen(null)}
                className="mt-6 text-xs font-mono text-foreground/60 hover:text-foreground transition"
              >
                ← close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
