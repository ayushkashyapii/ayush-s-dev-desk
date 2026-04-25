import { useEffect, useState } from "react";
import { DraggablePanel } from "./DraggablePanel";

export function ScoreCard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 4000);
    return () => clearInterval(id);
  }, []);

  // Mock evolving score
  const home = Math.min(3, Math.floor(tick / 4));
  const away = Math.min(2, Math.floor((tick + 2) / 5));
  const minute = Math.min(90, 23 + tick * 3);

  return (
    <DraggablePanel
      initial={{ x: typeof window !== "undefined" ? window.innerWidth / 2 - 130 : 500, y: 720 }}
      rotate={1.5}
      className="glass-elevated w-[260px] overflow-hidden"
    >
      <a
        href="https://www.youtube.com/results?search_query=football+highlights"
        target="_blank" rel="noreferrer"
        className="block bg-[#0D1117] p-4 hover:bg-[#0D1117]/70 transition"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-[9px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Live · UCL</p>
          <span className="flex items-center gap-1 text-[10px] font-mono text-[oklch(0.7_0.22_25)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.22_25)] animate-pulse" />
            {minute}'
          </span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 text-center">
            <p className="text-[11px] font-mono text-muted-foreground mb-1">RMA</p>
            <p
              className="text-5xl font-bold text-secondary tabular-nums"
              style={{ fontFamily: "JetBrains Mono, monospace", textShadow: "0 0 16px oklch(0.78 0.16 220 / 0.6)" }}
            >
              {home}
            </p>
          </div>
          <span className="text-muted-foreground/40 text-2xl font-mono">:</span>
          <div className="flex-1 text-center">
            <p className="text-[11px] font-mono text-muted-foreground mb-1">MCI</p>
            <p
              className="text-5xl font-bold text-primary tabular-nums"
              style={{ fontFamily: "JetBrains Mono, monospace", textShadow: "0 0 16px oklch(0.65 0.22 290 / 0.6)" }}
            >
              {away}
            </p>
          </div>
        </div>
        <p className="mt-3 text-center text-[10px] font-mono text-muted-foreground/70">
          ↗ tap for highlights
        </p>
      </a>
    </DraggablePanel>
  );
}
