import { useEffect, useState } from "react";
import { DraggablePanel } from "./DraggablePanel";

export function ScoreCard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4000);
    return () => clearInterval(id);
  }, []);

  const home = Math.min(3, Math.floor(tick / 4));
  const away = Math.min(2, Math.floor((tick + 2) / 5));
  const minute = Math.min(90, 23 + tick * 3);

  return (
    <DraggablePanel
      initial={{ x: 380, y: 740 }}
      rotate={1.8}
      className="w-[260px]"
    >
      {/* Match-day ticket stub */}
      <a
        href="https://www.youtube.com/results?search_query=football+highlights"
        target="_blank" rel="noreferrer"
        className="block relative rounded-sm overflow-hidden bg-paper hover:translate-y-[-2px] transition"
        style={{ boxShadow: "var(--shadow-lift)" }}
      >
        {/* perforation */}
        <div className="absolute left-0 right-0 top-[58px] h-[1px] border-t border-dashed border-border" />
        <div className="absolute left-[-6px] top-[52px] h-3 w-3 rounded-full bg-background border border-border" />
        <div className="absolute right-[-6px] top-[52px] h-3 w-3 rounded-full bg-background border border-border" />

        <div className="px-4 pt-3 pb-2 bg-[var(--sticky-beige)]">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-foreground/70">Match · ticket</p>
            <span className="flex items-center gap-1 text-[10px] font-mono text-foreground/70">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.62_0.18_27)] animate-pulse" />
              {minute}'
            </span>
          </div>
          <p className="text-[10px] font-mono text-foreground/60 mt-0.5">UCL · Quarter Final</p>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1 text-center">
              <p className="text-[11px] font-mono text-muted-foreground mb-1">RMA</p>
              <p className="text-5xl font-bold text-foreground tabular-nums" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                {home}
              </p>
            </div>
            <span className="text-muted-foreground/50 text-2xl font-mono">:</span>
            <div className="flex-1 text-center">
              <p className="text-[11px] font-mono text-muted-foreground mb-1">MCI</p>
              <p className="text-5xl font-bold text-foreground tabular-nums" style={{ fontFamily: "JetBrains Mono, monospace" }}>
                {away}
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-[10px] font-mono text-muted-foreground">
            ↗ tap for highlights
          </p>
        </div>
      </a>
    </DraggablePanel>
  );
}
