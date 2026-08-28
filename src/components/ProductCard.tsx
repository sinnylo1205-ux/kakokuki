import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold tracking-tight">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}

export function PlaceholderCard({ label }: { label: string }) {
  return (
    <div>
      <div className="flex aspect-square items-center justify-center border border-dashed border-border bg-secondary/40">
        <span className="px-4 text-center text-xs tracking-widest text-muted-foreground">
          盒裝照片待補
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-bold tracking-tight text-muted-foreground">{label}</h3>
        <p className="mt-1 text-sm text-muted-foreground/70">Coming soon</p>
      </div>
    </div>
  );
}
