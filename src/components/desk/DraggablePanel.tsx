import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggablePanelProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
  zIndexBase?: number;
  glow?: "primary" | "secondary" | "none";
}

let topZ = 10;

export function DraggablePanel({
  children,
  initial,
  rotate = 0,
  className,
  zIndexBase = 10,
  glow = "none",
}: DraggablePanelProps) {
  const x = useMotionValue(initial.x);
  const y = useMotionValue(initial.y);
  const ref = useRef<HTMLDivElement>(null);
  const [z, setZ] = useState(zIndexBase);

  const bringToFront = () => {
    topZ += 1;
    setZ(topZ);
  };

  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      dragElastic={0.08}
      dragTransition={{ power: 0.18, timeConstant: 180, bounceStiffness: 320, bounceDamping: 28 }}
      onPointerDown={bringToFront}
      style={{ x, y, rotate, zIndex: z, position: "absolute" }}
      whileDrag={{ scale: 1.02, cursor: "grabbing" }}
      whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={cn(
        "rounded-2xl select-none touch-none",
        glow === "primary" && "glow-primary",
        glow === "secondary" && "glow-secondary",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function PanelHeader({ title, dot }: { title: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border/60">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.22_25)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.16_85)]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.16_150)]" />
      </div>
      <div className="flex-1 text-center text-xs font-mono text-muted-foreground tracking-wide">
        {dot && <span className="mr-2 text-secondary">●</span>}
        {title}
      </div>
      <div className="w-10" />
    </div>
  );
}
