import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  zoom?: number;
  lensSize?: number;
  className?: string;
};

export function ImageMagnifier({ src, alt, zoom = 2.5, lensSize = 220, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 0, h: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setSize({ w: rect.width, h: rect.height });
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-secondary ${className}`}
      onMouseEnter={onMove}
      onMouseMove={onMove}
      onMouseLeave={() => setActive(false)}
      onMouseOver={() => setActive(true)}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {active && size.w > 0 && (
        <div
          aria-hidden
          className="pointer-events-none absolute hidden rounded-full border border-foreground/10 shadow-[0_8px_30px_rgba(0,0,0,0.18)] sm:block"
          style={{
            width: lensSize,
            height: lensSize,
            left: pos.x - lensSize / 2,
            top: pos.y - lensSize / 2,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${size.w * zoom}px ${size.h * zoom}px`,
            backgroundPosition: `${-(pos.x * zoom - lensSize / 2)}px ${-(pos.y * zoom - lensSize / 2)}px`,
          }}
        />
      )}
    </div>
  );
}
