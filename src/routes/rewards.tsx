import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/rewards")({
  head: () => ({
    meta: [
      { title: "點數換購｜KAKO KUKI" },
      { name: "description", content: "使用 KAKO KUKI 會員點數，換購限定幸運籤餅與典藏禮盒。" },
      { property: "og:title", content: "點數換購｜KAKO KUKI" },
      { property: "og:description", content: "使用會員點數換購限定幸運籤餅與典藏禮盒。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RewardsPage,
});

const memberPoints = 1280;

const rewards = [
  {
    id: "reward-1",
    name: "金焰烤雞・單入籤餅",
    points: 300,
    note: "單入幸運籤餅 × 1，內附聖誕籤詩",
  },
  {
    id: "reward-2",
    name: "暖韻可可・雙入組",
    points: 600,
    note: "單入幸運籤餅 × 2，附典藏紙袋",
  },
  {
    id: "reward-3",
    name: "聖誕典藏・六入禮盒",
    points: 1200,
    note: "幸運籤餅 × 6，附禮盒外包裝",
  },
];

function RewardsPage() {
  const [added, setAdded] = useState<string[]>([]);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-20 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">點數換購</h1>
        <p className="mt-5 text-center text-sm tracking-[0.15em] text-muted-foreground">
          目前可用點數　
          <span className="font-sans text-base text-foreground">
            {memberPoints.toLocaleString("en-US")}
          </span>
          　點
        </p>

        <div className="mt-14 grid gap-10 border-t border-gold-soft pt-14 sm:grid-cols-2 lg:grid-cols-3">
          {rewards.map((r) => {
            const isAdded = added.includes(r.id);
            const affordable = memberPoints >= r.points;
            return (
              <article key={r.id} className="flex flex-col">
                <Placeholder label="換購商品圖" className="aspect-square w-full" />
                <h2 className="mt-6 text-center text-lg tracking-[0.12em]">{r.name}</h2>
                <p className="mt-2 text-center text-xs tracking-[0.12em] text-muted-foreground">
                  {r.note}
                </p>
                <p className="mt-4 text-center text-sm tracking-[0.15em] text-primary">
                  <span className="font-sans text-base">{r.points.toLocaleString("en-US")}</span>
                  　點可換購
                </p>
                <button
                  type="button"
                  disabled={!affordable || isAdded}
                  onClick={() => setAdded((prev) => [...prev, r.id])}
                  className="mt-6 border border-gold px-8 py-3.5 text-sm tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
                >
                  {isAdded ? "已加入購物車" : affordable ? "點數換購" : "點數不足"}
                </button>
                {isAdded ? (
                  <p className="mt-3 text-center text-xs tracking-[0.15em] text-muted-foreground">
                    已加入購物車，
                    <Link to="/cart" className="border-b border-gold text-primary">
                      前往結帳
                    </Link>
                  </p>
                ) : null}
              </article>
            );
          })}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
