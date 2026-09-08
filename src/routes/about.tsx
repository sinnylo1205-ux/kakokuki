import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { CmsImage } from "@/components/CmsImage";
import { useCmsPage } from "@/lib/cms";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "品牌故事｜KAKO KUKI" },
      {
        name: "description",
        content: "KAKO KUKI 把餅身當成畫布，與插畫、水墨、立體造型創作者合作，讓作品走進日常贈禮。",
      },
      { property: "og:title", content: "品牌故事｜KAKO KUKI" },
      {
        property: "og:description",
        content: "KAKO KUKI 把餅身當成畫布，讓作品走進日常贈禮。",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useCmsPage("about");

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-10 pb-20 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-medium tracking-[0.18em] sm:text-5xl">{t("intro.title")}</h1>
          <p className="mt-8 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
            {t("intro.p1")}
          </p>
          <p className="mt-5 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
            {t("intro.p2")}
          </p>
        </div>

        {/* 品牌影片版位：籤餅落下旋轉、表面切換不同作品 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">{t("video.title")}</h2>
          <p className="mx-auto mt-5 max-w-[620px] text-center text-xs leading-loose tracking-[0.16em] text-muted-foreground">
            {t("video.note")}
          </p>

          <div className="mt-12 grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-3">
              <CmsImage
                id="about.video.cover"
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
            <CmsImage id="about.video.image1" label="形象圖一" className="aspect-[4/5] w-full" />
            <CmsImage id="about.video.image2" label="形象圖二" className="aspect-[4/5] w-full" />
            <CmsImage id="about.video.image3" label="形象圖三" className="aspect-[4/5] w-full" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
