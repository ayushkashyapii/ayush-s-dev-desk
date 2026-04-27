import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Folder, Github, History, Linkedin, Mail, Star, Twitter } from "lucide-react";
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
  SiPytorch,
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
import chessProjectImg from "@/assets/desk/chess.png";
import laptop from "@/assets/desk/sticker-laptop.webp";
import books from "@/assets/desk/sticker-books.webp";
import folderOpenImg from "@/assets/desk/folderopen.png";
import folderCloseImg from "@/assets/desk/folderclose.png";
import pacmanProjectImg from "@/assets/desk/pacman.png";
import terminalProjectImg from "@/assets/desk/terminal.png";
import tetrisProjectImg from "@/assets/desk/tetris.png";
import torrentProjectImg from "@/assets/desk/torrent.png";
import constructureImg from "@/assets/desk/constructure.png";
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
  PyTorch: SiPytorch,
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
    items: ["TensorFlow", "PyTorch", "OpenCV", "LangChain", "LangGraph", "Reinforcement Learning"],
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
  containerClassName,
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-2 border-t border-border/60 px-6 py-12 sm:px-10 sm:py-14 ${className ?? ""}`}
    >
      <div className={`mx-auto max-w-3xl ${containerClassName ?? ""}`}>
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
      className="scroll-mt-1 border-t border-border/60 px-6 pt-10 pb-12 sm:px-1 sm:pt-6 sm:pb-14"
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
  const projectFolders = [
    {
      id: "gochess",
      rank: "FOLDER 01",
      title: "GoChess Engine",
      subtitle:
        "A high-performance chess engine built in Go, designed to bring classical search algorithms, optimization strategies, and browser deployment together in one seamless system.",
      overview:
        "GoChess started as a deep dive into systems thinking, algorithmic optimization, and game engine architecture. Built from scratch, the engine leverages advanced search techniques like Minimax with Alpha-Beta Pruning, Zobrist Hashing, and Transposition Tables to evaluate positions efficiently while minimizing redundant calculations. To push performance further, the engine was compiled to WebAssembly for browser deployment and enhanced with Web Workers for parallelized move computation, allowing strong performance directly in the browser.",
      highlights: [
        "Engineered advanced move-search logic using Minimax + Alpha-Beta pruning",
        "Reduced unnecessary recomputation through Zobrist hashing and transposition caching",
        "Integrated Quiescence Search for improved tactical stability",
        "Deployed engine in-browser using WebAssembly",
        "Improved move generation speed using parallel processing",
      ],
      tech: ["Go", "WebAssembly", "JavaScript", "Chess Algorithms", "Web Workers"],
      previews: [{ src: chessProjectImg, alt: "GoChess engine preview" }],
      learned: [
        "Search optimization",
        "State caching",
        "Browser-native systems deployment",
        "Performance engineering",
        "Low-level algorithm design",
      ],
      showcase: ["Demo gameplay", "Search visualization", "Architecture diagram", "WASM integration"],
      githubUrl: "https://github.com/AyushKashyapII/Chess",
      liveUrl: "https://chess-dzbr1y3df-ayush-kashyaps-projects-9064ed5b.vercel.app",
      accent: "bg-[#9ecdf1] ring-[#86badf]/70",
      iconTone: "text-[#2b6289]",
    },
    {
      id: "pygit",
      rank: "FOLDER 02",
      title: "PyGit",
      subtitle:
        "A ground-up reimplementation of Git's internal architecture, focused on understanding version control systems through content-addressable storage and commit graph mechanics.",
      overview:
        "PyGit was built to explore how modern version control systems work beneath the surface. Rather than relying on existing abstractions, this project reconstructs Git's core object model - including blobs, trees, and commits - while implementing SHA-1 hashing, object storage, and commit traversal from scratch. The result is a functional CLI tool capable of initializing repositories, staging changes, creating commits, and traversing commit history while mirroring key Git design principles.",
      highlights: [
        "Rebuilt Git's Blob, Tree, and Commit architecture",
        "Designed SHA-1 based content-addressable storage",
        "Implemented commit DAG traversal",
        "Created command-line support for essential Git operations",
        "Developed practical understanding of versioned file systems",
      ],
      tech: ["Python", "Git Internals", "SHA-1", "CLI Development", "File Systems"],
      previews: [],
      learned: [
        "Version control internals",
        "Hashing systems",
        "File system architecture",
        "Commit graph design",
        "Developer tooling",
      ],
      showcase: [
        "Terminal screenshots",
        "Commit tree visualization",
        "Object storage structure",
        "CLI workflows",
      ],
      githubUrl: "https://github.com/AyushKashyapII/Git_Local",
      liveUrl: null,
      accent: "bg-[#eacaa0] ring-[#d6b183]/70",
      iconTone: "text-[#8b6431]",
    },
    {
      id: "pacman-ai",
      rank: "FOLDER 03",
      title: "Pacman AI",
      subtitle:
        "A reinforcement learning project focused on autonomous gameplay through Q-Learning and policy optimization.",
      overview:
        "Pacman AI was built to explore machine learning through practical game environments. By implementing reinforcement learning techniques like Q-Learning and Deep Q-Networks, the project trains an agent to make increasingly intelligent decisions based on environmental rewards, penalties, and state transitions. Special focus was placed on reward shaping, state representation, and policy convergence to improve learning efficiency and overall gameplay performance.",
      highlights: [
        "Developed RL agent for autonomous decision making",
        "Implemented Q-Learning / DQN frameworks",
        "Optimized reward structures for improved convergence",
        "Designed state-action pipelines",
        "Improved policy stability through iterative tuning",
      ],
      tech: ["Python", "TensorFlow", "Reinforcement Learning", "OpenCV"],
      previews: [{ src: pacmanProjectImg, alt: "Pacman AI gameplay preview" }],
      learned: [
        "Reinforcement learning systems",
        "Agent optimization",
        "Reward engineering",
        "Policy learning",
        "AI experimentation",
      ],
      showcase: ["Gameplay demo", "Training metrics", "Reward progression graphs", "AI performance comparisons"],
      githubUrl: "https://github.com/AyushKashyapII/Pacman",
      liveUrl: null,
      accent: "bg-[#c7b7e9] ring-[#b09ad8]/70",
      iconTone: "text-[#5f4c86]",
    },
    {
      id: "terminal-portfolio",
      rank: "FOLDER 04",
      title: "Terminal Portfolio",
      subtitle:
        "A developer-first portfolio built in Go, combining an interactive terminal UI, curl-accessible HTTP mode, and embedded retro gameplay into one cohesive personal system.",
      overview:
        "This project reimagines the traditional developer portfolio as a terminal-native experience. Built using Go and Bubble Tea, the portfolio functions both as a local interactive TUI and a deployable HTTP service, allowing users to either navigate a full-screen terminal interface or access a styled ANSI-rendered portfolio directly through curl. The system blends software engineering, systems design, and playful interactivity by integrating full-screen terminal navigation, resume and portfolio content, browser-openable links, ANSI HTTP rendering, and terminal-based Tetris gameplay.",
      highlights: [
        "Built a full interactive terminal portfolio using Bubble Tea",
        "Created dual-mode architecture: local full-screen TUI and HTTP curl-based public portfolio",
        "Designed ANSI-styled output for remote terminal viewing",
        "Added embedded playable Tetris mode directly inside terminal",
        "Included Docker + Fly.io deployment support",
        "Structured the project for future extensibility (games, blog, SSH, themes)",
      ],
      tech: ["Go", "Bubble Tea", "Lip Gloss", "HTTP Servers", "Docker", "Fly.io", "ANSI Rendering"],
      previews: [
        { src: terminalProjectImg, alt: "Terminal portfolio interface" },
        { src: tetrisProjectImg, alt: "Embedded terminal tetris mode" },
      ],
      learned: [
        "Terminal UI architecture",
        "State-driven CLI design",
        "ANSI rendering systems",
        "HTTP service deployment",
        "Interactive developer tooling",
        "Retro game integration",
        "Product personalization",
      ],
      showcase: ["Interactive TUI", "Curl endpoint", "Terminal Tetris", "Docker deploy setup"],
      githubUrl: "https://github.com/AyushKashyapII/Terminal",
      liveUrl: "https://ayush-terminal.fly.dev/terminal",
      accent: "bg-[#9fc4b9] ring-[#87ad9f]/70",
      iconTone: "text-[#365f53]",
    },
    {
      id: "gopherswarm",
      rank: "FOLDER 05",
      title: "GoPherSwarm",
      subtitle:
        "A fully functional BitTorrent client built from scratch in Go, designed to explore distributed systems, peer-to-peer networking, and concurrent protocol engineering.",
      overview:
        "GoPherSwarm is a deep systems engineering project focused on rebuilding the BitTorrent protocol from the ground up. Rather than relying on external abstractions, this client implements core BitTorrent infrastructure manually - from Bencode parsing and tracker communication to peer wire protocol execution, concurrent downloading, and piece verification. By leveraging Go's goroutines and channels, GoPherSwarm uses a scalable Foreman-Worker architecture to coordinate peer connections, optimize throughput, and maintain data integrity across downloads.",
      highlights: [
        "Built full .torrent parser with custom Bencode implementation",
        "Implemented HTTP tracker communication for peer discovery",
        "Recreated complete BitTorrent peer wire protocol (handshake, bitfield, choke/unchoke, piece pipeline)",
        "Designed concurrent multi-peer download orchestration",
        "Implemented pipelined block requests for throughput optimization",
        "Verified downloaded pieces using SHA-1 hashing",
        "Added graceful shutdown and interrupt handling",
      ],
      tech: ["Go", "TCP Networking", "Distributed Systems", "BitTorrent Protocol", "Concurrency", "SHA-1"],
      previews: [{ src: torrentProjectImg, alt: "GoPherSwarm BitTorrent client preview" }],
      learned: [
        "Distributed system design",
        "P2P networking",
        "TCP/IP protocol engineering",
        "Concurrency orchestration",
        "Work scheduling",
        "Throughput optimization",
        "Protocol serialization",
        "Fault tolerance",
      ],
      showcase: ["Protocol flow", "Foreman-worker architecture", "Concurrent downloader", "Integrity checks"],
      githubUrl: "https://github.com/AyushKashyapII/BitTorrent",
      liveUrl: null,
      accent: "bg-[#f0b8a8] ring-[#df9c88]/70",
      iconTone: "text-[#8d4f3d]",
    },
  ] as const;
  const blogFolders = [
    {
      id: "bittorrent-protocol",
      title: "BitTorrent Protocol",
      subtitle: "The protocol that quietly solved internet-scale file distribution.",
      previews: [{ src: torrentProjectImg, alt: "BitTorrent protocol blog visual" }],
      intro:
        "When most people hear BitTorrent, they immediately think of piracy. But once you actually study the protocol, you realize BitTorrent is one of the most elegant distributed systems ever designed - a system that fundamentally rethought how large-scale data distribution should work on the internet.",
      sections: [
        {
          heading: "The Original Problem",
          content:
            "Before BitTorrent, large file distribution followed a centralized model: one server to many users. At internet scale this led to overloaded servers, high bandwidth cost, slow downloads, and single points of failure.",
          bullets: [
            "Servers became overloaded under sudden demand",
            "Bandwidth costs scaled linearly with traffic",
            "Downloads slowed dramatically",
            "Single points of failure emerged",
          ],
        },
        {
          heading: "Bram Cohen's Breakthrough",
          content:
            "In 2001, Bram Cohen introduced BitTorrent and flipped the model. Every downloader also becomes an uploader, turning distribution into a decentralized swarm where demand increases capacity.",
          bullets: [
            "Files split into small verifiable pieces",
            "Peers download from multiple peers simultaneously",
            "Peers upload pieces they already have",
            "Network strength grows as participation grows",
          ],
        },
        {
          heading: "How BitTorrent Works",
          content:
            "A client reads torrent metadata, discovers peers through trackers, communicates via peer wire protocol, downloads pieces in parallel, and verifies each piece using SHA-1.",
          bullets: [
            "Torrent metadata: structure, piece hashes, tracker URLs, InfoHash",
            "Tracker discovery: peer list + swarm formation",
            "Peer protocol: handshake, bitfield, choke/unchoke, piece requests",
            "Parallel piece downloading + integrity verification",
          ],
        },
        {
          heading: "Why BitTorrent Is Brilliant",
          content:
            "BitTorrent solves multiple distributed systems challenges at once: scalability, reliability, efficiency, and incentive alignment.",
          bullets: [
            "Scalability: more peers means more throughput",
            "Fault tolerance: no central serving bottleneck",
            "Efficiency: bandwidth cost distributed across users",
            "Reliability: cryptographic piece verification",
            "Incentives: tit-for-tat encourages contribution",
          ],
        },
        {
          heading: "Beyond Piracy",
          content:
            "The architecture is used in legitimate large-scale distribution contexts such as game updates, Linux ISO distribution, internal deployment pipelines, scientific datasets, and open-data delivery.",
          bullets: [
            "Blizzard game update distribution patterns",
            "Linux distributions sharing ISOs",
            "P2P-inspired deployment strategies in large tech systems",
            "University-scale scientific dataset distribution",
          ],
        },
        {
          heading: "What Learning BitTorrent Taught Me",
          content:
            "Implementing a torrent client from scratch provided practical depth in networking, distributed coordination, concurrency, and performance engineering.",
          bullets: [
            "TCP connections and protocol serialization",
            "Peer state management and swarm coordination",
            "Goroutines and worker orchestration",
            "Pipelined requests and throughput optimization",
            "Hash verification and protocol integrity",
          ],
        },
      ],
      takeaway:
        "BitTorrent didn't just make downloads faster. It redefined how the internet could distribute data.",
      accent: "bg-[#f0b8a8] ring-[#df9c88]/70",
      iconTone: "text-[#8d4f3d]",
    },
  ] as const;
  const historyFolders = [
    {
      id: "work-ex",
      title: "Work Ex",
      subtitle: "Internships and professional experience",
      accent: "bg-[#c7b7e9] ring-[#b09ad8]/70",
      iconTone: "text-[#5f4c86]",
      entries: [
        {
          id: "constructure-ai",
          company: "Constructure AI",
          role: "Software Engineer Intern",
          period: "Dec 2025 - Apr 2026",
          overview:
            "Worked on backend systems and AI infrastructure for LLM-driven applications, large-scale construction data pipelines, and retrieval-based workflows. Focused on building scalable services, improving system performance, and developing production-ready tools that connected data, models, and external systems.",
          contributions: [
            "Built backend APIs for AI-powered applications",
            "Developed scalable data ingestion pipelines",
            "Implemented hybrid RAG retrieval systems",
            "Designed multi-agent workflow orchestration",
            "Optimized latency through caching and async processing",
          ],
          tech: ["Node.js", "Python", "LangChain", "Redis", "PostgreSQL", "Docker"],
          takeaways: [
            "Production AI systems",
            "Backend scalability",
            "Retrieval engineering",
            "Workflow orchestration",
            "Performance optimization",
          ],
          tagline: "My first step into building real-world AI infrastructure at scale.",
          preview: { src: constructureImg, alt: "Constructure AI experience visual" },
        },
      ],
    },
  ] as const;

  const [activePane, setActivePane] = useState<"projects" | "blogs" | "history">("projects");
  const [activeProjectId, setActiveProjectId] = useState<(typeof projectFolders)[number]["id"] | null>(null);
  const activeProject = projectFolders.find((folder) => folder.id === activeProjectId) ?? null;
  const [activeBlogId, setActiveBlogId] = useState<(typeof blogFolders)[number]["id"] | null>(null);
  const activeBlog = blogFolders.find((blog) => blog.id === activeBlogId) ?? null;
  const [activeHistoryFolderId, setActiveHistoryFolderId] = useState<(typeof historyFolders)[number]["id"] | null>(
    null,
  );
  const activeHistoryFolder = historyFolders.find((folder) => folder.id === activeHistoryFolderId) ?? null;

  return (
    <SectionShell id="work" title="Work" containerClassName="max-w-6xl">
      <div className="overflow-hidden rounded-xl border border-border/70 bg-[oklch(0.98_0.004_90)] shadow-[0_10px_34px_rgba(60,52,40,0.08)]">
        <div className="flex items-center justify-between border-b border-border/60 bg-paper/80 px-4 py-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#facc15]/85" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4ade80]/85" />
          </div>
          <p className="text-center text-[11px] font-mono text-muted-foreground/85">~/ayush/workspace</p>
          <span className="w-10" />
        </div>

        <div className="grid h-[500px] grid-cols-[150px_1fr]">
          <aside className="border-r border-border/60 bg-paper/45 px-3 py-4">
            <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground/85">
              Favorites
            </p>
            <div className="space-y-1.5">
              <button
                onClick={() => setActivePane("projects")}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] ${
                  activePane === "projects"
                    ? "bg-primary/12 text-foreground/85"
                    : "text-foreground/70 hover:bg-foreground/[0.05]"
                }`}
              >
                <Folder className="h-3.5 w-3.5 text-primary/80" />
                Projects
              </button>
              <button
                onClick={() => setActivePane("blogs")}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] ${
                  activePane === "blogs"
                    ? "bg-primary/12 text-foreground/85"
                    : "text-foreground/70 hover:bg-foreground/[0.05]"
                }`}
              >
                <BookOpen className="h-3.5 w-3.5 text-foreground/60" />
                Read Blogs
              </button>
              <button
                onClick={() => setActivePane("history")}
                className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] ${
                  activePane === "history"
                    ? "bg-primary/12 text-foreground/85"
                    : "text-foreground/70 hover:bg-foreground/[0.05]"
                }`}
              >
                <History className="h-3.5 w-3.5 text-foreground/60" />
                History
              </button>
            </div>
          </aside>

          <div className="h-full overflow-hidden p-5 sm:p-6">
            {activePane === "projects" ? (
              !activeProject ? (
                <>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
                    {projectFolders.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setActiveProjectId(project.id)}
                        className="group w-full rounded-lg border border-border/65 bg-paper/60 p-2.5 text-left transition-transform hover:-translate-y-0.5 hover:bg-paper"
                      >
                        <div
                          className={`flex h-14 w-full items-center justify-center rounded-md ring-1 ${project.accent}`}
                        >
                          <Folder className={`h-5 w-5 ${project.iconTone}`} />
                        </div>
                        <p className="mt-2 text-sm text-foreground/88">{project.title}</p>
                      </button>
                    ))}
                  </div>
                  <div></div>
                </>
              ) : (
                <div className="h-full overflow-y-auto rounded-lg border border-border/60 bg-paper/70 p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveProjectId(null)}
                      className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                    >
                      ← Back to folders
                    </button>
                    <div className="flex items-center gap-3">
                      {activeProject.liveUrl ? (
                        <a
                          href={activeProject.liveUrl}
                          className="inline-flex items-center gap-1.5 text-[11px] text-primary hover:underline"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live
                        </a>
                      ) : null}
                      <a
                        href={activeProject.githubUrl}
                        className="inline-flex items-center gap-1.5 text-[11px] text-primary hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Star className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/90">
                      {activeProject.rank}
                    </p>
                    <h3 className="mt-1 handwritten text-4xl text-foreground">{activeProject.title}</h3>
                  </div>

                  <p className="mt-4 text-sm text-foreground/80">{activeProject.subtitle}</p>

                  {activeProject.previews.length > 0 ? (
                    <div
                      className={`mt-4 grid gap-3 ${activeProject.previews.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}
                    >
                      {activeProject.previews.map((preview) => (
                        <img
                          key={preview.alt}
                          src={preview.src}
                          alt={preview.alt}
                          className={`w-full rounded-md border border-border/60 bg-white/80 object-contain p-2 ${activeProject.previews.length === 1 ? "h-64 sm:h-72" : "h-48 sm:h-56"}`}
                          draggable={false}
                        />
                      ))}
                    </div>
                  ) : null}

                  <p className="mt-4 text-sm leading-6 text-foreground/78">{activeProject.overview}</p>

                  <div className="mt-5 grid gap-5 md:grid-cols-2">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">
                        Key Highlights
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                        {activeProject.highlights.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">
                        What I Learned
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                        {activeProject.learned.map((point) => (
                          <li key={point}>- {point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">
                      Tech Stack
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border/60 bg-paper px-2.5 py-1 text-[11px] text-foreground/82"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ) : activePane === "blogs" ? (
              !activeBlog ? (
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                  {blogFolders.map((blog) => (
                    <button
                      key={blog.id}
                      onClick={() => setActiveBlogId(blog.id)}
                      className="group w-full rounded-lg border border-border/65 bg-paper/60 p-3 text-left transition-transform hover:-translate-y-0.5 hover:bg-paper"
                    >
                      <div className={`flex h-14 w-full items-center justify-center rounded-md ring-1 ${blog.accent}`}>
                        <BookOpen className={`h-5 w-5 ${blog.iconTone}`} />
                      </div>
                      <p className="mt-2 text-sm text-foreground/88">{blog.title}</p>
                      <p className="mt-1 text-[11px] text-muted-foreground/85">{blog.subtitle}</p>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="h-full overflow-y-auto rounded-lg border border-border/60 bg-paper/70 p-4 sm:p-5">
                  <button
                    onClick={() => setActiveBlogId(null)}
                    className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                  >
                    ← Back to blogs
                  </button>
                  <h3 className="mt-3 handwritten text-4xl text-foreground">
                    BitTorrent: The Protocol That Quietly Solved Internet-Scale File Distribution
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-foreground/80">{activeBlog.intro}</p>
                  {activeBlog.previews.length > 0 ? (
                    <div className="mt-4">
                      {activeBlog.previews.map((preview) => (
                        <img
                          key={preview.alt}
                          src={preview.src}
                          alt={preview.alt}
                          className="h-64 w-full rounded-md border border-border/60 bg-white/80 object-contain p-2 sm:h-72"
                          draggable={false}
                        />
                      ))}
                    </div>
                  ) : null}

                  {activeBlog.sections.map((section) => (
                    <div key={section.heading} className="mt-5">
                      <h4 className="text-sm font-mono uppercase tracking-[0.14em] text-foreground/95">
                        {section.heading}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-foreground/80">{section.content}</p>
                      <ul className="mt-2 space-y-1.5 text-sm text-foreground/78">
                        {section.bullets.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="mt-6 rounded-md border border-primary/25 bg-primary/8 px-3 py-2">
                    <p className="text-sm text-foreground/85">
                      <span className="font-medium">Key Takeaway:</span> {activeBlog.takeaway}
                    </p>
                  </div>
                </div>
              )
            ) : !activeHistoryFolder ? (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {historyFolders.map((folder) => (
                  <button
                    key={folder.id}
                    onClick={() => setActiveHistoryFolderId(folder.id)}
                    className="group w-full rounded-lg border border-border/65 bg-paper/60 p-3 text-left transition-transform hover:-translate-y-0.5 hover:bg-paper"
                  >
                    <div className={`flex h-14 w-full items-center justify-center rounded-md ring-1 ${folder.accent}`}>
                      <Folder className={`h-5 w-5 ${folder.iconTone}`} />
                    </div>
                    <p className="mt-2 text-sm text-foreground/88">{folder.title}</p>
                    <p className="mt-1 text-[11px] text-muted-foreground/85">{folder.subtitle}</p>
                  </button>
                ))}
              </div>
            ) : (
              <div className="h-full overflow-y-auto rounded-lg border border-border/60 bg-paper/70 p-4 sm:p-5">
                <button
                  onClick={() => setActiveHistoryFolderId(null)}
                  className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground"
                >
                  ← Back to history
                </button>

                {activeHistoryFolder.entries.map((entry) => (
                  <div key={entry.id} className="mt-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={entry.preview.src}
                        alt={entry.preview.alt}
                        className="h-10 w-10 rounded-md border border-border/60 bg-white/80 object-contain p-1"
                        draggable={false}
                      />
                      <h3 className="handwritten text-4xl text-foreground">{entry.company}</h3>
                    </div>
                    <p className="mt-1 text-sm text-foreground/85">{entry.role}</p>
                    <p className="text-xs font-mono uppercase tracking-[0.16em] text-foreground/80">{entry.period}</p>

                    <p className="mt-4 text-sm leading-6 text-foreground/80">{entry.overview}</p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">
                          Key Contributions
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                          {entry.contributions.map((point) => (
                            <li key={point}>- {point}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">
                          Key Takeaways
                        </p>
                        <ul className="mt-2 space-y-1.5 text-sm text-foreground/80">
                          {entry.takeaways.map((point) => (
                            <li key={point}>- {point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5">
                      <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/90">Tech Stack</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {entry.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-border/60 bg-paper px-2.5 py-1 text-[11px] text-foreground/82"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 rounded-md border border-primary/25 bg-primary/8 px-3 py-2">
                      <p className="text-sm text-foreground/85">
                        <span className="font-medium">Folder Tagline:</span> {entry.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
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
      className="scroll-mt-2 border-t border-border/60 px-6 py-12 sm:px-10 sm:py-14"
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
    <SectionShell id="skills" title="Skills" className="pt-6 sm:pt-8">
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
