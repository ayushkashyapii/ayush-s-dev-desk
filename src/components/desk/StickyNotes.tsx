import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DraggablePanel } from "./DraggablePanel";

interface Note {
  id: string;
  title: string;
  tag: string;
  body: string;
  stack: string[];
  initial: { x: number; y: number };
  rotate: number;
  accent: "primary" | "secondary";
}

const W = typeof window !== "undefined" ? window.innerWidth : 1200;

const NOTES: Note[] = [
  {
    id: "bt", title: "BitTorrent Client", tag: "go · networking",
    body: "From-scratch BitTorrent peer client. Bencode parser, tracker handshake, piece manager, and parallel block downloads.",
    stack: ["Go", "TCP", "SHA-1", "Bencode"],
    initial: { x: W / 2 - 320, y: 110 }, rotate: -4, accent: "primary",
  },
  {
    id: "ce", title: "Chess Engine", tag: "c++ · perf",
    body: "Bitboard-based engine with magic bitboards, alpha-beta + transposition tables, UCI protocol. ~2200 elo on lichess-bot.",
    stack: ["C++", "UCI", "Bitboards"],
    initial: { x: W / 2 + 80, y: 540 }, rotate: 3, accent: "secondary",
  },
  {
    id: "vb", title: "Vibe Coder", tag: "react · pwa",
    body: "Pomodoro PWA with curated lofi rooms, ambient soundscapes, and Spotify sync. Offline-first.",
    stack: ["React", "PWA", "Web Audio"],
    initial: { x: W / 2 - 380, y: 560 }, rotate: -2, accent: "primary",
  },
];

export function StickyNotes() {
  const [open, setOpen] = useState<Note | null>(null);

  return (
    <>
      {NOTES.map((n) => (
        <DraggablePanel
          key={n.id}
          initial={n.initial}
          rotate={n.rotate}
          className="w-[220px]"
        >
          <button
            onClick={() => setOpen(n)}
            className="block w-full text-left glass-elevated rounded-2xl p-4 hover:scale-[1.02] transition"
            style={{
              borderTop: `2px solid ${n.accent === "primary" ? "oklch(0.65 0.22 290)" : "oklch(0.78 0.16 220)"}`,
              boxShadow: `0 0 30px -12px ${n.accent === "primary" ? "oklch(0.65 0.22 290 / 0.5)" : "oklch(0.78 0.16 220 / 0.5)"}, var(--shadow-soft)`,
            }}
          >
            <p className={`text-[10px] font-mono uppercase tracking-wider ${n.accent === "primary" ? "text-primary" : "text-secondary"}`}>
              {n.tag}
            </p>
            <h3 className="mt-1 font-display font-semibold text-base">{n.title}</h3>
            <div className="mt-3 flex flex-wrap gap-1">
              {n.stack.slice(0, 3).map((s) => (
                <span key={s} className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-muted/40 text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </button>
        </DraggablePanel>
      ))}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm grid place-items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 240, damping: 22 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-elevated rounded-2xl max-w-lg w-full p-7"
              style={{ boxShadow: "var(--shadow-glow-primary), var(--shadow-soft)" }}
            >
              <p className={`text-xs font-mono uppercase tracking-[0.3em] ${open.accent === "primary" ? "text-primary" : "text-secondary"}`}>
                {open.tag}
              </p>
              <h2 className="mt-2 font-display font-bold text-2xl">{open.title}</h2>
              <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{open.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {open.stack.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-border bg-muted/30">
                    {s}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setOpen(null)}
                className="mt-6 text-xs font-mono text-muted-foreground hover:text-foreground transition"
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
