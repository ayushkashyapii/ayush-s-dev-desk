import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggableProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
  zIndex?: number;
}

export function Draggable({
  children,
  initial,
  rotate = 0,
  className,
  zIndex = 10,
}: DraggableProps) {
  return (
    <motion.div
      style={{ left: initial.x, top: initial.y, rotate, zIndex, position: "absolute" }}
      className={cn("select-none", className)}
    >
      {children}
    </motion.div>
  );
}
