import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Placeholder } from "@/components/Placeholder";
import { formatPrice } from "@/data/products";
import { navCopy, shippingPolicy } from "@/data/site-content";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "購物車｜KAKO KUKI" },
      { name: "description", content: "確認您的 KAKO KUKI 幸運籤餅選購項目、數量與小計金額。" },
      { property: "og:title", content: "購物車｜KAKO KUKI" },
      { property: "og:description", content: "確認選購項目、數量與小計金額。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CartPage,
});

type CartItem = {
  slug: string;
  name: string;
  price: number;
  qty: number;
  checked: boolean;
};

const mockCart: CartItem[] = [
  { slug: "christmas-set-6", name: "聖誕典藏・六入禮盒", price: 1320, qty: 1, checked: true },
  { slug: "roast-turkey", name: "金焰烤雞", price: 210, qty: 2, checked: true },
  { slug: "hot-cocoa", name: "暖韻可可", price: 210, qty: 3, checked: false },
];

function CartPage() {
  const [items, setItems] = useState<CartItem[]>(mockCart);

  const toggle = (slug: string) =>
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, checked: !i.checked } : i)),
    );
  const setQty = (slug: string, delta: number) =>
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, i.qty + delta) } : i)),
    );
  const remove = (slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug));

  const total = useMemo(
    () => items.filter((i) => i.checked).reduce((s, i) => s + i.price * i.qty, 0),
    [items],
  );
  const allChecked = items.length > 0 && items.every((i) => i.checked);

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-[1400px] px-6 pt-12 pb-16 md:px-10">
        <h1 className="text-center text-2xl tracking-[0.22em] md:text-3xl">購物車</h1>

        {items.length === 0 ? (
          <p className="mt-16 text-center text-sm tracking-[0.15em] text-muted-foreground">
            購物車目前是空的。
            <Link to="/collection" className="ml-3 border-b border-gold text-primary">
              前往選購
            </Link>
          </p>
        ) : (
          <>
            <div className="mt-12 hidden grid-cols-[auto_120px_1fr_120px_160px_140px_auto] items-center gap-6 border-b border-gold-soft pb-4 text-xs tracking-[0.2em] text-muted-foreground md:grid">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  aria-label="全選"
                  checked={allChecked}
                  onChange={() =>
                    setItems((prev) => prev.map((i) => ({ ...i, checked: !allChecked })))
                  }
                  className="h-4 w-4 accent-primary"
                />
              </label>
              <span />
              <span>商品名稱</span>
              <span>單價</span>
              <span>數量</span>
              <span className="text-right">小計</span>
              <span />
            </div>

            <ul>
              {items.map((i) => (
                <li
                  key={i.slug}
                  className="grid grid-cols-[auto_88px_1fr] items-center gap-4 border-b border-border py-6 md:grid-cols-[auto_120px_1fr_120px_160px_140px_auto] md:gap-6"
                >
                  <input
                    type="checkbox"
                    aria-label={`選擇 ${i.name}`}
                    checked={i.checked}
                    onChange={() => toggle(i.slug)}
                    className="h-4 w-4 accent-primary"
                  />
                  <Placeholder label="商品圖" className="aspect-square w-full" />
                  <div className="md:contents">
                    <Link
                      to="/product/$slug"
                      params={{ slug: i.slug }}
                      className="block text-base tracking-[0.1em] transition-opacity hover:opacity-60"
                    >
                      {i.name}
                    </Link>
                    <p className="mt-2 text-sm tracking-[0.12em] text-muted-foreground md:mt-0">
                      {formatPrice(i.price)}
                    </p>
                    <div className="mt-3 flex w-fit items-center border border-gold md:mt-0">
                      <button
                        type="button"
                        aria-label="減少數量"
                        onClick={() => setQty(i.slug, -1)}
                        className="grid h-10 w-10 place-items-center text-primary"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm">{i.qty}</span>
                      <button
                        type="button"
                        aria-label="增加數量"
                        onClick={() => setQty(i.slug, 1)}
                        className="grid h-10 w-10 place-items-center text-primary"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <p className="mt-3 text-sm tracking-[0.12em] md:mt-0 md:text-right">
                      {formatPrice(i.price * i.qty)}
                    </p>
                    <button
                      type="button"
                      aria-label={`移除 ${i.name}`}
                      onClick={() => remove(i.slug)}
                      className="mt-3 text-muted-foreground transition-opacity hover:opacity-60 md:mt-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-end gap-4">
              <p className="text-sm tracking-[0.15em] text-muted-foreground">
                已勾選商品小計　
                <span className="text-lg tracking-[0.12em] text-foreground">
                  {formatPrice(total)}
                </span>
              </p>
              <p className="text-sm tracking-[0.15em] text-muted-foreground">
                運費　
                <span className="text-foreground">
                  {freeShipping ? "免運" : formatPrice(shippingPolicy.fee)}
                </span>
              </p>
              <p className="text-base tracking-[0.15em]">
                合計　{formatPrice(total + (freeShipping ? 0 : shippingPolicy.fee))}
              </p>
              <p className="text-xs leading-relaxed tracking-[0.12em] text-muted-foreground">
                單筆滿 {formatPrice(shippingPolicy.freeThreshold)} 免運
                {shippingPolicy.pending ? "（運費與免運門檻為暫定值，待確認）" : null}
                {freeShipping
                  ? null
                  : `　再購買 ${formatPrice(shippingPolicy.freeThreshold - total)} 即可免運`}
              </p>
              <Link
                to="/checkout"
                className="mt-2 border border-gold px-10 py-4 text-sm tracking-[0.25em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                前往結帳
              </Link>

            </div>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
