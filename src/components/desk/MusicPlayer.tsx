import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { DraggablePanel } from "./DraggablePanel";

const TRACK = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

export function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.45;
    audioRef.current = a;
    return () => { a.pause(); };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setPlaying(!playing);
  };

  return (
    <DraggablePanel
      initial={{ x: 820, y: 470 }}
      rotate={-2.5}
      className="paper-lift w-[240px] p-5 rounded-2xl"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Now Playing</p>
        <span className={`h-2 w-2 rounded-full ${playing ? "bg-primary animate-pulse" : "bg-border"}`} />
      </div>
      <div className="relative w-[150px] h-[150px] mx-auto">
        {/* Vinyl record */}
        <div
          className={`absolute inset-0 rounded-full ${playing ? "spin-slow" : ""}`}
          style={{
            background: "radial-gradient(circle at center, oklch(0.25 0.005 75) 0 18%, oklch(0.18 0.005 75) 18% 22%, oklch(0.22 0.005 75) 22% 100%)",
            boxShadow: "0 6px 14px -4px oklch(0 0 0 / 0.4), inset 0 0 30px oklch(0 0 0 / 0.5)",
          }}
        >
          {/* grooves */}
          <div className="absolute inset-0 rounded-full" style={{
            background: "repeating-radial-gradient(circle, transparent 0 3px, oklch(1 0 0 / 0.04) 3px 4px)"
          }}/>
          {/* label */}
          <div
            className="absolute inset-0 m-auto h-[52px] w-[52px] rounded-full grid place-items-center"
            style={{ background: "var(--primary)" }}
          >
            <div className="h-2.5 w-2.5 rounded-full bg-paper" />
          </div>
        </div>
        {/* play button */}
        <button
          onClick={toggle}
          className="absolute -right-2 -bottom-2 h-12 w-12 rounded-full bg-paper border border-border grid place-items-center hover:scale-105 transition"
          style={{ boxShadow: "var(--shadow-paper)" }}
        >
          {playing ? <Pause className="h-4 w-4 text-foreground" /> : <Play className="h-4 w-4 text-foreground translate-x-0.5" />}
        </button>
      </div>
      <div className="mt-4 text-center">
        <p className="handwritten text-2xl text-foreground leading-none">Vibe Coding</p>
        <p className="text-[11px] text-muted-foreground font-mono mt-1">lofi · slow afternoon</p>
      </div>
    </DraggablePanel>
  );
}
