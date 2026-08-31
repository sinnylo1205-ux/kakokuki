import { useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  zoom?: number;
  className?: string;
};

export function ImageMagnifier({ src, alt, zoom = 1.5, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.min(100, Math.max(0, x)),
      y: Math.min(100, Math.max(0, y)),
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-secondary ${className}`}
      onMouseEnter={(e) => {
        onMove(e);
        setActive(true);
      }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        setActive(false);
        setOrigin({ x: 50, y: 50 });
      }}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-200 ease-out"
        style={{
          transform: active ? `scale(${zoom})` : "scale(1)",
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
      />
    </div>
  );
}
