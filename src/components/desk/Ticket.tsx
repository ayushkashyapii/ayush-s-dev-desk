import { Draggable } from "./Draggable";
import ticket from "@/assets/desk/ticket.webp";

export function Ticket() {
  return (
    <Draggable initial={{ x: 440, y: 110 }} rotate={5} className="w-[280px]" hover="lift">
      <a
        href="https://github.com/ayushkashyap"
        target="_blank"
        rel="noreferrer"
        className="block"
        aria-label="Ticket — open GitHub"
      >
        <img
          src={ticket}
          alt="CODE x CRAFT — Dev Tour ticket"
          className="w-full h-auto pointer-events-none drop-shadow-[0_8px_18px_rgba(60,40,20,0.18)]"
          draggable={false}
        />
      </a>
    </Draggable>
  );
}
