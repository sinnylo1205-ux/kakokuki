import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";
import logo from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "隱私權政策｜KAKO KUKI" },
      {
        name: "description",
        content: "KAKO KUKI 如何蒐集、使用與保護你的個人資料，以及你可行使的權利。",
      },
      { property: "og:title", content: "隱私權政策｜KAKO KUKI" },
      { property: "og:description", content: "個人資料的蒐集、使用、保護與你的權利。" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "我們蒐集的資料",
    body: "當你訂購商品、訂閱電子報或與我們聯繫時，我們可能會蒐集你的姓名、電子郵件、聯絡電話與收件地址。瀏覽網站時，我們也會蒐集匿名的瀏覽行為統計，用於改善網站體驗。",
  },
  {
    title: "資料的使用方式",
    body: "你的資料僅用於處理訂單、寄送商品、客戶服務聯繫，以及在你同意的前提下寄送新品與活動資訊。我們不會將你的個人資料販售或出租給第三方。",
  },
  {
    title: "Cookie 與追蹤技術",
    body: "本網站使用 Cookie 記錄必要的瀏覽狀態與流量分析。你可以在瀏覽器設定中停用 Cookie，但部分功能可能無法正常運作。",
  },
  {
    title: "資料保護",
    body: "我們以合理的技術與管理措施保護你的資料，僅授權必要人員存取。與物流、金流等合作夥伴共享資料時，僅提供完成服務所需的最小範圍。",
  },
  {
    title: "你的權利",
    body: "你可以隨時要求查詢、更正或刪除你的個人資料，並可要求停止寄送行銷訊息。請來信 hello@kakokuki.com，我們會在收到後盡快處理。",
  },
  {
    title: "政策更新",
    body: "本政策若有修訂，將於本頁公告最新版本。持續使用本網站即表示你同意更新後的內容。",
  },
];

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10">
        <Link to="/">
          <img src={logo.url} alt="KAKO KUKI" className="h-5 w-auto sm:h-6" />
        </Link>
      </div>
      <main className="mx-auto max-w-3xl px-6 pb-16 md:px-10">
        <h1 className="text-4xl font-black tracking-tighter sm:text-5xl">隱私權政策</h1>
        <div className="mt-12 divide-y divide-border border-t border-border">
          {sections.map((s) => (
            <section key={s.title} className="py-8">
              <h2 className="text-base font-bold tracking-tight">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
