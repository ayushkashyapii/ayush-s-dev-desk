import { Draggable } from "./Draggable";
import flower from "@/assets/desk/sticker-flower.webp";
import folder from "@/assets/desk/sticker-folder.webp";
import laptop from "@/assets/desk/sticker-laptop.webp";
import books from "@/assets/desk/sticker-books.webp";

const STICKERS = [
  { src: flower, alt: "flower sticker", x: 470, y: 230, r: -8, w: 80 },
  { src: folder, alt: "folder sticker", x: 560, y: 280, r: 6, w: 95 },
  { src: laptop, alt: "laptop sticker", x: 640, y: 220, r: -4, w: 90 },
  { src: books,  alt: "books sticker",  x: 420, y: 290, r: 10, w: 78 },
];

export function Stickers() {
  return (
    <>
      {STICKERS.map((s) => (
        <Draggable
          key={s.alt}
          initial={{ x: s.x, y: s.y }}
          rotate={s.r}
          hover="float"
          className="pointer-events-auto"
        >
          <img
            src={s.src}
            alt={s.alt}
            style={{ width: s.w }}
            className="h-auto pointer-events-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.12)]"
            draggable={false}
          />
        </Draggable>
      ))}
    </>
  );
}
