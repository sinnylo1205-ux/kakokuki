import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "企業客製化專區｜KAKO KUKI" },
      { name: "description", content: "KAKO KUKI 企業禮贈品客製化服務，含燙印、包裝與大量訂製。" },
      { property: "og:title", content: "企業客製化專區｜KAKO KUKI" },
      { property: "og:description", content: "企業禮贈品客製化服務，含燙印、包裝與大量訂製。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomPage,
});

function CustomPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">企業客製化專區</h1>
        <Placeholder label="BANNER" sublabel="企業客製化橫幅" className="mt-10 h-56 w-full" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Placeholder label="客製包裝" className="aspect-[3/4]" />
          <Placeholder label="燙印服務" className="aspect-[3/4]" />
          <Placeholder label="大量訂製" className="aspect-[3/4]" />
        </div>
        <p className="mt-12 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
          企業採購與客製燙印服務，歡迎透過禮賓專線洽詢。內容待補。
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
