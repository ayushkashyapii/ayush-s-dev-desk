import { useEffect, useRef, useState, useCallback } from "react";
import { DraggablePanel, PanelHeader } from "./DraggablePanel";

const SIZE = 16;
const CELL = 14;

type P = { x: number; y: number };

export function SnakeGame() {
  const [snake, setSnake] = useState<P[]>([{ x: 8, y: 8 }]);
  const [dir, setDir] = useState<P>({ x: 1, y: 0 });
  const [food, setFood] = useState<P>({ x: 4, y: 4 });
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const [hi, setHi] = useState(0);
  const dirRef = useRef(dir);
  dirRef.current = dir;

  useEffect(() => {
    const v = typeof window !== "undefined" ? localStorage.getItem("snake-hi") : null;
    if (v) setHi(parseInt(v, 10));
  }, []);

  const reset = useCallback(() => {
    setSnake([{ x: 8, y: 8 }]);
    setDir({ x: 1, y: 0 });
    setFood({ x: 4, y: 4 });
    setScore(0);
  }, []);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        const nx = (head.x + dirRef.current.x + SIZE) % SIZE;
        const ny = (head.y + dirRef.current.y + SIZE) % SIZE;
        const next = { x: nx, y: ny };
        if (prev.some((p) => p.x === nx && p.y === ny)) {
          setRunning(false);
          setHi((h) => {
            const nh = Math.max(h, score);
            localStorage.setItem("snake-hi", String(nh));
            return nh;
          });
          return prev;
        }
        const ate = nx === food.x && ny === food.y;
        if (ate) {
          setScore((s) => s + 1);
          setFood({
            x: Math.floor(Math.random() * SIZE),
            y: Math.floor(Math.random() * SIZE),
          });
        }
        return ate ? [next, ...prev] : [next, ...prev.slice(0, -1)];
      });
    }, 110);
    return () => clearInterval(id);
  }, [running, food, score]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const map: Record<string, P> = {
        ArrowUp: { x: 0, y: -1 }, ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 }, ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 }, s: { x: 0, y: 1 }, a: { x: -1, y: 0 }, d: { x: 1, y: 0 },
      };
      const nd = map[e.key];
      if (nd && (nd.x !== -dirRef.current.x || nd.y !== -dirRef.current.y)) {
        setDir(nd);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <DraggablePanel
      initial={{ x: 760, y: 96 }}
      rotate={2}
      className="paper-lift w-[280px] overflow-hidden"
    >
      <PanelHeader title="snake.exe" />
      <div className="p-3 bg-paper-warm rounded-b-xl">
        <div className="flex items-center justify-between text-[11px] font-mono mb-2 text-muted-foreground">
          <span>SCORE <span className="text-foreground font-semibold">{score}</span></span>
          <span>HI <span className="text-primary font-semibold">{hi}</span></span>
        </div>
        <div
          className="relative rounded-md mx-auto"
          style={{
            width: SIZE * CELL,
            height: SIZE * CELL,
            background: "oklch(0.93 0.01 75)",
            border: "1px solid var(--border)",
            boxShadow: "inset 0 1px 3px oklch(0 0 0 / 0.08)",
          }}
        >
          {snake.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-[2px]"
              style={{
                left: s.x * CELL, top: s.y * CELL,
                width: CELL - 2, height: CELL - 2,
                background: i === 0 ? "var(--primary)" : "oklch(0.78 0.06 145)",
              }}
            />
          ))}
          <div
            className="absolute rounded-full"
            style={{
              left: food.x * CELL + 2, top: food.y * CELL + 2,
              width: CELL - 5, height: CELL - 5,
              background: "oklch(0.7 0.16 30)",
            }}
          />
        </div>
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => { if (!running) reset(); setRunning(!running); }}
            className="flex-1 py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-md bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition"
          >
            {running ? "Pause" : score > 0 ? "Restart" : "Start"}
          </button>
        </div>
        <p className="mt-2 text-[10px] font-mono text-center text-muted-foreground/70">arrows · wasd</p>
      </div>
    </DraggablePanel>
  );
}
