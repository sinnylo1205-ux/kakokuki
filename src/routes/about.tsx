import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import set6 from "@/assets/set6.png.asset.json";

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
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">品牌故事</h1>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          KAKO KUKI 相信每個節日都值得一個小小的儀式。我們把祝福寫進籤詩，藏進一塊剛好一口的幸運籤餅裡，
          讓拆開的那一秒成為整天最期待的事。
        </p>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
          聖誕系列由品牌角色「聖誕跳跳」領軍——她會吃烤雞、拆禮物、佈置聖誕樹、捧著熱可可、寫聖誕卡片，
          還會戴上爸爸買的麋鹿髮箍。六款設計是六種過節的方式，你可以挑一款，也可以整組收齊。
        </p>
        <img
          src={set6.url}
          alt="KAKO KUKI 聖誕系列六款幸運籤餅"
          className="mt-12 w-full object-cover"
          loading="lazy"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
