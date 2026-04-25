import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CenterIdentity } from "@/components/desk/CenterIdentity";
import { Terminal } from "@/components/desk/Terminal";
import { SnakeGame } from "@/components/desk/SnakeGame";
import { CurlPanel } from "@/components/desk/CurlPanel";
import { VinylCard } from "@/components/desk/VinylCard";
import { StickyNotes } from "@/components/desk/StickyNotes";
import { LanyardBadge } from "@/components/desk/LanyardBadge";
import { Plant, Vase, Leaf } from "@/components/desk/Plant";
import { Stickers } from "@/components/desk/Stickers";
import { PixelDisplay } from "@/components/desk/PixelDisplay";
import { Ticket } from "@/components/desk/Ticket";
import { Moodboard } from "@/components/desk/Moodboard";
import { FootballTV } from "@/components/desk/FootballTV";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayush Kashyap — Desk" },
      { name: "description", content: "An interactive desk portfolio of Ayush Kashyap. Drag, click, explore — terminal, polaroids, vinyl, sticky notes and more." },
      { property: "og:title", content: "Ayush Kashyap — Desk" },
      { property: "og:description", content: "A calm, tactile developer workspace. Drag windows, run commands, leave notes." },
    ],
  }),
});

function Index() {
  const [openPlayerSignal, setOpenPlayerSignal] = useState(0);
  const snakeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative h-screen w-screen overflow-auto">
      {/* The desk surface — fixed canvas size, scroll on small screens */}
      <div className="relative" style={{ width: 1280, minWidth: "100%", height: 1080 }}>
        {/* Top-left mini brand */}
        <div className="absolute top-4 left-6 handwritten text-xl text-foreground/80 z-[2]">
          Ayush
        </div>
        {/* Top-right nav-ish labels (decorative) */}
        <div className="absolute top-5 right-8 flex gap-6 text-xs font-mono text-muted-foreground/80 z-[2]">
          <span className="cursor-default">About</span>
          <span className="cursor-default">Work</span>
          <span className="cursor-default">Playground</span>
        </div>

        {/* Center identity — stays behind */}
        <CenterIdentity />

        {/* Decorative leaves scattered */}
        <div ref={snakeRef} className="absolute inset-0">
          <Leaf x={1160} y={530} rotate={20} size={66} />

          {/* Hanging ID badge */}
          <LanyardBadge />

          {/* Plants */}
          <Plant />
          <Vase />

          {/* Decorative paper ticket */}
          <Ticket />

          {/* Pixel display */}
          <PixelDisplay />

          {/* Stickers cluster near center */}
          <Stickers />

          {/* Vinyl music card */}
          <VinylCard />

          {/* Moodboard polaroids */}
          <Moodboard />

          {/* Terminal */}
          <Terminal onPlay={() => setOpenPlayerSignal((k) => k + 1)} />

          {/* Snake retro device */}
          <SnakeGame openSignal={openPlayerSignal} />

          {/* Football highlight CRT TV */}
          <FootballTV />

          {/* Curl receipt */}
          <CurlPanel />

          {/* Sticky notes */}
          <StickyNotes />
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.35em] text-muted-foreground/45">
          drag · click · explore
        </div>
      </div>
    </div>
  );
}
