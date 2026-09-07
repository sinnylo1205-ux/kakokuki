import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const Route = createFileRoute("/admin/")({
  component: AdminDashboard,
});

const revenueFirst = [
  { month: "1月", paid: 120000, unpaid: 30000, total: 150000 },
  { month: "2月", paid: 180000, unpaid: 42000, total: 222000 },
  { month: "3月", paid: 260000, unpaid: 60000, total: 320000 },
  { month: "4月", paid: 300000, unpaid: 48000, total: 348000 },
  { month: "5月", paid: 96000, unpaid: 22000, total: 118000 },
  { month: "6月", paid: 210000, unpaid: 35000, total: 245000 },
];

const revenueSecond = [
  { month: "7月", paid: 358000, unpaid: 0, total: 358000 },
  { month: "8月", paid: 94000, unpaid: 18000, total: 78000 },
  { month: "9月", paid: 3000, unpaid: 2000, total: 4000 },
  { month: "10月", paid: 0, unpaid: 0, total: 0 },
  { month: "11月", paid: 0, unpaid: 0, total: 0 },
  { month: "12月", paid: 0, unpaid: 0, total: 0 },
];

const orderCounts = [
  { month: "1月", count: 0 },
  { month: "2月", count: 8 },
  { month: "3月", count: 17 },
  { month: "4月", count: 19 },
  { month: "5月", count: 7 },
  { month: "6月", count: 11 },
  { month: "7月", count: 8 },
  { month: "8月", count: 5 },
  { month: "9月", count: 1 },
  { month: "10月", count: 0 },
  { month: "11月", count: 0 },
  { month: "12月", count: 0 },
];

const topProducts = [
  { name: "聖誕典藏・六入禮盒", count: 16 },
  { name: "金焰烤雞", count: 12 },
  { name: "暖韻可可", count: 9 },
  { name: "綴樹之夜", count: 7 },
  { name: "手書聖誕箋", count: 5 },
];

function Card({ children }: { children: React.ReactNode }) {
  return <section className="rounded-2xl border border-border bg-card p-6">{children}</section>;
}

function AdminDashboard() {
  const [half, setHalf] = useState<"first" | "second">("second");
  const data = half === "first" ? revenueFirst : revenueSecond;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-2">
        <Card>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl tracking-[0.12em]">
                訂單營收（新台幣）- <span className="font-sans">2026</span> 年
              </h1>
              <p className="mt-1 text-sm font-sans text-muted-foreground">
                {half === "first" ? "1–6 月" : "7–12 月"}
              </p>
            </div>
            <div className="flex rounded-full bg-secondary p-1 text-xs tracking-[0.12em]">
              <button
                onClick={() => setHalf("first")}
                className={`rounded-full px-4 py-2 transition-colors ${half === "first" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}
              >
                <span className="font-sans">1–6</span> 月
              </button>
              <button
                onClick={() => setHalf("second")}
                className={`rounded-full px-4 py-2 transition-colors ${half === "second" ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}
              >
                <span className="font-sans">7–12</span> 月
              </button>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            待付款／處理中／出貨中／已送達都會進入長條圖（取消、退貨不計）。只有匯款進度是確認收到匯款，才會進入已匯款金額。不論何時收到匯款，都是併入訂單創立該月。
          </p>
          <p className="mt-3 text-sm text-primary">
            點擊圖表月份可檢視該月訂單明細（收件人／取件日／金額；未付款／已付款分列）
          </p>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="month" tickLine={false} fontSize={12} />
                <YAxis tickFormatter={(v: number) => `$${v.toLocaleString("en-US")}`} fontSize={11} />
                <Tooltip formatter={(v: number) => `NT$${v.toLocaleString("en-US")}`} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="paid" name="已匯款金額" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="unpaid" name="未匯款金額" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} />
                <Bar dataKey="total" name="總營收（未付＋已付）" fill="hsl(var(--foreground))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl tracking-[0.12em]">
            訂單數量 - <span className="font-sans">2026</span> 年
          </h2>
          <div className="mt-6 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={orderCounts}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.3} />
                <XAxis dataKey="month" tickLine={false} fontSize={12} />
                <YAxis fontSize={11} allowDecimals={false} />
                <Tooltip formatter={(v: number) => `${v} 筆`} />
                <Bar dataKey="count" name="訂單數" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <Card>
        <h2 className="text-2xl tracking-[0.12em]">
          熱門商品（前 <span className="font-sans">5</span> 名）- <span className="font-sans">2026</span> 年
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          依訂單建立日期統計該期間內商品出現次數；與上方年份選擇一致
        </p>
        <ul className="mt-6 space-y-4">
          {topProducts.map((p) => (
            <li key={p.name} className="flex items-center gap-4">
              <span className="w-44 shrink-0 text-sm tracking-[0.1em]">{p.name}</span>
              <div className="h-6 flex-1 rounded-full bg-secondary">
                <div
                  className="h-6 rounded-full bg-primary"
                  style={{ width: `${(p.count / topProducts[0].count) * 100}%` }}
                />
              </div>
              <span className="w-10 shrink-0 text-right text-sm font-sans">{p.count}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
