import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DraggablePanel, PanelHeader } from "./DraggablePanel";

const RESPONSE = {
  name: "Ayush Kashyap",
  role: "Software Engineer",
  location: "India",
  skills: ["TypeScript", "Go", "C++", "Distributed Systems"],
  interests: ["Compilers", "Lofi", "Football", "Mechanical Keyboards"],
  experience_years: 4,
  status: "shipping",
};

export function CurlPanel() {
  const [shown, setShown] = useState(false);

  return (
    <DraggablePanel
      initial={{ x: 60, y: 460 }}
      rotate={1}
      className="glass-elevated w-[400px] overflow-hidden"
    >
      <PanelHeader title="api · playground" />
      <div className="p-4 font-mono text-[12.5px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-terminal-green">$</span>
          <code className="text-foreground/90">curl <span className="text-secondary">ayush.dev/about</span></code>
          <button
            onClick={() => setShown((s) => !s)}
            className="ml-auto text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-secondary/15 text-secondary border border-secondary/30 hover:bg-secondary/25 transition"
          >
            {shown ? "Reset" : "Run"}
          </button>
        </div>
        <div className="bg-[#0D1117] border border-border rounded-lg p-3 min-h-[180px] text-[12px] leading-relaxed">
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
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="whitespace-pre-wrap text-foreground/90"
              >
{`{
  "name": `}<span className="text-secondary">"{RESPONSE.name}"</span>{`,
  "role": `}<span className="text-secondary">"{RESPONSE.role}"</span>{`,
  "location": `}<span className="text-secondary">"{RESPONSE.location}"</span>{`,
  "skills": [`}{RESPONSE.skills.map((s, i) => (
    <span key={s}><span className="text-primary">"{s}"</span>{i < RESPONSE.skills.length - 1 && ", "}</span>
  ))}{`],
  "interests": [`}{RESPONSE.interests.map((s, i) => (
    <span key={s}><span className="text-primary">"{s}"</span>{i < RESPONSE.interests.length - 1 && ", "}</span>
  ))}{`],
  "experience_years": `}<span className="text-[oklch(0.78_0.18_85)]">{RESPONSE.experience_years}</span>{`,
  "status": `}<span className="text-terminal-green">"{RESPONSE.status}"</span>{`
}`}
              </motion.pre>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-2 text-[10px] text-muted-foreground/60">200 OK · application/json · 42ms</p>
      </div>
    </DraggablePanel>
  );
}
