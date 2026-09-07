import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "會員中心｜KAKO KUKI" },
      { name: "description", content: "查看您的會員資料、點數累積與訂單物流狀態。" },
      { property: "og:title", content: "會員中心｜KAKO KUKI" },
      { property: "og:description", content: "會員資料、點數累積與訂單物流狀態。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccountPage,
});

const member = {
  name: "陳語柔",
  joinedAt: "2024 / 03 / 18",
  points: 1280,
};

const orders = [
  {
    id: "KK-20260821-0142",
    date: "2026 / 08 / 21",
    items: "聖誕典藏・六入禮盒 × 1",
    total: "NT$1,320",
    status: "已出貨",
    logistics: "黑貓宅急便｜運送中（8/22 預計送達）",
  },
  {
    id: "KK-20260709-0087",
    date: "2026 / 07 / 09",
    items: "金焰烤雞 × 2、暖韻可可 × 1",
    total: "NT$630",
    status: "已完成",
    logistics: "已於 7/11 完成配達",
  },
  {
    id: "KK-20260602-0031",
    date: "2026 / 06 / 02",
    items: "手書聖誕箋 × 4",
    total: "NT$840",
    status: "已取消",
    logistics: "訂單取消，款項已退回",
  },
];

function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10">
        <section className="border-b border-gold-soft pb-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center">
            <Placeholder label="大頭貼" className="h-28 w-28 shrink-0 rounded-full" />
            <div className="grid flex-1 gap-4 text-center sm:grid-cols-3 sm:text-left">
              <div>
                <p className="text-xs tracking-[0.3em] text-muted-foreground">會員名稱</p>
                <p className="mt-2 text-xl tracking-[0.12em]">{member.name}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] text-muted-foreground">加入日期</p>
                <p className="mt-2 text-xl tracking-[0.12em]">{member.joinedAt}</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] text-muted-foreground">目前點數</p>
                <Link
                  to="/collection"
                  className="mt-2 inline-block border-b border-gold text-xl tracking-[0.12em] text-primary transition-opacity hover:opacity-60"
                >
                  {member.points.toLocaleString("en-US")} 點・前往換購
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">訂單管理</h1>

          <div className="mt-10 hidden md:block">
            <table className="w-full text-sm tracking-[0.08em]">
              <thead>
                <tr className="border-b border-gold-soft text-xs tracking-[0.2em] text-muted-foreground">
                  <th className="py-4 text-left font-normal">訂單編號</th>
                  <th className="py-4 text-left font-normal">日期</th>
                  <th className="py-4 text-left font-normal">商品</th>
                  <th className="py-4 text-left font-normal">金額</th>
                  <th className="py-4 text-left font-normal">狀態</th>
                  <th className="py-4 text-left font-normal">物流</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.id} className="border-b border-border align-top">
                    <td className="py-5">{o.id}</td>
                    <td className="py-5 text-muted-foreground">{o.date}</td>
                    <td className="py-5">{o.items}</td>
                    <td className="py-5">{o.total}</td>
                    <td className="py-5">{o.status}</td>
                    <td className="py-5 text-muted-foreground">{o.logistics}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <ul className="mt-10 space-y-6 md:hidden">
            {orders.map((o) => (
              <li key={o.id} className="border border-gold-soft p-5 text-sm tracking-[0.08em]">
                <p className="tracking-[0.15em]">{o.id}</p>
                <p className="mt-2 text-xs text-muted-foreground">{o.date}</p>
                <p className="mt-4">{o.items}</p>
                <p className="mt-2">{o.total}・{o.status}</p>
                <p className="mt-2 text-xs text-muted-foreground">{o.logistics}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
