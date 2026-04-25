import { Draggable } from "./Draggable";
import pixel from "@/assets/desk/pixel-display.webp";

export function PixelDisplay() {
  return (
    <Draggable initial={{ x: 760, y: 350 }} rotate={4} className="w-[110px]" hover="float">
      <img src={pixel} alt="Pixel LED display showing the letter A" className="w-full h-auto pointer-events-none" draggable={false} />
    </Draggable>
  );
}
