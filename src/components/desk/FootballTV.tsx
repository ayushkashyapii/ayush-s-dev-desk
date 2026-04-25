import { useState } from "react";
import { Draggable } from "./Draggable";
import { FOOTBALL_HIGHLIGHTS } from "@/data/footballHighlights";

export function FootballTV() {
  const [active, setActive] = useState(FOOTBALL_HIGHLIGHTS[0]);

  return (
    <Draggable initial={{ x: 880, y: 760 }} rotate={-0.8} className="w-[360px]">
      <div
        className="rounded-2xl p-3"
        style={{
          background: "linear-gradient(165deg, oklch(0.3 0.02 85), oklch(0.2 0.015 80))",
          border: "1px solid oklch(0.45 0.01 80)",
          boxShadow: "var(--shadow-lift), inset 0 1px 0 oklch(1 0 0 / 0.08)",
        }}
      >
        <div
          className="relative rounded-xl p-3 overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 100% at 50% -10%, oklch(0.34 0.08 180 / 0.75), oklch(0.14 0.04 190 / 0.95) 60%, oklch(0.08 0.02 190) 100%)",
            border: "1px solid oklch(0.5 0.02 160 / 0.45)",
            boxShadow: "inset 0 0 0 1px oklch(1 0 0 / 0.04), inset 0 -12px 30px oklch(0 0 0 / 0.35)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage: "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, oklch(0.8 0.03 180 / 0.12) 3px)",
            }}
          />

          <div className="relative z-[1]">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[oklch(0.84_0.05_170)]">
              Messi Highlights TV
            </p>
            <div className="mt-2 rounded-md border border-[oklch(0.7_0.03_170_/_0.35)] bg-[oklch(0.1_0.03_190_/_0.72)] p-2.5">
              <p className="font-mono text-[11px] text-[oklch(0.86_0.03_165)]">{active.game}</p>
              <p className="mt-1 font-mono text-xs text-[oklch(0.9_0.04_150)]">Score: {active.score}</p>
              <p className="mt-1 line-clamp-2 text-[11px] text-[oklch(0.84_0.02_180_/_0.86)]">{active.scorers}</p>
              <a
                href={active.youtube}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-sm border border-[oklch(0.74_0.05_85_/_0.5)] bg-[oklch(0.66_0.12_75_/_0.18)] px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[oklch(0.92_0.04_90)]"
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-2 rounded-lg border border-foreground/10 bg-black/20 p-2">
          <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/70">
            Hover a match
          </p>
          <div className="max-h-24 space-y-1 overflow-y-auto no-scrollbar pr-1">
            {FOOTBALL_HIGHLIGHTS.map((item) => (
              <div
                key={item.game}
                onMouseEnter={() => setActive(item)}
                className="rounded px-2 py-1 text-[11px] text-foreground/75 transition"
                style={{
                  background: item.game === active.game ? "oklch(0.92 0.02 85 / 0.1)" : "transparent",
                  border: item.game === active.game ? "1px solid oklch(0.75 0.03 85 / 0.22)" : "1px solid transparent",
                }}
              >
                {item.game}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.16_25)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.77_0.14_85)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.13_145)]" />
          <p className="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/60">CRT-01</p>
        </div>
      </div>
    </Draggable>
  );
}
