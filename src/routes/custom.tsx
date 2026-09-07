import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, HandHeart } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "企業客製化專區｜KAKO KUKI" },
      { name: "description", content: "KAKO KUKI 企業禮贈品客製化服務，含封套客製、籤詩印製與大量訂製，並提供線上訂購詢價問卷。" },
      { property: "og:title", content: "企業客製化專區｜KAKO KUKI" },
      { property: "og:description", content: "企業禮贈品客製化服務，封套客製、籤詩印製與大量訂製。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomPage,
});

const reasons = [
  {
    icon: Award,
    title: "國際風味肯定",
    body: "經專業評審肯定的風味，讓企業送出的不只是禮盒，更是一份被認可的美味。",
  },
  {
    icon: ShieldCheck,
    title: "食品安全認證",
    body: "由通過食品安全管理認證的工廠製作，從原料、製程到環境與品質控管嚴格把關。",
  },
  {
    icon: HandHeart,
    title: "品質責任保障",
    body: "全產品皆投保產品責任險，為商品食用與消費安全提供更完整的保障。",
  },
];

const nodes = [
  {
    eyebrow: "專屬企業形象包裝",
    title: "企業專屬封套",
    body: "提供企業專屬或聯名授權封套，並可依指定角色客製，打造更具收藏感與話題性的節慶外觀。",
    cta: "經典送禮系列",
  },
  {
    eyebrow: "為佳節增添溫度的心意籤詩",
    title: "客製化籤詩卡",
    body: "可加入企業祝福語、品牌訊息或專屬署名，讓贈禮語氣更細膩、更有溫度。",
    cta: "節慶送禮選擇",
  },
  {
    eyebrow: "專屬於你的品牌設計",
    title: "印製籤餅服務",
    body: "可將指定圖樣、企業識別或節慶主題印製於外袋上，讓品牌印象與味蕾同步綻放。",
    cta: "客製系列禮盒",
  },
];

const giftCategories = ["年節送禮", "中秋送禮", "聖誕送禮", "開幕誌慶", "婚禮小物", "活動贈品"];

function CookieNode() {
  return (
    <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold bg-background">
      <span className="h-4 w-4 rotate-45 border border-dashed border-foreground/40" />
    </span>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.2em] text-muted-foreground">
        {label}
        {required ? <span className="text-primary"> *</span> : null}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full border border-border bg-background px-4 py-3 text-sm tracking-[0.08em] outline-none transition-colors focus:border-gold";

function CustomPage() {
  const [step, setStep] = useState<1 | 2>(1);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        {/* 區塊一：Hero */}
        <section className="grid items-center gap-12 pt-14 md:grid-cols-2 md:pt-20">
          <div>
            <h1 className="text-3xl leading-relaxed tracking-[0.16em] md:text-4xl">
              把企業心意，
              <br />
              包進一則好運籤詩
            </h1>
            <h2 className="mt-8 text-sm leading-loose tracking-[0.12em] text-muted-foreground">
              從封套、籤詩到外袋印製，KAKO KUKI 為企業打造專屬的節慶禮贈方案，
              讓每一份贈禮都替品牌說話。
            </h2>
            <a
              href="#enquiry"
              className="mt-10 inline-block border border-gold px-10 py-4 text-sm tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              填寫訂購 / 詢價問卷
            </a>
          </div>
          <Placeholder label="企業客製化主視覺" className="aspect-[4/3] w-full" />
        </section>

        {/* 區塊二：選擇我們的理由 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <p className="text-center text-xs tracking-[0.35em] text-muted-foreground">
            為 什 麼 選 擇 我 們
          </p>
          <h2 className="mt-5 text-center text-2xl tracking-[0.16em] md:text-3xl">
            好吃之外，再多一點令人記得的理由
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="border border-dashed border-foreground/25 bg-secondary/50 px-8 py-12 text-center"
              >
                <r.icon className="mx-auto h-9 w-9 text-primary" strokeWidth={1.2} />
                <h3 className="mt-6 text-lg tracking-[0.16em]">{r.title}</h3>
                <p className="mt-4 text-sm leading-loose tracking-[0.06em] text-muted-foreground">
                  {r.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 區塊三：企業聯名合作 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">企業聯名合作</h2>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
            {["聯名一", "聯名二", "聯名三", "聯名四", "聯名五", "聯名六", "聯名七", "聯名八"].map(
              (n) => (
                <Placeholder key={n} label={n} className="aspect-square" />
              ),
            )}
          </div>
        </section>

        {/* 區塊四：企業客製化內容 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">企業客製化內容</h2>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <Placeholder label="客製化情境圖" className="aspect-square w-full" />
            <div className="relative">
              <span className="absolute top-5 bottom-5 left-5 w-px bg-gold-soft" aria-hidden />
              <ul className="space-y-14">
                {nodes.map((n) => (
                  <li key={n.title} className="flex gap-6">
                    <CookieNode />
                    <div className="min-w-0">
                      <p className="text-xs tracking-[0.2em] text-muted-foreground">{n.eyebrow}</p>
                      <h3 className="mt-3 text-xl tracking-[0.14em]">{n.title}</h3>
                      <p className="mt-3 text-sm leading-loose tracking-[0.06em] text-muted-foreground">
                        {n.body}
                      </p>
                      <span className="mt-5 inline-block rounded-full border border-gold px-6 py-2 text-xs tracking-[0.18em] text-primary">
                        {n.cta}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 區塊五：訂購 / 詢價問卷 */}
        <section id="enquiry" className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">訂購 / 詢價問卷</h2>
          <p className="mt-4 text-center text-xs tracking-[0.2em] text-muted-foreground">
            {step === 1 ? "第一步 ・ 需求內容" : "第二步 ・ 訂購人資訊"}
          </p>

          <form
            className="mx-auto mt-12 max-w-[760px] border border-dashed border-foreground/25 bg-secondary/40 p-8 md:p-12"
            onSubmit={(e) => e.preventDefault()}
          >
            {step === 1 ? (
              <div className="grid gap-8 md:grid-cols-2">
                <div className="md:col-span-2">
                  <Field label="送禮類別" required>
                    <select className={inputClass} defaultValue="" required>
                      <option value="" disabled>
                        請選擇以下選項
                      </option>
                      {giftCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="購買產品">
                  <input className={inputClass} placeholder="例：聖誕典藏・六入禮盒" />
                </Field>
                <Field label="購買數量">
                  <input className={inputClass} type="number" min={1} placeholder="例：100" />
                </Field>
                <Field label="禮品預算" required>
                  <input className={inputClass} placeholder="例：NT$50,000" required />
                </Field>
                <Field label="預計交期（年月 / 日）" required>
                  <input className={inputClass} type="date" required />
                </Field>
                <div className="md:col-span-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="border border-gold px-10 py-4 text-sm tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    下一步 ・ 訂購人資訊
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2">
                <Field label="公司抬頭">
                  <input className={inputClass} placeholder="公司全銜" />
                </Field>
                <Field label="聯絡人" required>
                  <input className={inputClass} required />
                </Field>
                <Field label="Email" required>
                  <input className={inputClass} type="email" required />
                </Field>
                <Field label="聯絡電話" required>
                  <input className={inputClass} type="tel" required />
                </Field>
                <div className="md:col-span-2">
                  <Field label="備註">
                    <textarea className={inputClass} rows={4} />
                  </Field>
                </div>
                <div className="md:col-span-2 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm tracking-[0.18em] text-muted-foreground transition-opacity hover:opacity-60"
                  >
                    ← 回上一步
                  </button>
                  <button
                    type="submit"
                    className="border border-gold px-10 py-4 text-sm tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    送出問卷
                  </button>
                </div>
              </div>
            )}
          </form>
        </section>

        {/* 區塊六：合作企業 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">合作企業</h2>
          <div className="mt-12 grid grid-cols-3 gap-6 md:grid-cols-5 lg:grid-cols-6">
            {Array.from({ length: 18 }, (_, i) => (
              <Placeholder key={i} label={`LOGO ${i + 1}`} className="aspect-[3/2]" />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
