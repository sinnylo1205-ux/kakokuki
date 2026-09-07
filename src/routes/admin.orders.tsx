import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Calendar, Plus, Trash2 } from "lucide-react";

export const Route = createFileRoute("/admin/orders")({
  component: AdminOrders,
});

const tabs = ["待付款", "處理中", "出貨中", "歷史訂單", "退貨紀錄", "所有訂單"] as const;
type Tab = (typeof tabs)[number];

type Order = {
  id: string;
  pickup: string;
  user: string;
  manual: boolean;
  amount: number;
  shipping: string;
  payment: string;
  status: string;
  action: string;
  tab: Tab;
};

const orders: Order[] = [
  {
    id: "#A6FA6A",
    pickup: "2026-06-26",
    user: "MK 李先生 Craig",
    manual: true,
    amount: 6000,
    shipping: "公司自取",
    payment: "未匯款",
    status: "已送達",
    action: "預先組裝收據",
    tab: "待付款",
  },
  {
    id: "#FBC955",
    pickup: "2026-07-10",
    user: "MK 李先生 Craig",
    manual: true,
    amount: 6000,
    shipping: "黑貓宅配",
    payment: "未匯款",
    status: "等待付款",
    action: "未匯款，先出貨",
    tab: "待付款",
  },
  {
    id: "#3D71C2",
    pickup: "2026-07-18",
    user: "陳語柔",
    manual: false,
    amount: 1320,
    shipping: "超商取貨",
    payment: "已匯款",
    status: "處理中",
    action: "列印明細",
    tab: "處理中",
  },
  {
    id: "#8E20AA",
    pickup: "2026-08-02",
    user: "王廷維（LINE 廷維）",
    manual: false,
    amount: 2520,
    shipping: "黑貓宅配",
    payment: "已匯款",
    status: "出貨中",
    action: "填寫物流單號",
    tab: "出貨中",
  },
  {
    id: "#22B0F1",
    pickup: "2026-05-11",
    user: "Regenia",
    manual: false,
    amount: 840,
    shipping: "超商取貨",
    payment: "已匯款",
    status: "已完成",
    action: "檢視訂單",
    tab: "歷史訂單",
  },
  {
    id: "#7C4D19",
    pickup: "2026-04-28",
    user: "Catheirne",
    manual: false,
    amount: 630,
    shipping: "黑貓宅配",
    payment: "已退款",
    status: "退貨完成",
    action: "檢視退貨",
    tab: "退貨紀錄",
  },
];

function AdminOrders() {
  const [tab, setTab] = useState<Tab>("待付款");
  const [keyword, setKeyword] = useState("");

  const rows = useMemo(
    () =>
      orders.filter(
        (o) =>
          (tab === "所有訂單" || o.tab === tab) &&
          (keyword.trim() === "" ||
            o.id.toLowerCase().includes(keyword.toLowerCase()) ||
            o.user.includes(keyword)),
      ),
    [tab, keyword],
  );

  return (
    <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl tracking-[0.12em]">訂單狀態管理</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            管理和追蹤所有訂單狀態。網站會員訂單：未綁 LINE 顯示註冊名稱，已綁則同時顯示註冊名與 LINE 名（綠色）。手動建立或報價單轉訂單：有 LINE 優先顯示 LINE 名，否則顯示收件人姓名。
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm tracking-[0.12em] text-primary-foreground transition-opacity hover:opacity-90">
          <Plus className="h-4 w-4" /> 手動建立訂單
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3 md:flex-row">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="搜尋：用戶名、收件人、訂單號前五碼..."
          className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary"
        />
        <button className="flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm tracking-[0.12em]">
          <Calendar className="h-4 w-4" /> 篩選取件日期
        </button>
      </div>

      <div className="mt-6 flex overflow-x-auto rounded-full bg-secondary p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 whitespace-nowrap rounded-full px-5 py-3 text-sm tracking-[0.12em] transition-colors ${
              tab === t ? "bg-card text-foreground" : "text-foreground/70"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-8 hidden overflow-x-auto lg:block">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-xs tracking-[0.15em] text-muted-foreground">
              <th className="py-4 text-left font-normal">訂單號</th>
              <th className="py-4 text-left font-normal">預計取件日期</th>
              <th className="py-4 text-left font-normal">用戶</th>
              <th className="py-4 text-left font-normal">金額</th>
              <th className="py-4 text-left font-normal">配送方式</th>
              <th className="py-4 text-left font-normal">付款狀態</th>
              <th className="py-4 text-left font-normal">訂單狀態</th>
              <th className="py-4 text-left font-normal">操作</th>
              <th className="py-4 text-left font-normal">管理員備註</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id} className="border-b border-border align-top">
                <td className="py-6 admin-sans">{o.id}</td>
                <td className="py-6 admin-sans text-muted-foreground">{o.pickup}</td>
                <td className="py-6">
                  <p>{o.user}</p>
                  {o.manual ? (
                    <span className="mt-2 inline-block rounded-full bg-secondary px-3 py-1 text-xs">手動</span>
                  ) : null}
                </td>
                <td className="py-6 admin-sans">NT$ {o.amount.toLocaleString("en-US")}</td>
                <td className="py-6">{o.shipping}</td>
                <td className="py-6">
                  <span className="rounded-full border border-border px-3 py-1 text-xs">{o.payment}</span>
                </td>
                <td className="py-6">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs">{o.status}</span>
                </td>
                <td className="py-6">
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg bg-secondary px-3 py-2 text-xs tracking-[0.1em]">
                      {o.action}
                    </button>
                    <button aria-label="刪除訂單" className="text-muted-foreground hover:text-foreground">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="py-6">
                  <div className="space-y-2">
                    <span className="inline-block rounded-full border border-gold px-3 py-1 text-xs">
                      {o.manual ? "手動訂單" : "網站訂單"}
                    </span>
                    <select className="block w-32 rounded-lg border border-border bg-background px-3 py-2 text-xs">
                      <option>公司自取</option>
                      <option>黑貓宅配</option>
                      <option>超商取貨</option>
                    </select>
                    <button className="block w-32 rounded-lg border border-border px-3 py-2 text-xs">
                      編輯訂單
                    </button>
                    <input
                      placeholder="備註..."
                      className="block w-32 rounded-lg border border-border bg-background px-3 py-2 text-xs outline-none"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="mt-8 space-y-4 lg:hidden">
        {rows.map((o) => (
          <li key={o.id} className="rounded-xl border border-border p-5 text-sm">
            <div className="flex items-center justify-between">
              <span className="admin-sans">{o.id}</span>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs">{o.status}</span>
            </div>
            <p className="mt-3">{o.user}</p>
            <p className="mt-1 admin-sans text-muted-foreground">
              {o.pickup}・NT$ {o.amount.toLocaleString("en-US")}
            </p>
            <p className="mt-1 text-muted-foreground">
              {o.shipping}・{o.payment}
            </p>
            <button className="mt-4 rounded-lg bg-secondary px-4 py-2 text-xs">{o.action}</button>
          </li>
        ))}
      </ul>

      {rows.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">此分類目前沒有訂單。</p>
      ) : null}
    </section>
  );
}
