import { motion, useMotionValue } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DraggableProps {
  children: ReactNode;
  initial: { x: number; y: number };
  rotate?: number;
  className?: string;
  /** lift = card-like hover; float = subtle for stickers/objects */
  hover?: "lift" | "float" | "none";
  /** Optional swing on hover (lanyard, hanging items) */
  swing?: boolean;
}

let topZ = 10;

export function Draggable({
  children,
  initial,
  rotate = 0,
  className,
  hover = "lift",
  swing = false,
}: DraggableProps) {
  const x = useMotionValue(initial.x);
  const y = useMotionValue(initial.y);
  const ref = useRef<HTMLDivElement>(null);
  const [z, setZ] = useState(10);

  const bringToFront = () => {
    topZ += 1;
    setZ(topZ);
  };

  const hoverProps =
    hover === "lift"
      ? { y: -3, scale: 1.012, rotate: rotate }
      : hover === "float"
      ? { y: -2, scale: 1.04, rotate: swing ? rotate + 2 : rotate }
      : {};

  return (
    <motion.div
      ref={ref}
      drag
      dragMomentum={false}
      dragElastic={0.04}
      dragTransition={{ power: 0.1, timeConstant: 240, bounceStiffness: 240, bounceDamping: 32 }}
      onPointerDown={bringToFront}
      style={{ x, y, rotate, zIndex: z, position: "absolute" }}
      whileDrag={{ scale: 1.015, cursor: "grabbing" }}
      whileHover={hoverProps}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      className={cn("select-none touch-none cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </motion.div>
  );
}
