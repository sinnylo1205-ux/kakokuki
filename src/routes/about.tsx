import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "品牌故事｜KAKO KUKI" },
      {
        name: "description",
        content: "KAKO KUKI 用一塊幸運籤餅收藏節日裡的小小願望，聖誕跳跳陪你把心情吃進嘴裡。",
      },
      { property: "og:title", content: "品牌故事｜KAKO KUKI" },
      {
        property: "og:description",
        content: "KAKO KUKI 用一塊幸運籤餅收藏節日裡的小小願望。",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-10 pb-16 md:px-10">
        <h1 className="text-4xl font-medium tracking-[0.18em] sm:text-5xl">品牌故事</h1>
        <p className="mt-8 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
          KAKO KUKI 相信每個節日都值得一個小小的儀式。我們把祝福寫進籤詩，藏進一塊剛好一口的幸運籤餅裡，
          讓拆開的那一秒成為整天最期待的事。
        </p>
        <p className="mt-5 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
          我們將以幸運籤餅作為時尚、潮流、設計的載體，拓展幸運籤餅的創作邊界，
          你可以在這裡找到最有質感、口味最佳的幸運籤餅。
        </p>
        <Placeholder label="品牌形象圖" className="mt-12 h-72 w-full" />
      </main>
      <SiteFooter />
    </div>
  );
}
