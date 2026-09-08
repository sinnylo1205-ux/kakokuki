import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";
import { useCmsPage } from "@/lib/cms";

export const Route = createFileRoute("/art")({
  head: () => ({
    meta: [
      { title: `${t("head.title")}｜KAKO KUKI 藝術專區` },
      {
        name: "description",
        content:
          "KAKO KUKI 藝術專區：合作藝術家介紹、創作經歷與作品，以及籤餅與藝術結合的合作故事。",
      },
      { property: "og:title", content: `${t("head.title")}｜KAKO KUKI` },
      { property: "og:description", content: "合作藝術家介紹、作品與合作故事。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ArtPage,
});

const artists = [
  { name: "藝術家一（待補）", field: "插畫／版畫" },
  { name: "藝術家二（待補）", field: "水墨" },
  { name: "藝術家三（待補）", field: "立體造型" },
];

function ArtPage() {
  const t = useCmsPage("art");
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        <section className="pt-14 md:pt-20">
          <p className="text-center text-xs tracking-[0.35em] text-muted-foreground">
            名 稱 待 定 稿
          </p>
          <h1 className="mt-5 text-center text-3xl tracking-[0.16em] md:text-4xl">
            {t("head.title")}
          </h1>
          <p className="mx-auto mt-8 max-w-[680px] text-center text-sm leading-loose tracking-[0.1em] text-muted-foreground">
{t("head.intro")}
          </p>
        </section>

        <section className="mt-20 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">合作藝術家</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {artists.map((a) => (
              <article key={a.name}>
                <Placeholder label="藝術家照片" className="aspect-[3/4] w-full" />
                <h3 className="mt-6 text-xl tracking-[0.14em]">{a.name}</h3>
                <p className="mt-2 text-xs tracking-[0.2em] text-muted-foreground">{a.field}</p>
                <p className="mt-4 text-sm leading-loose tracking-[0.06em] text-muted-foreground">
                  經歷與創作介紹待補。
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <Placeholder label="作品一" className="aspect-square" />
                  <Placeholder label="作品二" className="aspect-square" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">合作故事</h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Placeholder label="合作情境圖" className="aspect-[4/3] w-full" />
            <div>
              <h3 className="text-xl tracking-[0.14em]">從一張圖到一枚籤餅</h3>
              <p className="mt-5 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
                合作緣起、創作過程與成品呈現的完整故事待補；此區可放藝術家訪談節錄、
                草稿與成品對照，以及企業聯名時的應用方式。
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
