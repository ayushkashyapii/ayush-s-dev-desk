import { useEffect, useRef, useState } from "react";
import { DraggablePanel, PanelHeader } from "./DraggablePanel";

type Line = { kind: "in" | "out" | "sys"; text: string };

const HELP = `Available commands:
  help        — show this menu
  about       — who I am
  projects    — list projects
  skills      — tech I work with
  contact     — how to reach me
  play        — launch snake game
  clear       — wipe the screen`;

const PROJECTS = `• bittorrent-go      — peer-to-peer file client (Go)
• chess-engine       — bitboard engine + UCI (C++)
• desk-os            — this portfolio (React + TS)
• vibe-coder         — lofi pomodoro PWA`;

const SKILLS = `Languages : TypeScript · Go · C++ · Python · Rust
Systems   : Distributed · Networking · Compilers
Frontend  : React · TanStack · Tailwind · Three.js
Backend   : Node · Postgres · Redis · gRPC`;

const CONTACT = `email   : ayush@kashyap.dev
github  : github.com/ayushkashyap
x       : @ayushbuilds
site    : ayush.dev`;

const ABOUT = `Engineer. Tinkerer. Late-night shipper.
Currently building developer-first tooling.`;

interface TerminalProps {
  onPlay: () => void;
}

export function Terminal({ onPlay }: TerminalProps) {
  const [history, setHistory] = useState<Line[]>([
    { kind: "sys", text: "desk.terminal v1.0  ·  type 'help' to begin" },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const out: Line[] = [{ kind: "in", text: raw }];
    switch (cmd) {
      case "":
        break;
      case "help": out.push({ kind: "out", text: HELP }); break;
      case "about": out.push({ kind: "out", text: ABOUT }); break;
      case "projects": out.push({ kind: "out", text: PROJECTS }); break;
      case "skills": out.push({ kind: "out", text: SKILLS }); break;
      case "contact": out.push({ kind: "out", text: CONTACT }); break;
      case "play":
        out.push({ kind: "out", text: "→ launching snake.exe" });
        onPlay();
        break;
      case "clear":
        setHistory([]);
        return;
      default:
        out.push({ kind: "out", text: `command not found: ${cmd} — try 'help'` });
    }
    setHistory((h) => [...h, ...out]);
  };

  return (
    <DraggablePanel
      initial={{ x: 48, y: 88 }}
      rotate={-1.2}
      className="paper-lift w-[420px] max-w-[90vw] overflow-hidden"
    >
      <PanelHeader title="ayush@desk: ~" dot />
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="bg-[#F8F8F8] font-mono text-[12.5px] leading-relaxed p-4 h-[280px] overflow-y-auto no-scrollbar cursor-text text-foreground/85"
      >
        {history.map((l, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {l.kind === "in" && (
              <span><span className="text-primary">›</span> <span className="text-terminal-green">~</span>{" "}<span className="text-foreground">{l.text}</span></span>
            )}
            {l.kind === "out" && <span className="text-foreground/80">{l.text}</span>}
            {l.kind === "sys" && <span className="text-muted-foreground italic">{l.text}</span>}
          </div>
        ))}
        <form
          onSubmit={(e) => { e.preventDefault(); run(input); setInput(""); }}
          className="flex items-center gap-2 mt-1"
        >
          <span className="text-primary">›</span>
          <span className="text-terminal-green">~</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            spellCheck={false}
            className="flex-1 bg-transparent outline-none border-none text-foreground placeholder:text-muted-foreground/50"
            placeholder="type a command…"
          />
        </form>
      </div>
    </DraggablePanel>
  );
}
