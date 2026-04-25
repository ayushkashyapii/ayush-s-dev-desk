import { Draggable } from "./Draggable";
import { CutoutImage } from "./CutoutImage";
import ticket from "@/assets/desk/ticket.webp";

export function Ticket() {
  return (
    <Draggable initial={{ x: 555, y: 96 }} rotate={1.4} className="w-[445px]" zIndex={14}>
      <div className="block">
        <CutoutImage
          src={ticket}
          alt="CODE x CRAFT — Dev Tour ticket"
          className="w-full h-auto pointer-events-none desk-image drop-shadow-[0_6px_14px_rgba(60,40,20,0.14)]"
          draggable={false}
        />
      </div>
    </Draggable>
  );
}
