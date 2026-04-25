import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggableProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
}

let topZ = 10;

export function Draggable({
  children,
  initial,
  rotate = 0,
  className,
}: DraggableProps) {
  const x = useMotionValue(initial.x);
  const y = useMotionValue(initial.y);
  const ref = useRef<HTMLDivElement>(null);
  const [z, setZ] = useState(10);

  const bringToFront = () => {
    topZ += 1;
    setZ(topZ);
  };

  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      dragElastic={0.015}
      dragTransition={{ power: 0.07, timeConstant: 280, bounceStiffness: 200, bounceDamping: 36 }}
      onPointerDown={bringToFront}
      style={{ x, y, rotate, zIndex: z, position: "absolute" }}
      whileDrag={{ scale: 1.003, cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 145, damping: 26 }}
      className={cn("select-none touch-none cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </motion.div>
  );
}
