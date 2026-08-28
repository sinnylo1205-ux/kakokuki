import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "常見問題與退換貨說明｜KAKO KUKI" },
      {
        name: "description",
        content: "KAKO KUKI 幸運籤餅的訂購、配送、保存與退換貨常見問題說明。",
      },
      { property: "og:title", content: "常見問題與退換貨說明｜KAKO KUKI" },
      { property: "og:description", content: "訂購、配送、保存與退換貨相關說明。" },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "幸運籤餅可以保存多久？",
    a: "建議於製造日起 60 天內食用完畢。請置於陰涼乾燥處，避免高溫、潮濕與陽光直曬。",
  },
  {
    q: "六入組是六款各一嗎？",
    a: "是的，六入組固定包含六款設計各一入，並附聖誕禮盒外包裝，適合送禮。",
  },
  { q: "什麼時候會出貨？", a: "訂單成立後 2–3 個工作日內出貨，聖誕檔期可能延長至 5 個工作日。" },
  {
    q: "可以退換貨嗎？",
    a: "食品類商品一經拆封恕不接受退換。若商品於運送過程中破損，請於收到商品 7 日內來信並附上照片，我們會為你安排補寄或退款。",
  },
  { q: "有大量訂購或客製方案嗎？", a: "歡迎來信 hello@kakokuki.com 洽詢企業訂製與大量訂購。" },
];

function FaqPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-3xl px-6 pt-10 pb-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">常見問題</h1>
        <dl className="mt-12 divide-y divide-border border-t border-border">
          {faqs.map((f) => (
            <div key={f.q} className="py-8">
              <dt className="text-base font-bold tracking-tight">{f.q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </main>
      <SiteFooter />
    </div>
  );
}
