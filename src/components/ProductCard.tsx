import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <div className="aspect-square overflow-hidden border border-gold-soft bg-card">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-5 text-center">
        <h3 className="text-lg leading-snug font-medium tracking-wide">{product.name}</h3>
        <p className="mt-2 text-sm tracking-[0.15em] text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
