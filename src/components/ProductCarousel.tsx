import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

type Variant = "plain" | "box";

export function ProductCarousel({
  title,
  products,
  variant = "plain",
}: {
  title: string;
  products: Product[];
  variant?: Variant;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
  }, []);

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <section className="border-t border-border pt-8">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <h2 className="min-w-0 truncate text-sm font-bold tracking-[0.2em] text-muted-foreground">
          {title}
        </h2>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            aria-label="上一頁"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            className="grid h-10 w-10 place-items-center border border-border transition-colors hover:bg-secondary disabled:opacity-25"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="下一頁"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            className="grid h-10 w-10 place-items-center border border-border transition-colors hover:bg-secondary disabled:opacity-25"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            to="/product/$slug"
            params={{ slug: p.slug }}
            className="group w-[calc((100%-1.25rem)/2)] shrink-0 snap-start sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
          >
            <div className="aspect-square overflow-hidden bg-secondary">
              <img
                src={variant === "box" ? (p.boxImage ?? p.image) : p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-bold tracking-tight">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{formatPrice(p.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
