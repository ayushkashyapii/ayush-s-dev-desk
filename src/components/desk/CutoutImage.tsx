import { useEffect, useState, type CSSProperties } from "react";

interface CutoutImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
  draggable?: boolean;
}

function stripCheckerboard(inputSrc: string): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(inputSrc);
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max - min;
        const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

        // Remove high-luminance neutral grays (common checkerboard export artifacts).
        if (luminance > 172 && saturation < 22) {
          data[i + 3] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = () => resolve(inputSrc);
    img.src = inputSrc;
  });
}

export function CutoutImage({
  src,
  alt,
  className,
  style,
  draggable = false,
}: CutoutImageProps) {
  const [processedSrc, setProcessedSrc] = useState(src);

  useEffect(() => {
    let alive = true;
    setProcessedSrc(src);

    stripCheckerboard(src).then((cleanSrc) => {
      if (alive) setProcessedSrc(cleanSrc);
    });

    return () => {
      alive = false;
    };
  }, [src]);

  return (
    <img
      src={processedSrc}
      alt={alt}
      className={className}
      style={style}
      draggable={draggable}
    />
  );
}
