import { Draggable } from "./Draggable";
import leaf from "@/assets/desk/leaf.webp";

const POLAROIDS = [
  // Use your custom Polaroid asset. Add more files later and swap src per slot.
  { src: "/assets/desk/Polaroid.png", alt: "polaroid image 1", x: 18, y: 24, r: -7, z: 4 },
  { src: "/assets/desk/Polaroid.png", alt: "polaroid image 2", x: 138, y: 14, r: 5, z: 5 },
  { src: "/assets/desk/Polaroid.png", alt: "polaroid image 3", x: 56, y: 150, r: 7, z: 3 },
  { src: "/assets/desk/Polaroid.png", alt: "polaroid image 4", x: 176, y: 156, r: -6, z: 6 },
];

export function Moodboard() {
  return (
    <Draggable initial={{ x: 870, y: 240 }} rotate={1} className="w-[350px]">
      {/* Cork board */}
      <div
        className="relative rounded-md p-4 pb-10"
        style={{
          width: 350,
          height: 350,
          background:
            "radial-gradient(circle at 30% 20%, oklch(0.72 0.08 65) 0%, oklch(0.6 0.09 60) 70%)",
          boxShadow: "var(--shadow-lift), inset 0 0 30px oklch(0 0 0 / 0.1)",
          backgroundImage:
            "radial-gradient(oklch(0.45 0.06 50 / 0.18) 1px, transparent 1.5px), radial-gradient(oklch(0.85 0.04 70 / 0.4) 1px, transparent 1.5px)",
          backgroundSize: "5px 5px, 8px 8px",
          backgroundPosition: "0 0, 2px 2px",
          backgroundColor: "oklch(0.68 0.08 60)",
        }}
      >
        {/* Polaroids */}
        {POLAROIDS.map((p) => (
          <div
            key={p.alt}
            className="absolute"
            style={{
              left: p.x,
              top: p.y,
              transform: `rotate(${p.r}deg)`,
              zIndex: p.z,
              width: 130,
              filter: "drop-shadow(0 6px 10px rgba(0,0,0,0.25))",
            }}
          >
            <img src={p.src} alt={p.alt} className="w-full h-auto pointer-events-none desk-image" draggable={false} />
            {/* tape */}
            <span
              className="absolute -top-1 left-1/2 -translate-x-1/2 rotate-[-6deg]"
              style={{
                width: 40,
                height: 14,
                background: "oklch(0.92 0.02 80 / 0.7)",
                border: "1px solid oklch(0.75 0.03 80 / 0.4)",
              }}
            />
          </div>
        ))}

        {/* Leaf accents */}
        <img
          src={leaf}
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 60, left: 100, top: 110, transform: "rotate(-30deg)", zIndex: 7 }}
          draggable={false}
        />
        <img
          src={leaf}
          alt=""
          className="absolute pointer-events-none"
          style={{ width: 50, right: 10, top: 200, transform: "rotate(35deg)", zIndex: 7 }}
          draggable={false}
        />

        {/* handwritten label */}
        <p
          className="handwritten absolute right-4 bottom-2 text-2xl text-foreground/80"
          style={{ zIndex: 10 }}
        >
          capture moments
        </p>
      </div>
    </Draggable>
  );
}
