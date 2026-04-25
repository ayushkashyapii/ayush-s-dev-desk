import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DraggablePanel } from "./DraggablePanel";

const DIAGRAMS = [
  {
    id: "bt",
    name: "BitTorrent Topology",
    desc: "Peer mesh discovers via tracker, then exchanges pieces directly using a tit-for-tat strategy.",
  },
  {
    id: "ce",
    name: "Chess Engine Pipeline",
    desc: "Move gen → eval → alpha-beta search with TT cache and iterative deepening.",
  },
];

export function SystemBoard() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <DraggablePanel
      initial={{ x: 780, y: 700 }}
      rotate={-1.2}
      className="paper-lift w-[300px] overflow-hidden rounded-sm relative"
    >
      {/* pin */}
      <span
        className="absolute top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full z-10"
        style={{
          background: "radial-gradient(circle at 35% 35%, oklch(0.75 0.16 25), oklch(0.45 0.16 25))",
          boxShadow: "0 1px 2px oklch(0 0 0 / 0.4)",
        }}
      />
      <div className="bg-paper-warm pt-5 pb-3 px-4 border-b border-border">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground text-center">
          system · design
        </p>
      </div>
      <div className="p-4 space-y-3 bg-paper">
        {DIAGRAMS.map((d) => (
          <button
            key={d.id}
            onClick={() => setOpen(open === d.id ? null : d.id)}
            className="w-full text-left rounded-md border border-border bg-paper-warm p-3 hover:border-primary/50 transition group"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono text-foreground/80">{d.name}</p>
              <span className="text-muted-foreground text-xs group-hover:text-primary transition">
                {open === d.id ? "−" : "+"}
              </span>
            </div>
            <Diagram id={d.id} />
            <AnimatePresence>
              {open === d.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-2 text-[11px] text-muted-foreground leading-relaxed"
                >
                  {d.desc}
                </motion.p>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </DraggablePanel>
  );
}

function Diagram({ id }: { id: string }) {
  if (id === "bt") {
    // deterministic edges (no Math.random — avoids hydration mismatch)
    const edges = [[0,1],[0,2],[1,3],[2,3],[2,4],[3,4],[1,4]];
    return (
      <svg viewBox="0 0 240 80" className="w-full mt-2">
        {edges.map(([a, b], i) => (
          <line key={i}
            x1={30 + a * 45} y1={40} x2={30 + b * 45} y2={40}
            stroke="oklch(0.68 0.07 145 / 0.45)" strokeWidth="0.8" />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <circle key={i} cx={30 + i * 45} cy={40} r="5" fill="oklch(0.68 0.07 145)" />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 240 80" className="w-full mt-2">
      {["MOVE", "EVAL", "SEARCH", "TT"].map((t, i) => (
        <g key={t}>
          <rect x={10 + i * 58} y={30} width="48" height="22" rx="3"
            fill="oklch(0.97 0.005 85)" stroke="oklch(0.68 0.07 145 / 0.7)" />
          <text x={34 + i * 58} y={45} fontSize="8" fill="oklch(0.22 0 0)"
            textAnchor="middle" fontFamily="monospace">{t}</text>
          {i < 3 && <line x1={58 + i * 58} y1={41} x2={68 + i * 58} y2={41}
            stroke="oklch(0.45 0.005 0)" strokeWidth="1.2" markerEnd="url(#arr)" />}
        </g>
      ))}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.45 0.005 0)" />
        </marker>
      </defs>
    </svg>
  );
}
