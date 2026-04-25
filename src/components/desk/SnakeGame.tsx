import { useEffect, useRef, useState, useCallback } from "react";
import { Draggable } from "./Draggable";

const SIZE = 14;
const CELL = 13;

type P = { x: number; y: number };

export function SnakeGame() {
  const [snake, setSnake] = useState<P[]>([{ x: 7, y: 7 }]);
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
    setSnake([{ x: 7, y: 7 }]);
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
          setFood({ x: Math.floor(Math.random() * SIZE), y: Math.floor(Math.random() * SIZE) });
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
      if (nd && (nd.x !== -dirRef.current.x || nd.y !== -dirRef.current.y)) setDir(nd);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <Draggable initial={{ x: 880, y: 470 }} rotate={2} className="w-[230px]">
      {/* Retro device shell */}
      <div
        className="rounded-2xl p-3 pt-2"
        style={{
          background: "linear-gradient(160deg, oklch(0.86 0.02 75), oklch(0.78 0.02 75))",
          boxShadow: "var(--shadow-lift), inset 0 1px 0 oklch(1 0 0 / 0.6)",
          border: "1px solid oklch(0.7 0.02 75)",
        }}
      >
        <div className="flex items-center justify-between text-[10px] font-mono mb-1.5 text-foreground/70 px-1">
          <span>SCORE <span className="text-foreground font-semibold">{score}</span></span>
          <span className="handwritten text-base text-foreground/80">snake</span>
          <span>HI <span className="text-primary font-semibold">{hi}</span></span>
        </div>
        <div
          className="relative rounded-md mx-auto"
          style={{
            width: SIZE * CELL, height: SIZE * CELL,
            background: "oklch(0.92 0.02 130)",
            border: "1px solid oklch(0.55 0.02 75)",
            boxShadow: "inset 0 1px 4px oklch(0 0 0 / 0.18)",
          }}
        >
          {snake.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-[1px]"
              style={{
                left: s.x * CELL, top: s.y * CELL,
                width: CELL - 2, height: CELL - 2,
                background: i === 0 ? "oklch(0.4 0.05 145)" : "oklch(0.55 0.07 145)",
              }}
            />
          ))}
          <div
            className="absolute rounded-full"
            style={{
              left: food.x * CELL + 2, top: food.y * CELL + 2,
              width: CELL - 5, height: CELL - 5,
              background: "oklch(0.6 0.18 30)",
            }}
          />
        </div>
        <button
          onClick={() => { if (!running) reset(); setRunning(!running); }}
          className="mt-2 w-full py-1.5 text-[11px] font-mono uppercase tracking-wider rounded-md bg-foreground/10 text-foreground border border-foreground/15 hover:bg-foreground/15 transition"
        >
          {running ? "Pause" : score > 0 ? "Restart" : "Start"}
        </button>
        <p className="mt-1.5 text-[9px] font-mono text-center text-foreground/50">arrows · wasd</p>
      </div>
    </Draggable>
  );
}
