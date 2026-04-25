import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
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
  const [z, setZ] = useState(10);
  const [scale, setScale] = useState(1);
  const scaleRef = useRef(1);
  const resizingRef = useRef(false);
  const startRef = useRef({ x: 0, y: 0, scale: 1 });

  const bringToFront = () => {
    topZ += 1;
    setZ(topZ);
  };

  const startResize = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    resizingRef.current = true;
    startRef.current = { x: e.clientX, y: e.clientY, scale: scaleRef.current };
    bringToFront();
  };

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!resizingRef.current) return;
      const dx = e.clientX - startRef.current.x;
      const nextScale = Math.max(0.55, Math.min(2.1, startRef.current.scale + dx / 220));
      scaleRef.current = nextScale;
      setScale(nextScale);
    };

    const onUp = () => {
      resizingRef.current = false;
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.015}
      dragTransition={{ power: 0.07, timeConstant: 280, bounceStiffness: 200, bounceDamping: 36 }}
      onPointerDown={bringToFront}
      style={{ x, y, rotate, zIndex: z, position: "absolute", scale }}
      whileDrag={{ scale: scale * 1.003, cursor: "grabbing" }}
      transition={{ type: "spring", stiffness: 145, damping: 26 }}
      className={cn("select-none touch-none cursor-grab active:cursor-grabbing", className)}
    >
      {children}
      <button
        type="button"
        aria-label="Resize element"
        onPointerDown={startResize}
        className="absolute -bottom-2 -right-2 h-4 w-4 rounded-sm border border-foreground/35 bg-paper/90"
        style={{ boxShadow: "var(--shadow-paper)", cursor: "nwse-resize" }}
      />
    </motion.div>
  );
}
