import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { DraggablePanel } from "./DraggablePanel";

const TRACK = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.5;
    audioRef.current = a;
    const id = setInterval(() => {
      if (a.duration) setProgress((a.currentTime / a.duration) * 100);
    }, 500);
    return () => { a.pause(); clearInterval(id); };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setPlaying(!playing);
  };

  const C = 2 * Math.PI * 56;
  const offset = C - (progress / 100) * C;

  return (
    <DraggablePanel
      initial={{ x: typeof window !== "undefined" ? window.innerWidth - 280 : 900, y: 440 }}
      rotate={-2.5}
      className="glass-elevated w-[240px] p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Now Playing</p>
        <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
      </div>
      <div className="relative w-[140px] h-[140px] mx-auto">
        <svg className="absolute inset-0 -rotate-90" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r="56" stroke="oklch(1 0 0 / 0.08)" strokeWidth="3" fill="none" />
          <circle
            cx="70" cy="70" r="56"
            stroke="url(#g)" strokeWidth="3" fill="none" strokeLinecap="round"
            strokeDasharray={C} strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.4s ease" }}
          />
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="oklch(0.65 0.22 290)" />
              <stop offset="1" stopColor="oklch(0.78 0.16 220)" />
            </linearGradient>
          </defs>
        </svg>
        <div
          className={`absolute inset-3 rounded-full bg-gradient-to-br from-[#1a1f2e] to-[#0D1117] border border-border flex items-center justify-center ${playing ? "spin-slow" : ""}`}
          style={{ boxShadow: "inset 0 0 20px oklch(0 0 0 / 0.6)" }}
        >
          <div className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-primary" />
          <div className="absolute inset-0 rounded-full" style={{
            background: "repeating-radial-gradient(circle, transparent 0 4px, oklch(1 0 0 / 0.04) 4px 5px)"
          }}/>
        </div>
        <button
          onClick={toggle}
          className="absolute inset-0 m-auto h-12 w-12 rounded-full glass-elevated grid place-items-center hover:scale-110 transition"
          style={{ boxShadow: "var(--shadow-glow-primary)" }}
        >
          {playing ? <Pause className="h-4 w-4 text-primary" /> : <Play className="h-4 w-4 text-primary translate-x-0.5" />}
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm font-medium">Vibe Coding</p>
        <p className="text-[11px] text-muted-foreground font-mono">lofi · midnight mix</p>
      </div>
    </DraggablePanel>
  );
}
