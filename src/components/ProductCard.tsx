import { Link } from "@tanstack/react-router";
import { formatPrice, type Product } from "@/data/products";
import { Placeholder } from "@/components/Placeholder";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group block">
      <Placeholder label="商品圖" className="aspect-square" />
      <div className="mt-5 text-center">
        <h3 className="text-lg leading-snug font-medium tracking-wide">{product.name}</h3>
        <p className="mt-2 text-sm tracking-[0.15em] text-muted-foreground">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
