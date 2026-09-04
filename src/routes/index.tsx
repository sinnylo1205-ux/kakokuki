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

      <SiteFooter />
    </div>
  );
}
