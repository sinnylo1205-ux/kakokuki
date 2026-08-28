import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.png.asset.json";
import { products } from "@/data/products";
import { ProductCarousel } from "@/components/ProductCarousel";
import { SiteNav } from "@/components/SiteNav";
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
      <SiteNav />

      <section>
        <img src={hero.url} alt="KAKO KUKI 聖誕系列幸運籤餅" className="w-full object-cover" />
      </section>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="py-14 text-center md:py-20">
          <h1 className="text-xl leading-snug font-black tracking-tight sm:text-2xl md:text-3xl">
            主打系列 — 聖誕跳跳做什麼
          </h1>
        </header>

        <ProductCarousel title="幸運籤餅" products={products} />

        <div className="mt-20">
          <ProductCarousel title="盒裝" products={products} variant="box" />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
