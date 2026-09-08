import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Placeholder } from "@/components/Placeholder";
import { brandStoryDraft } from "@/data/site-content";

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
      <main className="mx-auto max-w-[1400px] px-6 pt-10 pb-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-[0.18em] sm:text-5xl">品牌故事</h1>
          <p className="mt-8 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
            KAKO KUKI 相信一塊餅可以承載一件作品。我們把餅身當成畫布，邀請插畫、水墨、立體造型的創作者，
            把他們的語言印在最日常的甜點上；每一次合作都以正式授權與分潤進行，讓創作被使用、也被回饋。
          </p>
          <p className="mt-5 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
            也因為這樣的做法，我們常成為跨國品牌在台灣尋找禮品時的選擇，他們要的不只是好吃，
            而是一份能說出在地創作故事、細節與品質都有著我們的把控。從圖樣授權、籤文撰寫到封套設計，
            我們把每個環節做成可被驗證的流程，讓一份小小的贈禮，也能代表品牌的態度。
          </p>
        </div>

        {/* 06 品牌故事新文案（草稿，待你修改定稿） */}
        <section className="mx-auto mt-20 max-w-3xl border-t border-gold-soft pt-14">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">文 案 草 稿 待 定 稿</p>
          <h2 className="mt-5 text-2xl tracking-[0.16em] md:text-3xl">關於創作，與我們的選擇</h2>
          {brandStoryDraft.paragraphs.map((p) => (
            <p
              key={p.slice(0, 12)}
              className="mt-6 text-sm leading-loose tracking-[0.08em] text-muted-foreground"
            >
              {p}
            </p>
          ))}
        </section>

        {/* 07 品牌影片版位：籤餅落下旋轉、表面切換不同作品 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">品牌影片</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-center text-xs leading-loose tracking-[0.16em] text-muted-foreground">
            版 位 已 保 留 ・ 影 片 檔 待 提 供
          </p>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <Placeholder
                label="影片：籤餅落下旋轉、餅身切換不同作品（16:9）"
                className="aspect-video w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl tracking-[0.14em]">版型提案</h3>
              <ul className="mt-6 space-y-4 text-sm leading-loose tracking-[0.06em] text-muted-foreground">
                <li>提案一：此處 16:9 影片＋右側短文，靜音自動循環播放。</li>
                <li>提案二：影片改為滿版橫幅，文字疊在影片下緣。</li>
                <li>提案三：影片與下方三張形象圖並列，影片為主、圖為輔。</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Placeholder label="形象圖一" className="aspect-[4/5] w-full" />
            <Placeholder label="形象圖二" className="aspect-[4/5] w-full" />
            <Placeholder label="形象圖三" className="aspect-[4/5] w-full" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
