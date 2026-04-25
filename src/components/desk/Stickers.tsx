import { Draggable } from "./Draggable";
import flower from "@/assets/desk/sticker-flower.webp";
import folder from "@/assets/desk/sticker-folder.webp";
import laptop from "@/assets/desk/sticker-laptop.webp";
import books from "@/assets/desk/sticker-books.webp";
import { CutoutImage } from "./CutoutImage";

const STICKERS = [
  { src: flower, alt: "flower sticker", x: 520, y: 250, r: -8, w: 80 },
  { src: folder, alt: "folder sticker", x: 610, y: 298, r: 6, w: 95 },
  { src: laptop, alt: "laptop sticker", x: 700, y: 246, r: -4, w: 90 },
  { src: books,  alt: "books sticker",  x: 470, y: 315, r: 10, w: 78 },
];

export function Stickers() {
  return (
    <>
      {STICKERS.map((s) => (
        <Draggable
          key={s.alt}
          initial={{ x: s.x, y: s.y }}
          rotate={s.r}
          className="pointer-events-auto"
        >
          <CutoutImage
            src={s.src}
            alt={s.alt}
            style={{ width: s.w }}
            className="h-auto pointer-events-none desk-image-soft drop-shadow-[0_3px_5px_rgba(0,0,0,0.1)]"
            draggable={false}
          />
        </Draggable>
      ))}
    </>
  );
}
