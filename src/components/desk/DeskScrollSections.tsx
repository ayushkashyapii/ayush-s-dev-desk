import type { ReactNode } from "react";
import catImg from "@/assets/desk/cat.jpg";

const ABOUT_COPY =
  "Software engineer and systems builder focused on scalable backend infrastructure, AI-powered applications, and developer-first products. Experienced in full-stack development, LLM systems, and performance-driven engineering, with a passion for building thoughtful, high-impact technology.";

function SectionShell({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-2 border-t border-border/60 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="handwritten text-4xl text-foreground sm:text-5xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-2 border-t border-border/60 px-6 py-20 sm:px-10 sm:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-stretch gap-10 sm:flex-row sm:items-start sm:gap-12 md:gap-14">
          <figure className="mx-auto w-[min(220px,78vw)] shrink-0 sm:mx-0 sm:w-[200px] md:w-[228px]">
            <div
              className="relative rounded-[3px] bg-[oklch(0.99_0.005_90)] p-2.5 pb-7 shadow-[0_10px_28px_rgba(40,35,30,0.12),0_1px_0_oklch(0_0_0_/0.05)] ring-1 ring-foreground/[0.06]"
              style={{ transform: "rotate(-2.25deg)" }}
            >
              <span
                className="absolute -top-1 left-1/2 z-[1] h-2.5 w-8 -translate-x-1/2 rotate-[-4deg] rounded-[1px] opacity-90"
                style={{
                  background: "oklch(0.92 0.02 82 / 0.88)",
                  border: "1px solid oklch(0.78 0.03 80 / 0.45)",
                }}
                aria-hidden
              />
              <img
                src={catImg}
                alt="Cat illustration"
                className="aspect-square w-full rounded-[2px] object-cover desk-image-soft"
                style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.08))" }}
                draggable={false}
              />
            </div>
            <figcaption className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground/75">
              Desk buddy
            </figcaption>
          </figure>

          <div className="min-w-0 flex-1 pt-0 sm:pt-1">
            <p className="font-mono text-[10px] uppercase tracking-[0.38em] text-muted-foreground/90">
              A little about me
            </p>
            <h2 className="handwritten mt-2 text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-[3.35rem]">
              About
            </h2>
            <p className="font-newsreader mt-6 text-lg leading-[1.82] text-foreground/[0.88] sm:text-xl md:leading-[1.78]">
              {ABOUT_COPY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WorkSection() {
  return (
    <SectionShell id="work" title="Work">
      <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
        Selected projects
      </p>
      <p className="mt-4 text-foreground/80">
        Highlights from shipping backend systems, tooling, and product work will live here. For now,
        explore the desk above or find code on{" "}
        <a
          href="https://github.com/ayushkashyap"
          className="text-primary underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </SectionShell>
  );
}

export function BlogsSection() {
  return (
    <SectionShell id="blogs" title="Blogs">
      <p className="text-foreground/80">
        Long-form notes on engineering, systems, and building are on the way. Check back soon, or say
        hello on{" "}
        <a
          href="https://x.com/ayushbuilds"
          className="text-primary underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          @ayushbuilds
        </a>
        .
      </p>
    </SectionShell>
  );
}
