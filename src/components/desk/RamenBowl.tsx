import { useState } from "react";
import ramenImg from "@/assets/desk/ramen.png";
import { EdgeMattedImage } from "./CutoutImage";

export function RamenBowl() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: 150, height: 150 }}
    >
      {/* Anime Steam Lines with white border and black inline */}
      <div className="absolute top-[22px] left-1/2 -translate-x-1/2 w-[80px] h-[55px] pointer-events-none flex justify-around opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {/* Steam line 1 */}
        <svg viewBox="0 0 20 60" className="w-[20px] h-[55px] overflow-visible animate-steam-1" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}>
          {/* Thick White border */}
          <path
            d="M10,60 C3,45 17,30 10,15 C3,8 10,0 10,0"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* Thin Black inline */}
          <path
            d="M10,60 C3,45 17,30 10,15 C3,8 10,0 10,0"
            fill="none"
            stroke="#1c1c1c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Steam line 2 */}
        <svg viewBox="0 0 20 60" className="w-[20px] h-[55px] overflow-visible animate-steam-2" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}>
          {/* Thick White border */}
          <path
            d="M10,60 C17,47 3,33 10,20 C17,10 7,0 10,0"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* Thin Black inline */}
          <path
            d="M10,60 C17,47 3,33 10,20 C17,10 7,0 10,0"
            fill="none"
            stroke="#1c1c1c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>

        {/* Steam line 3 */}
        <svg viewBox="0 0 20 60" className="w-[20px] h-[55px] overflow-visible animate-steam-3" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}>
          {/* Thick White border */}
          <path
            d="M10,60 C5,40 15,25 10,15 C5,8 12,0 10,0"
            fill="none"
            stroke="#ffffff"
            strokeWidth="5.5"
            strokeLinecap="round"
          />
          {/* Thin Black inline */}
          <path
            d="M10,60 C5,40 15,25 10,15 C5,8 12,0 10,0"
            fill="none"
            stroke="#1c1c1c"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* The Ramen Bowl Image */}
      <div className={`w-full h-full transition-transform duration-300 ${isHovered ? "ramen-stir-active" : ""}`}>
        <EdgeMattedImage
          src={ramenImg}
          alt="Bowl of delicious ramen"
          threshold={20}
          feather={8}
          className="w-full h-full object-contain pointer-events-none"
          style={{ filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))" }}
          draggable={false}
        />
      </div>
    </div>
  );
}
