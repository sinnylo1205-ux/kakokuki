import { createFileRoute } from "@tanstack/react-router";
import luxHero from "@/assets/lux-hero.jpg";
import luxGifting from "@/assets/lux-gifting.jpg";
import { products } from "@/data/products";
import { ProductCarousel } from "@/components/ProductCarousel";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAKO KUKI 典藏聖誕系列｜金箔燙印幸運籤餅禮盒" },
      {
        name: "description",
        content:
          "KAKO KUKI 典藏聖誕系列幸運籤餅，金箔燙印禮盒與手作工藝，六款單入與六入典藏提盒，獻上最典雅的節慶送禮之選。",
      },
      { property: "og:title", content: "KAKO KUKI 典藏聖誕系列" },
      {
        property: "og:description",
        content: "金箔燙印禮盒的幸運籤餅，單入 NT$210、六入典藏提盒 NT$1,320。",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <section className="relative">
        <img
          src={luxHero}
          alt="KAKO KUKI 典藏聖誕幸運籤餅禮盒"
          width={1920}
          height={1088}
          className="h-[62vh] w-full object-cover md:h-[76vh]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end pb-14 text-center md:pb-20">
          <p className="text-[0.7rem] tracking-[0.5em] text-primary-foreground/85">
            L I M I T E D&nbsp; C H R I S T M A S
          </p>
          <p className="mt-4 max-w-2xl px-8 text-2xl leading-relaxed font-light tracking-[0.2em] text-primary-foreground md:text-4xl">
            以金箔封存的節慶祝福
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-[1400px] px-6 md:px-10">
        <header className="py-16 text-center md:py-24">
          <span className="mx-auto block h-px w-16 bg-gold" />
          <h1 className="mt-8 text-2xl leading-relaxed font-medium tracking-[0.22em] sm:text-3xl md:text-4xl">
            主打系列 — 聖誕跳跳做什麼
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-loose tracking-[0.1em] text-muted-foreground">
            六款節慶籤詩，收於燙金禮盒之中。每一塊皆為手工塑形、慢火烘焙，
            適合作為年末致謝與私人饋贈之禮。
          </p>
        </header>

        <ProductCarousel title="幸運籤餅" subtitle="S I G N A T U R E" products={products} />

        <div className="mt-24">
          <ProductCarousel
            title="送禮典藏"
            subtitle="G I F T I N G"
            products={products}
            variant="box"
          />
        </div>

        <section className="mt-28 grid items-center gap-10 border-t border-gold-soft pt-16 md:grid-cols-2 md:gap-16">
          <img
            src={luxGifting}
            alt="典雅送禮情境"
            width={1440}
            height={1088}
            loading="lazy"
            className="w-full border border-gold-soft object-cover"
          />
          <div>
            <p className="text-[0.7rem] tracking-[0.45em] text-muted-foreground">
              T H E&nbsp; A R T&nbsp; O F&nbsp; G I F T I N G
            </p>
            <h2 className="mt-6 text-2xl leading-relaxed font-medium tracking-[0.15em] md:text-3xl">
              致贈之禮，始於細節
            </h2>
            <p className="mt-6 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
              從燙金紋樣、綢帶結法到提盒的手感，皆以珠寶級包裝標準製作。
              每一份禮盒皆附贈手寫祝福卡，讓心意在拆封的瞬間完整呈現。
            </p>
            <p className="mt-4 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
              企業採購與客製燙印服務，歡迎透過禮賓專線洽詢。
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
