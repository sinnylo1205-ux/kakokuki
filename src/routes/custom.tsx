import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Award, ShieldCheck, HandHeart } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";
import { CmsImage } from "@/components/CmsImage";
import { useCmsPage } from "@/lib/cms";
import {
  corporateProducts,
  customCopy,
  navCopy,
  showCustomHero,
} from "@/data/site-content";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: `${navCopy.custom.zh}｜KAKO KUKI` },
      {
        name: "description",
        content:
          "KAKO KUKI 企業合作：印製籤餅、籤文與企業專屬封套客製服務，並提供線上訂購與詢價問卷。",
      },
      { property: "og:title", content: `${navCopy.custom.zh}｜KAKO KUKI` },
      { property: "og:description", content: "印製籤餅、籤文與企業專屬封套客製服務。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CustomPage,
});

/**
 * 三張理由卡：文案與證明資料待確認，不沿用第一版未經核准的說法。
 */
const reasons = [
  {
    icon: Award,
    title: "風味的來歷（文案待確認）",
    body: "此區將說明籤餅風味的來歷與製作方式，正式文案與可公開的佐證資料待補。",
  },
  {
    icon: ShieldCheck,
    title: "食材單純（文案待確認）",
    body: "此區將說明選用的食材與配方原則，正式文案與可公開的佐證資料待補。",
  },
  {
    icon: HandHeart,
    title: "品質與責任（文案待確認）",
    body: "此區將說明品質控管與消費保障方式，正式文案與可公開的佐證資料待補。",
  },
];

/** 客製服務順序：印製籤餅 → 籤文 → 企業專屬封套 */
const nodes = [
  {
    eyebrow: "專屬於你的品牌設計",
    title: customCopy.printedService.zh,
    body: "可將指定圖樣、企業識別或藝術家作品呈現於籤餅餅身表面，讓品牌印象與味蕾同步綻放。",
  },
  {
    eyebrow: "為佳節增添溫度的心意",
    title: "籤文",
    body: "可加入企業祝福語、品牌訊息或專屬署名，讓贈禮語氣更細膩、更有溫度。",
  },
  {
    eyebrow: "專屬企業形象包裝",
    title: "企業專屬封套",
    body: "提供企業專屬或聯名授權封套，並可依指定角色客製，打造更具收藏感與話題性的外觀。",
  },
];

/** 代表性合作案例（上方區塊）— 圖文與故事待補 */
const caseStudies = [
  { name: "藝術合作案例一（待補）", story: "合作背景、設計概念與成品應用故事待補。" },
  { name: "精品合作案例二（待補）", story: "合作背景、設計概念與成品應用故事待補。" },
  { name: "品牌合作案例三（待補）", story: "合作背景、設計概念與成品應用故事待補。" },
];

/** 送禮類別選項重新設計，待定稿 */
const giftCategories = [
  "企業贈禮（客戶／夥伴）",
  "內部員工與團隊",
  "活動與展會",
  "品牌聯名企劃",
  "婚禮與人生大事",
  "還在構思，想聽建議",
];

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
  const t = useCmsPage("custom");
  const [step, setStep] = useState<1 | 2>(1);
  const [productId, setProductId] = useState("");
  const selected = corporateProducts.find((p) => p.id === productId);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pb-24 md:px-10">
        {/* 區塊一：開場（showCustomHero=false 即為整段刪除的版本） */}
        {showCustomHero ? (
          <section className="grid items-center gap-12 pt-14 md:grid-cols-2 md:pt-20">
            <div>
              <h1 className="text-3xl leading-relaxed tracking-[0.16em] md:text-4xl">
                {t("hero.title")}
              </h1>
              <h2 className="mt-8 text-sm leading-loose tracking-[0.12em] text-muted-foreground">
                {t("hero.subtitle")}
              </h2>
              <a
                href="#enquiry"
                className="mt-10 inline-block border border-gold px-10 py-4 text-sm tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {customCopy.formCta.zh}
              </a>
            </div>
            <CmsImage
              id="custom.hero.image"
              label="企業合作主視覺"
              className="aspect-[4/3] w-full"
            />
          </section>
        ) : (
          <div className="pt-14 md:pt-20" />
        )}

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

        {/* 區塊三：代表性合作案例（與底部完整名單分工，不重複） */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">代表性合作案例</h2>
          <p className="mt-4 text-center text-xs tracking-[0.2em] text-muted-foreground">
            藝 術 與 精 品 合 作 ・ 情 境 與 故 事
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {caseStudies.map((c) => (
              <article key={c.name}>
                <Placeholder label="合作情境圖" className="aspect-square" />
                <h3 className="mt-5 text-lg tracking-[0.14em]">{c.name}</h3>
                <p className="mt-3 text-sm leading-loose tracking-[0.06em] text-muted-foreground">
                  {c.story}
                </p>
              </article>
            ))}
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
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 區塊五：訂購 / 詢價問卷 */}
        <section id="enquiry" className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">
            {customCopy.formTitle.zh}
          </h2>
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
                  <Field label="這份禮物想送給誰" required>
                    <select className={inputClass} defaultValue="" required>
                      <option value="" disabled>
                        請選擇最接近的情況
                      </option>
                      {giftCategories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="想選擇的產品">
                  <select
                    className={inputClass}
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                  >
                    <option value="">請選擇產品</option>
                    {corporateProducts.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="購買數量">
                  <input
                    className={inputClass}
                    type="number"
                    min={selected?.moq ?? 1}
                    step={1}
                    placeholder={selected ? `最低訂量 ${selected.moq}（待確認）` : "請先選擇產品"}
                  />
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
                    {customCopy.formSubmit.zh}
                  </button>
                </div>
              </div>
            )}
          </form>
        </section>

        {/* 區塊六：完整合作名單 */}
        <section className="mt-24 border-t border-gold-soft pt-16">
          <h2 className="text-center text-2xl tracking-[0.16em] md:text-3xl">
            {customCopy.logoWallTitle.zh}
          </h2>
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
