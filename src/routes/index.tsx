import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CenterIdentity } from "@/components/desk/CenterIdentity";
import { Terminal } from "@/components/desk/Terminal";
import { SnakeGame } from "@/components/desk/SnakeGame";
import { CurlPanel } from "@/components/desk/CurlPanel";
import { MusicPlayer } from "@/components/desk/MusicPlayer";
import { StickyNotes } from "@/components/desk/StickyNotes";
import { SystemBoard } from "@/components/desk/SystemBoard";
import { ScoreCard } from "@/components/desk/ScoreCard";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayush Kashyap — Midnight Desk OS" },
      { name: "description", content: "Interactive developer portfolio of Ayush Kashyap. A draggable desktop OS with terminal, mini-game, API playground and more." },
      { property: "og:title", content: "Ayush Kashyap — Midnight Desk OS" },
      { property: "og:description", content: "Step into a developer's desk. Drag windows, run commands, play snake, vibe to lofi." },
    ],
  }),
});

function Index() {
  const [snakeKey, setSnakeKey] = useState(0);
  const snakeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <CenterIdentity />
      <div ref={snakeRef} className="absolute inset-0 pointer-events-none">
        <div className="pointer-events-auto">
          <Terminal onPlay={() => setSnakeKey((k) => k + 1)} />
          <SnakeGame key={snakeKey} />
          <CurlPanel />
          <MusicPlayer />
          <StickyNotes />
          <SystemBoard />
          <ScoreCard />
        </div>
      </div>
      <div className="pointer-events-none fixed bottom-4 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.4em] text-muted-foreground/40">
        drag · click · explore
      </div>
    </div>
  );
}
