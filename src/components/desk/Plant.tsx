import plantImg from "@/assets/desk/plant.webp";
import vaseImg from "@/assets/desk/vase-flower.webp";
import leafImg from "@/assets/desk/leaf.webp";
import { Draggable } from "./Draggable";

export function Plant() {
  return (
    <Draggable initial={{ x: 320, y: 90 }} rotate={-2} className="w-[170px]" hover="float">
      <img src={plantImg} alt="Monstera plant" className="w-full h-auto pointer-events-none" draggable={false} />
    </Draggable>
  );
}

export function Vase() {
  return (
    <Draggable initial={{ x: 510, y: 380 }} rotate={3} className="w-[120px]" hover="float">
      <img src={vaseImg} alt="Vase with pink flower" className="w-full h-auto pointer-events-none" draggable={false} />
    </Draggable>
  );
}

export function Leaf({ x, y, rotate, size = 90 }: { x: number; y: number; rotate: number; size?: number }) {
  return (
    <Draggable initial={{ x, y }} rotate={rotate} className="pointer-events-auto" hover="float" swing>
      <img
        src={leafImg}
        alt=""
        style={{ width: size }}
        className="h-auto pointer-events-none opacity-95"
        draggable={false}
      />
    </Draggable>
  );
}
