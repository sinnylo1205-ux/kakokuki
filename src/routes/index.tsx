import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.png.asset.json";
import { products } from "@/data/products";
import { ProductCard, PlaceholderCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAKO KUKI 聖誕系列｜聖誕跳跳做什麼 幸運籤餅" },
      {
        name: "description",
        content:
          "KAKO KUKI 聖誕系列幸運籤餅，六款單入與六入禮盒。烤雞、禮物、聖誕樹、熱可可、聖誕卡片、麋鹿髮箍，聖誕跳跳陪你過節。",
      },
      { property: "og:title", content: "KAKO KUKI 聖誕系列｜聖誕跳跳做什麼" },
      {
        property: "og:description",
        content: "六款聖誕幸運籤餅與六入禮盒，單入 NT$210、六入 NT$1,320。",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <section>
        <img src={hero.url} alt="KAKO KUKI 聖誕系列幸運籤餅" className="w-full object-cover" />
      </section>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="py-16 md:py-24">
          <p className="text-xs font-bold tracking-[0.35em] text-muted-foreground uppercase">
            Christmas Series
          </p>
          <h1 className="mt-4 text-4xl leading-[0.95] font-black tracking-tighter sm:text-6xl md:text-7xl">
            主打系列 — 聖誕跳跳做什麼
          </h1>
        </header>

        <section className="border-t border-border pt-10">
          <h2 className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
            裸裝情境
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-border pt-10">
          <h2 className="text-xs font-bold tracking-[0.25em] text-muted-foreground uppercase">
            盒裝
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((p) => (
              <PlaceholderCard key={p.slug} label={p.name} />
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
