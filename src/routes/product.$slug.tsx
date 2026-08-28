import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products, formatPrice } from "@/data/products";
import { ImageMagnifier } from "@/components/ImageMagnifier";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "商品不存在｜KAKO KUKI" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name}｜KAKO KUKI 聖誕系列`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const others = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10">
        <Link to="/" className="inline-block">
          <img src={logo.url} alt="KAKO KUKI" className="h-5 w-auto sm:h-6" />
        </Link>
      </div>

      <main className="mx-auto max-w-[1400px] px-6 pb-10 md:px-10">
        <Link
          to="/"
          className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase transition-opacity hover:opacity-60"
        >
          ← 返回全系列
        </Link>

        <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ImageMagnifier
            src={product.image}
            alt={product.name}
            className="aspect-square w-full cursor-crosshair"
          />

          <div className="lg:pt-6">
            <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase">
              {product.kind === "set" ? "六入禮盒" : "單入"}
            </p>
            <h1 className="mt-3 text-3xl leading-tight font-black tracking-tighter sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base text-muted-foreground">{product.tagline}</p>
            <p className="mt-8 text-2xl font-bold tracking-tight">{formatPrice(product.price)}</p>

            <div className="mt-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase">購買組數</p>
              <div className="mt-3 flex items-center gap-6">
                <div className="flex items-center border border-border">
                  <button
                    type="button"
                    aria-label="減少數量"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-12 w-12 text-lg transition-colors hover:bg-secondary"
                  >
                    −
                  </button>
                  <span className="w-12 text-center text-sm font-bold">{qty}</span>
                  <button
                    type="button"
                    aria-label="增加數量"
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="h-12 w-12 text-lg transition-colors hover:bg-secondary"
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-muted-foreground">
                  小計 <span className="font-bold text-foreground">{formatPrice(product.price * qty)}</span>
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setAdded(true);
                  window.setTimeout(() => setAdded(false), 2000);
                }}
                className="mt-6 h-14 w-full bg-foreground text-sm font-bold tracking-[0.2em] text-background uppercase transition-opacity hover:opacity-85"
              >
                {added ? "已加入購物袋" : "加入購物袋"}
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                線上結帳功能即將開放，目前僅供選購預覽。
              </p>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase">商品說明</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="mt-8 border-t border-border pt-8">
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase">規格</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {product.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <section className="mt-28 border-t border-border pt-10">
          <h2 className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
            其他商品
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-4">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
