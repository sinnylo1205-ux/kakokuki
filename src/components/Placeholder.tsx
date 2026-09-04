import { cn } from "@/lib/utils";

/** Wireframe 佔位框：暫時取代所有圖片 */
export function Placeholder({
  label,
  className,
  sublabel,
}: {
  label: string;
  sublabel?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 border border-dashed border-foreground/30 bg-secondary/60 text-center",
        className,
      )}
      aria-label={label}
    >
      <span className="px-4 text-sm tracking-[0.3em] text-foreground/60">{label}</span>
      {sublabel ? (
        <span className="px-4 text-xs tracking-[0.2em] text-muted-foreground">{sublabel}</span>
      ) : null}
    </div>
  );
}
