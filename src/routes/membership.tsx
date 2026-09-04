import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "會員權益｜KAKO KUKI" },
      { name: "description", content: "KAKO KUKI 會員權益說明，含生日禮、新品優先購與專屬活動。" },
      { property: "og:title", content: "會員權益｜KAKO KUKI" },
      { property: "og:description", content: "會員權益說明，含生日禮、新品優先購與專屬活動。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MembershipPage,
});

function MembershipPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">會員權益</h1>
        <Placeholder label="BANNER" sublabel="會員權益橫幅" className="mt-10 h-56 w-full" />
        <ul className="mt-12 space-y-4 text-sm leading-loose tracking-[0.08em] text-muted-foreground">
          <li>生日月專屬禮遇</li>
          <li>新品優先預購</li>
          <li>會員專屬節慶活動</li>
        </ul>
      </main>
      <SiteFooter />
    </div>
  );
}
