import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggableProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
  zIndex?: number;
  hoverEffect?: boolean;
}

export function Draggable({
  children,
  initial,
  rotate = 0,
  className,
  zIndex = 10,
  hoverEffect = true,
}: DraggableProps) {
  return (
    <motion.div
      style={{ left: initial.x, top: initial.y, rotate, zIndex, position: "absolute" }}
      whileHover={hoverEffect ? { scale: 1.03, rotate: rotate + 1.8, y: -3 } : undefined}
      transition={hoverEffect ? { type: "spring", stiffness: 340, damping: 18 } : undefined}
      className={cn("select-none", className)}
    >
      {children}
    </motion.div>
  );
}
