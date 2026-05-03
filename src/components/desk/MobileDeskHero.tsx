import { CenterIdentity } from "@/components/desk/CenterIdentity";
import { EdgeMattedImage } from "@/components/desk/CutoutImage";
import tornPaperImg from "@/assets/desk/tornpaper.png";
import tokyoImg from "@/assets/desk/tokyo.jpg";
import musicImg from "@/assets/desk/music.png";
import plantImg from "@/assets/desk/plant.webp";

function TokyoPolaroidAbove({ className }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none relative shrink-0 ${className ?? ""}`}
      style={{
        width: 34,
        transform: "rotate(-8deg)",
        boxShadow:
          "0 3px 10px rgba(0,0,0,0.14), 0 1px 0 oklch(0 0 0 / 0.04), inset 0 0 0 1px oklch(0.9 0.01 85)",
      }}
    >
      <span
        className="absolute -top-px left-1/2 h-1 w-3.5 -translate-x-1/2 rotate-[-3deg] rounded-[1px]"
        style={{
          background: "oklch(0.93 0.02 82 / 0.82)",
          border: "1px solid oklch(0.78 0.03 80 / 0.45)",
        }}
        aria-hidden
      />
      <div className="rounded-[2px] bg-[oklch(0.99_0.005_90)] px-0.5 pt-0.5 pb-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-[1px]">
          <img
            src={tokyoImg}
            alt=""
            className="h-full w-full object-cover desk-image-soft"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Narrow-viewport hero: name + plant, Tokyo & music floated above the title.
 */
export function MobileDeskHero() {
  return (
    <div className="relative w-full overflow-x-hidden overflow-y-visible pb-4 pt-1">
      <div className="relative z-[5] mx-auto w-full max-w-lg px-3 pt-4">
        <div className="relative mx-auto max-w-sm">
          {/* Tokyo & music — above the name, different sizes & tilts */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[32] flex items-start justify-between px-1 sm:px-3">
            <TokyoPolaroidAbove className="translate-x-1 translate-y-1" />
            <img
              src={musicImg}
              alt=""
              role="presentation"
              className="h-auto w-[62px] shrink-0 translate-y-0.5 -rotate-[11deg] drop-shadow-[0_3px_8px_rgba(0,0,0,0.12)] desk-image-soft"
              draggable={false}
            />
          </div>

          <div className="relative z-[28] mx-auto flex max-w-sm flex-col items-center pt-11">
            <CenterIdentity
              layout="stacked"
              compact
              titleEnd={
                <span className="isolate">
                  <EdgeMattedImage
                    src={plantImg}
                    alt=""
                    threshold={40}
                    feather={22}
                    className="pointer-events-none h-[2.85rem] w-auto max-w-[4.25rem] object-contain object-bottom mix-blend-multiply contrast-[1.02] drop-shadow-[0_2px_6px_rgba(40,35,30,0.14)]"
                    draggable={false}
                  />
                </span>
              }
            />
          </div>
        </div>
      </div>

      {/* <div className="pointer-events-none relative z-[25] mx-auto mt-4 w-[min(92vw,480px)] px-2">
        <img src={tornPaperImg} alt="" className="h-auto w-full opacity-95" draggable={false} />
        <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-2 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/85 sm:text-[12px]">
          I think, then I build
        </p>
      </div> */}
    </div>
  );
}
