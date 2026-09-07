import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { formatPrice } from "@/data/products";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "結帳資訊｜KAKO KUKI" },
      {
        name: "description",
        content: "填寫收件人姓名與電子郵件，選擇黑貓宅配或超商取貨，完成 KAKO KUKI 訂單結帳。",
      },
      { property: "og:title", content: "結帳資訊｜KAKO KUKI" },
      { property: "og:description", content: "填寫收件資訊並選擇物流方式。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CheckoutPage,
});

const shippingOptions = [
  { id: "tcat", label: "黑貓宅配", note: "常溫配送，出貨後 1–2 個工作日到貨", fee: 120 },
  { id: "cvs", label: "超商取貨", note: "全台門市取貨，到店簡訊通知", fee: 70 },
] as const;

const orderSubtotal = 1740;

function CheckoutPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipping, setShipping] = useState<string>("tcat");
  const [submitted, setSubmitted] = useState(false);

  const option = shippingOptions.find((o) => o.id === shipping)!;
  const valid = name.trim().length > 0 && /\S+@\S+\.\S+/.test(email);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1000px] px-6 pt-12 pb-20 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">結帳資訊</h1>
        <p className="mt-4 text-center text-xs tracking-[0.3em] text-muted-foreground">
          步驟 1／2　填寫資料與物流
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-14 grid gap-14 border-t border-gold-soft pt-14 lg:grid-cols-[1fr_320px] lg:gap-16"
        >
          <div>
            <h2 className="text-xs tracking-[0.35em] text-gold">訂購人資訊</h2>
            <div className="mt-6 space-y-6">
              <label className="block">
                <span className="text-sm tracking-[0.15em] text-muted-foreground">姓名 *</span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 h-12 w-full border border-gold bg-transparent px-4 text-sm tracking-[0.1em] outline-none focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-sm tracking-[0.15em] text-muted-foreground">電子郵件 *</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 h-12 w-full border border-gold bg-transparent px-4 font-sans text-sm tracking-[0.05em] outline-none focus:border-primary"
                />
              </label>
            </div>

            <h2 className="mt-12 text-xs tracking-[0.35em] text-gold">物流方式</h2>
            <div className="mt-6 space-y-4">
              {shippingOptions.map((o) => (
                <label
                  key={o.id}
                  className={`flex cursor-pointer items-start gap-4 border px-5 py-5 transition-colors ${
                    shipping === o.id ? "border-primary" : "border-border"
                  }`}
                >
                  <input
                    type="radio"
                    name="shipping"
                    value={o.id}
                    checked={shipping === o.id}
                    onChange={() => setShipping(o.id)}
                    className="mt-1 h-4 w-4 accent-primary"
                  />
                  <span className="flex-1">
                    <span className="block text-base tracking-[0.12em]">{o.label}</span>
                    <span className="mt-1 block text-xs tracking-[0.12em] text-muted-foreground">
                      {o.note}
                    </span>
                  </span>
                  <span className="text-sm tracking-[0.1em] text-muted-foreground">
                    {formatPrice(o.fee)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <aside className="border-t border-gold-soft pt-8 lg:border-t-0 lg:border-l lg:border-gold-soft lg:pt-0 lg:pl-10">
            <h2 className="text-xs tracking-[0.35em] text-gold">訂單金額</h2>
            <dl className="mt-6 space-y-4 text-sm tracking-[0.12em]">
              <div className="flex justify-between text-muted-foreground">
                <dt>商品小計</dt>
                <dd>{formatPrice(orderSubtotal)}</dd>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <dt>運費（{option.label}）</dt>
                <dd>{formatPrice(option.fee)}</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-4 text-base">
                <dt>應付金額</dt>
                <dd>{formatPrice(orderSubtotal + option.fee)}</dd>
              </div>
            </dl>

            <button
              type="submit"
              disabled={!valid}
              className="mt-8 w-full border border-gold px-8 py-4 text-sm tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-primary"
            >
              下一步：前往付款
            </button>
            {submitted ? (
              <p className="mt-4 text-center text-xs leading-relaxed tracking-[0.15em] text-muted-foreground">
                資料已確認，付款流程即將開放。
              </p>
            ) : null}
          </aside>
        </form>
      </main>
      <SiteFooter />
    </div>
  );
}
