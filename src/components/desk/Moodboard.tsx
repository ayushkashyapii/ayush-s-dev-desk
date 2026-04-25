import { Draggable } from "./Draggable";
import polaroid1 from "@/assets/desk/Polaroid.png";
import polaroid2 from "@/assets/desk/Polaroid2.jpg";
import polaroid3 from "@/assets/desk/Polaroid3.jpg";
import barca from "@/assets/desk/barca.png";
import { CutoutImage } from "./CutoutImage";

const POLAROIDS = [
  { src: polaroid1, alt: "polaroid image 1", x: 6, y: 14, r: -5, z: 4, w: 150 },
  { src: polaroid2, alt: "polaroid image 2", x: 138, y: 14, r: 5, z: 5 },
  { src: polaroid3, alt: "polaroid image 3", x: 56, y: 150, r: 7, z: 3 },
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
              width: p.w ?? 130,
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

        {/* Barca accent */}
        <CutoutImage
          src={barca}
          alt="Barcelona accent"
          className="absolute pointer-events-none"
          style={{ width: 58, left: 116, top: 114, transform: "rotate(-8deg)", zIndex: 7 }}
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
