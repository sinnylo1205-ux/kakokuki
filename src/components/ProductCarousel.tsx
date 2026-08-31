import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

type Variant = "plain" | "box";

export function ProductCarousel({
  title,
  subtitle,
  products,
  variant = "plain",
}: {
  title: string;
  subtitle?: string;
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
    <section className="border-t border-gold-soft pt-10">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-2xl font-medium tracking-[0.15em] md:text-3xl">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-xs tracking-[0.3em] text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            aria-label="上一頁"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            className="grid h-11 w-11 place-items-center border border-gold text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-25"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="下一頁"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            className="grid h-11 w-11 place-items-center border border-gold text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-25"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((p) => (
          <Link
            key={p.slug}
            to="/product/$slug"
            params={{ slug: p.slug }}
            className="group w-[calc((100%-1.5rem)/2)] shrink-0 snap-start sm:w-[calc((100%-3rem)/3)] lg:w-[calc((100%-4.5rem)/4)]"
          >
            <div className="aspect-square overflow-hidden border border-gold-soft bg-card">
              <img
                src={variant === "box" ? (p.boxImage ?? p.image) : p.image}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
              />
            </div>
            <div className="mt-5 text-center">
              <h3 className="text-lg leading-snug font-medium tracking-wide">{p.name}</h3>
              <p className="mt-2 text-sm tracking-[0.15em] text-muted-foreground">
                {formatPrice(p.price)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
