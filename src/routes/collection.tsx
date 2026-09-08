import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductCarousel } from "@/components/ProductCarousel";
import { products } from "@/data/products";
import { useCmsPage } from "@/lib/cms";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "幸運籤餅全系列｜KAKO KUKI" },
      { name: "description", content: "KAKO KUKI 幸運籤餅全系列，單入與六入典藏禮盒一次瀏覽。" },
      { property: "og:title", content: "幸運籤餅全系列｜KAKO KUKI" },
      { property: "og:description", content: "單入與六入典藏禮盒一次瀏覽。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const t = useCmsPage("collection");

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">{t("head.title")}</h1>
        <div className="mt-14">
          <ProductCarousel title={t("rows.row1")} products={products} namePrefix="classic" />
        </div>
        <div className="mt-20">
          <ProductCarousel title={t("rows.row2")} products={products} variant="box" />
        </div>
        <div className="mt-20">
          <ProductCarousel title={t("rows.row3")} products={products} namePrefix="ip" />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
