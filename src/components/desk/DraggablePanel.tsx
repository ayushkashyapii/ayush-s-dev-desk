import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggablePanelProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
  zIndexBase?: number;
}

let topZ = 10;

export function DraggablePanel({
  children,
  initial,
  rotate = 0,
  className,
  zIndexBase = 10,
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
      dragElastic={0.05}
      dragTransition={{ power: 0.12, timeConstant: 220, bounceStiffness: 260, bounceDamping: 30 }}
      onPointerDown={bringToFront}
      style={{ x, y, rotate, zIndex: z, position: "absolute" }}
      whileDrag={{ scale: 1.015, cursor: "grabbing" }}
      whileHover={{ y: -2 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={cn("rounded-xl select-none touch-none", className)}
    >
      {children}
    </motion.div>
  );
}

export function PanelHeader({ title, dot }: { title: string; dot?: boolean }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2 border-b border-border bg-[oklch(0.96_0.005_75)] rounded-t-xl">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.74_0.16_25)] border border-[oklch(0.6_0.16_25)]/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.14_85)] border border-[oklch(0.7_0.14_85)]/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.13_150)] border border-[oklch(0.6_0.13_150)]/30" />
      </div>
      <div className="flex-1 text-center text-[11px] font-mono text-muted-foreground tracking-wide">
        {dot && <span className="mr-1.5 text-primary">●</span>}
        {title}
      </div>
      <div className="w-10" />
    </div>
  );
}
