import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { CenterIdentity } from "@/components/desk/CenterIdentity";
// import { Terminal } from "@/components/desk/Terminal";
import { SnakeGame } from "@/components/desk/SnakeGame";
// import { CurlPanel } from "@/components/desk/CurlPanel";
import { VinylCard } from "@/components/desk/VinylCard";
import { LanyardBadge } from "@/components/desk/LanyardBadge";
import { Vase } from "@/components/desk/Plant";
import { PixelDisplay } from "@/components/desk/PixelDisplay";
import { Moodboard } from "@/components/desk/Moodboard";
import { TablePlant } from "@/components/desk/TablePlant";
import { MusicSticker } from "@/components/desk/MusicSticker";
import { DeskExtraPhotos } from "@/components/desk/DeskExtraPhotos";
import { FootballTV } from "@/components/desk/FootballTV";
import { AboutSection, WorkSection, ContactSection, SkillsSection } from "@/components/desk/DeskScrollSections";
import tornPaperImg from "@/assets/desk/tornpaper.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayush Kashyap - Software Engineer" },
      {
        name: "description",
        content:
          "An interactive desk portfolio of Ayush Kashyap. Drag, click, explore — terminal, polaroids, vinyl, and more.",
      },
      { property: "og:title", content: "Ayush Kashyap -Software Engineer" },
      {
        property: "og:description",
        content: "A calm, tactile developer workspace. Drag windows, run commands, explore.",
      },
    ],
  }),
});

function Index() {
  const [openPlayerSignal, setOpenPlayerSignal] = useState(0);
  const snakeRef = useRef<HTMLDivElement>(null);
  return (
    <div className="relative min-h-screen w-screen overflow-y-auto scroll-smooth">
      {/* Hero — interactive desk */}
      <section
        id="hero"
        className="relative"
        style={{ width: 1280, minWidth: "100%", height: 1080 }}
        aria-label="Hero desk"
      >
        <a
          href="#hero"
          className="absolute top-4 left-6 z-[30] handwritten text-xl text-foreground/80 transition-opacity hover:opacity-80"
        >
          Ayush
        </a>
        <nav
          className="absolute top-5 right-8 z-[30] flex gap-6 text-xs font-mono text-muted-foreground/80"
          aria-label="Page sections"
        >
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#work" className="transition-colors hover:text-foreground">
            Work
          </a>
          <a href="#contact" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>

        <CenterIdentity />

        <div ref={snakeRef} className="absolute inset-0">
          <LanyardBadge />
          <Vase />
          <PixelDisplay />
          <VinylCard />
          <MusicSticker />
          <Moodboard />
          <TablePlant />
          <DeskExtraPhotos />
          {/* <Terminal onPlay={() => setOpenPlayerSignal((k) => k + 1)} /> */}
          {/* <SnakeGame openSignal={openPlayerSignal} />
          <FootballTV /> */}
          {/* <CurlPanel /> */}
        </div>

        <div className="pointer-events-none absolute bottom-[-8px] left-1/2 z-[25] w-[min(82vw,980px)] -translate-x-1/2">
          <img src={tornPaperImg} alt="" className="h-auto w-full opacity-95" draggable={false} />
          <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-mono text-[13px] uppercase tracking-[0.38em] text-foreground/85 sm:text-[15px]">
            I think, then I build
          </p>
        </div>

        {/* <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-[0.35em] text-muted-foreground/45">
          drag · click · explore
        </div> */}
      </section>

      <div className="mx-auto w-full max-w-[1280px] border-x border-border/30 border-dashed">
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
}
