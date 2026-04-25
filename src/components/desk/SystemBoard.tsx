import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { DraggablePanel, PanelHeader } from "./DraggablePanel";

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
      initial={{ x: typeof window !== "undefined" ? window.innerWidth - 340 : 800, y: 700 }}
      rotate={-1}
      className="glass-elevated w-[300px] overflow-hidden"
    >
      <PanelHeader title="system.design" />
      <div className="p-4 space-y-3">
        {DIAGRAMS.map((d) => (
          <button
            key={d.id}
            onClick={() => setOpen(open === d.id ? null : d.id)}
            className="w-full text-left rounded-lg border border-border bg-[#0D1117] p-3 hover:border-primary/50 transition group"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-mono text-secondary">{d.name}</p>
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
    return (
      <svg viewBox="0 0 240 80" className="w-full mt-2">
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 30 + i * 45;
          return (
            <g key={i}>
              {[0, 1, 2, 3, 4].filter((j) => j !== i && Math.random() > 0.4).map((j) => (
                <line key={j} x1={x} y1={40} x2={30 + j * 45} y2={40}
                  stroke="oklch(0.65 0.22 290 / 0.3)" strokeWidth="0.8" />
              ))}
              <circle cx={x} cy={40} r="6" fill="oklch(0.78 0.16 220)"
                style={{ filter: "drop-shadow(0 0 4px oklch(0.78 0.16 220))" }} />
            </g>
          );
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 240 80" className="w-full mt-2">
      {["MOVE", "EVAL", "SEARCH", "TT"].map((t, i) => (
        <g key={t}>
          <rect x={10 + i * 58} y={30} width="48" height="22" rx="3"
            fill="oklch(0.21 0.022 268)" stroke="oklch(0.65 0.22 290 / 0.6)" />
          <text x={34 + i * 58} y={45} fontSize="8" fill="oklch(0.93 0.012 250)"
            textAnchor="middle" fontFamily="monospace">{t}</text>
          {i < 3 && <line x1={58 + i * 58} y1={41} x2={68 + i * 58} y2={41}
            stroke="oklch(0.78 0.16 220)" strokeWidth="1.5" markerEnd="url(#arr)" />}
        </g>
      ))}
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M0,0 L10,5 L0,10 z" fill="oklch(0.78 0.16 220)" />
        </marker>
      </defs>
    </svg>
  );
}
