import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DraggablePanel } from "./DraggablePanel";

const RESPONSE = {
  name: "Ayush Kashyap",
  role: "Software Engineer",
  location: "India",
  skills: ["TypeScript", "Go", "C++", "Distributed Systems"],
  interests: ["Compilers", "Lofi", "Football", "Mech Keyboards"],
  experience_years: 4,
  status: "shipping",
};

export function CurlPanel() {
  const [shown, setShown] = useState(false);

  return (
    <DraggablePanel
      initial={{ x: 60, y: 470 }}
      rotate={1.2}
      className="w-[360px]"
    >
      {/* Receipt-style printed paper */}
      <div
        className="relative bg-paper-warm rounded-sm overflow-hidden"
        style={{
          boxShadow: "var(--shadow-lift)",
          backgroundImage: "repeating-linear-gradient(transparent 0 26px, oklch(0.85 0.005 75 / 0.4) 26px 27px)",
        }}
      >
        {/* perforated top edge */}
        <div className="h-2 bg-paper-warm" style={{
          maskImage: "radial-gradient(circle 4px at 8px 0, transparent 98%, black 100%)",
          WebkitMaskImage: "radial-gradient(circle 4px at 8px 0, transparent 98%, black 100%)",
          maskSize: "16px 8px",
          WebkitMaskSize: "16px 8px",
        }} />
        <div className="px-5 pt-2 pb-5 font-mono text-[12.5px]">
          <div className="text-center border-b border-dashed border-border pb-2 mb-3">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">api · receipt</p>
            <p className="text-[10px] text-muted-foreground/70 mt-0.5">— ayush.dev/about —</p>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-terminal-green">$</span>
            <code className="text-foreground/90">curl ayush.dev/about</code>
            <button
              onClick={() => setShown((s) => !s)}
              className="ml-auto text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-primary/15 text-primary border border-primary/30 hover:bg-primary/25 transition"
            >
              {shown ? "Reset" : "Run"}
            </button>
          </div>
          <div className="min-h-[180px] text-[12px] leading-[1.65] text-foreground/85">
            <AnimatePresence mode="wait">
              {!shown ? (
                <motion.div
                  key="hint"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-muted-foreground/60 italic"
                >
                  // hit Run to send the request…
                </motion.div>
              ) : (
                <motion.pre
                  key="json"
                  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 24 }}
                  className="whitespace-pre-wrap"
                >
{`{
  "name": `}<span className="text-primary">"{RESPONSE.name}"</span>{`,
  "role": `}<span className="text-primary">"{RESPONSE.role}"</span>{`,
  "location": `}<span className="text-primary">"{RESPONSE.location}"</span>{`,
  "skills": [`}{RESPONSE.skills.map((s, i) => (
    <span key={s}><span className="text-foreground font-medium">"{s}"</span>{i < RESPONSE.skills.length - 1 && ", "}</span>
  ))}{`],
  "interests": [`}{RESPONSE.interests.map((s, i) => (
    <span key={s}><span className="text-foreground font-medium">"{s}"</span>{i < RESPONSE.interests.length - 1 && ", "}</span>
  ))}{`],
  "experience_years": `}<span className="text-[oklch(0.55_0.14_50)]">{RESPONSE.experience_years}</span>{`,
  "status": `}<span className="text-terminal-green">"{RESPONSE.status}"</span>{`
}`}
                </motion.pre>
              )}
            </AnimatePresence>
          </div>
          <div className="border-t border-dashed border-border mt-3 pt-2 text-center">
            <p className="text-[10px] text-muted-foreground/70">200 OK · application/json · 42ms</p>
            <p className="text-[10px] text-muted-foreground/50 mt-0.5">— thank you —</p>
          </div>
        </div>
        {/* perforated bottom edge */}
        <div className="h-2 bg-paper-warm" style={{
          maskImage: "radial-gradient(circle 4px at 8px 8px, transparent 98%, black 100%)",
          WebkitMaskImage: "radial-gradient(circle 4px at 8px 8px, transparent 98%, black 100%)",
          maskSize: "16px 8px",
          WebkitMaskSize: "16px 8px",
        }} />
      </div>
    </DraggablePanel>
  );
}
