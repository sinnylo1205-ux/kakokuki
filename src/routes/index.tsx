import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAKO KUKI 幸運籤餅｜典藏禮盒官方網站" },
      {
        name: "description",
        content: "KAKO KUKI 幸運籤餅官方網站，經典款與節慶款典藏禮盒、企業客製化服務與會員專屬權益。",
      },
      { property: "og:title", content: "KAKO KUKI 幸運籤餅" },
      { property: "og:description", content: "經典款與節慶款典藏禮盒、企業客製化與會員權益。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* 區塊一：HERO */}
      <Placeholder label="HERO" className="h-[52vh] w-full md:h-[64vh]" />

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* 區塊二 */}
        <section className="pt-16 md:pt-24">
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Link to="/collection" className="block">
              <Placeholder label="經典款" sublabel="方形商品圖" className="aspect-square" />
            </Link>
            <Link to="/collection" className="block">
              <Placeholder label="聖誕款" sublabel="方形商品圖" className="aspect-square" />
            </Link>
          </div>
        </section>

        {/* 區塊三 */}
        <section className="pt-20 pb-24 md:pt-28">
          <Placeholder label="BANNER 區塊三" className="h-40 w-full md:h-56" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link to="/collection" className="block">
              <Placeholder label="經典款式" sublabel="長方形商品圖" className="aspect-[3/4]" />
            </Link>
            <Link to="/collection" className="block">
              <Placeholder label="節慶款式" sublabel="長方形商品圖" className="aspect-[3/4]" />
            </Link>
            <Link to="/collection" className="block">
              <Placeholder label="IP 聯名" sublabel="長方形商品圖" className="aspect-[3/4]" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
