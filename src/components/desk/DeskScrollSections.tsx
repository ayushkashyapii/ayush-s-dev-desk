import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiDocker,
  SiSharp,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGo,
  SiJavascript,
  SiLangchain,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTensorflow,
  SiTypescript,
  SiVercel,
  SiWebassembly,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import catImg from "@/assets/desk/cat.jpg";
import laptop from "@/assets/desk/sticker-laptop.webp";
import books from "@/assets/desk/sticker-books.webp";
import folderOpenImg from "@/assets/desk/folderopen.png";
import folderCloseImg from "@/assets/desk/folderclose.png";
import { CutoutImage } from "./CutoutImage";

const ABOUT_COPY =
  "Software engineer and systems builder focused on scalable backend infrastructure, AI-powered applications, and developer-first products. Experienced in full-stack development, LLM systems, and performance-driven engineering, with a passion for building thoughtful, high-impact technology.";

const SKILL_ICONS: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Go: SiGo,
  Python: SiPython,
  "C++": SiCplusplus,
  "C#": SiSharp,
  Java: FaJava,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "React Native": SiReact,
  TensorFlow: SiTensorflow,
  OpenCV: SiOpencv,
  LangChain: SiLangchain,
  LangGraph: SiLangchain,
  "Reinforcement Learning": SiTensorflow,
  Git: SiGit,
  Docker: SiDocker,
  Redis: SiRedis,
  PostgreSQL: SiPostgresql,
  Firebase: SiFirebase,
  Vercel: SiVercel,
  WebAssembly: SiWebassembly,
};

const SKILL_GROUPS = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Go", "Python", "C++", "C#", "Java"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Node.js", "Express.js", "React Native"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "OpenCV", "LangChain", "LangGraph", "Reinforcement Learning"],
  },
  {
    title: "Systems & Tools",
    items: ["Git", "Docker", "Redis", "PostgreSQL", "Firebase", "Vercel", "WebAssembly"],
  },
] as const;

function SectionShell({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-2 border-t border-border/60 px-6 py-20 sm:px-10 sm:py-24 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="handwritten text-4xl text-foreground sm:text-5xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function AboutSection() {
  const [folderOpen, setFolderOpen] = useState(false);
  const [panel, setPanel] = useState<"laptop" | "books" | null>(null);

  return (
    <section
      id="about"
      className="scroll-mt-1 border-t border-border/60 px-6 pt-20 pb-12 sm:px-10 sm:pt-10 sm:pb-14"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[220px_1fr_260px] lg:gap-12">
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

          <div className="relative mx-auto w-full max-w-[260px] lg:mx-0 lg:pt-4">
            <div
              onMouseEnter={() => setFolderOpen(true)}
              onMouseLeave={() => setFolderOpen(false)}
              className="relative h-[170px] rounded-lg px-3 pt-3"
            >
              <div className="relative mx-auto w-[118px]">
                <CutoutImage
                  src={folderOpen ? folderOpenImg : folderCloseImg}
                  alt="folder sticker"
                  className="w-full h-auto desk-image-soft"
                  draggable={false}
                />
                <motion.button
                  type="button"
                  onClick={() => setPanel("laptop")}
                  animate={{
                    opacity: folderOpen ? 1 : 0.25,
                    y: folderOpen ? -48 : -16,
                    x: folderOpen ? 56 : 24,
                    scale: folderOpen ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.22 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ pointerEvents: folderOpen ? "auto" : "none" }}
                >
                  <CutoutImage
                    src={laptop}
                    alt="Laptop token"
                    className="h-auto w-[68px] desk-image-soft drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                    draggable={false}
                  />
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setPanel("books")}
                  animate={{
                    opacity: folderOpen ? 1 : 0.25,
                    y: folderOpen ? 16 : -2,
                    x: folderOpen ? -56 : -24,
                    scale: folderOpen ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.22 }}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ pointerEvents: folderOpen ? "auto" : "none" }}
                >
                  <CutoutImage
                    src={books}
                    alt="Books token"
                    className="h-auto w-[62px] desk-image-soft drop-shadow-[0_3px_5px_rgba(0,0,0,0.15)]"
                    draggable={false}
                  />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {panel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPanel(null)}
            className="fixed inset-0 z-[9999] grid place-items-center bg-foreground/30 p-4 backdrop-blur-[2px]"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl rounded-lg border border-border bg-paper p-6"
              style={{ boxShadow: "var(--shadow-lift)" }}
            >
              {panel === "laptop" ? (
                <>
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Current laptop</p>
                  <h3 className="mt-2 handwritten text-4xl text-foreground">My Setup</h3>
                  <div className="mt-4 space-y-2 text-sm text-foreground/80">
                    <p><strong>Model:</strong> HP Pavilion</p>
                    <p><strong>Processor:</strong> 11th Gen Intel Core i5-11300H @ 3.10GHz</p>
                    <p><strong>RAM:</strong> 8 GB (7.7 GB usable)</p>
                    <p><strong>System:</strong> 64-bit OS, x64-based processor</p>
                    <p><strong>OS:</strong> Windows 11 Home Single Language (25H2)</p>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-muted-foreground">Books & Notes</p>
                  <h3 className="mt-2 handwritten text-4xl text-foreground">What I Read</h3>
                  <div className="mt-4 space-y-3 text-sm text-foreground/85">
                    <p>
                      <strong>Designing Data-Intensive Applications</strong>{" "}
                      <span className="rounded bg-primary/12 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wide text-primary">read</span>
                    </p>
                    <p>
                      <strong>Understanding Distributed Systems</strong>{" "}
                      <span className="rounded bg-primary/12 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wide text-primary">read</span>
                    </p>
                  </div>
                </>
              )}
              <button onClick={() => setPanel(null)} className="mt-6 text-xs font-mono text-foreground/60">
                close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

export function ContactSection() {
  const contactItems = [
    {
      label: "X / Twitter",
      href: "https://x.com/AyushKashyapII",
      icon: Twitter,
    },
    {
      label: "GitHub",
      href: "https://github.com/AyushKashyapII",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-kashyap-9492422a8/",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:kashyap11ayush02@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-2 border-t border-border/60 px-6 py-20 sm:px-10 sm:py-24 lg:border-l lg:border-t-0"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="handwritten text-4xl text-foreground sm:text-5xl">Contact</h2>
        <p className="mt-4 text-foreground/80">
          Reach out any time. I am active on social and usually reply quickly.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {contactItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.label === "Email" ? undefined : "_blank"}
                rel={item.label === "Email" ? undefined : "noreferrer"}
                className="group flex items-center gap-3 rounded-md border border-border/60 bg-paper/60 px-4 py-3 transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <Icon className="h-4 w-4 text-foreground/75 transition-colors group-hover:text-primary" />
                <span className="text-sm text-foreground/85">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <SectionShell id="skills" title="Skills" className="pt-10 sm:pt-12">
      <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">
        Tech stack
      </p>
      <p className="mt-4 text-foreground/80">
        A compact map of the languages, frameworks, and tools I use to build products.
      </p>

      <div className="mt-8 space-y-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground/90">
              {group.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-md border border-border/65 bg-paper/70 px-3 py-1.5 text-xs text-foreground/85 shadow-[0_1px_0_oklch(0_0_0_/0.04)] transition-colors hover:border-primary/45 hover:bg-primary/6 hover:text-foreground"
                >
                  {(() => {
                    const SkillIcon = SKILL_ICONS[skill];
                    return SkillIcon ? (
                      <SkillIcon className="mr-2 h-3.5 w-3.5 text-foreground/70" aria-hidden />
                    ) : (
                      <span
                        className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-primary/55"
                        aria-hidden
                      />
                    );
                  })()}
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
