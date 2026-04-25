import { Draggable } from "./Draggable";
import lanyard from "@/assets/desk/lanyard-badge.webp";

export function LanyardBadge() {
  return (
    <Draggable initial={{ x: 80, y: 40 }} rotate={-3} className="w-[180px]" hover="float" swing>
      <img
        src={lanyard}
        alt="Ayush Dev — Software Engineer ID badge"
        className="w-full h-auto pointer-events-none"
        draggable={false}
      />
    </Draggable>
  );
}
