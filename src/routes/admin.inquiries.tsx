import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, Plus, RefreshCw, Sparkles } from "lucide-react";

export const Route = createFileRoute("/admin/inquiries")({
  component: AdminInquiries,
});

const tabs = ["詢價中", "已報價", "已建立訂單"] as const;
type Tab = (typeof tabs)[number];

type Inquiry = {
  id: string;
  tab: Tab;
  name: string;
  date: string;
  source?: string;
  hidden?: boolean;
  category: string;
  quantity: string;
  budget: string;
  deliverBy: string;
  note: string;
  reply: string;
};

const inquiries: Inquiry[] = [
  {
    id: "#66D1EB",
    tab: "詢價中",
    name: "Regenia",
    date: "2026/8/27",
    source: "來源 Google 搜尋",
    category: "企業年節送禮",
    quantity: "200 盒",
    budget: "NT$ 300–500／盒",
    deliverBy: "2026/12/10",
    note: "希望燙印公司 logo 於盒蓋。",
    reply: "",
  },
  {
    id: "#9B1D1C",
    tab: "詢價中",
    name: "王廷維",
    date: "2026/8/25",
    source: "來源 Google 搜尋",
    category: "婚禮小物",
    quantity: "150 入",
    budget: "NT$ 150–250／入",
    deliverBy: "2026/11/02",
    note: "需要客製籤詩文字（12 則）。",
    reply: "",
  },
  {
    id: "#662DEC",
    tab: "詢價中",
    name: "Catheirne",
    date: "2026/8/2",
    category: "品牌聯名",
    quantity: "500 盒",
    budget: "待議",
    deliverBy: "2027/01/15",
    note: "想討論聯名包裝設計。",
    reply: "",
  },
  {
    id: "#4A88C0",
    tab: "已報價",
    name: "麥克國際",
    date: "2026/7/30",
    category: "企業客製化禮盒",
    quantity: "300 盒",
    budget: "NT$ 180,000",
    deliverBy: "2026/10/20",
    note: "已寄出報價與樣品照片。",
    reply: "報價單已於 7/31 寄出，含燙金加工費用。",
  },
  {
    id: "#11F9A3",
    tab: "已建立訂單",
    name: "誠品選物",
    date: "2026/6/18",
    category: "節慶通路採購",
    quantity: "800 入",
    budget: "NT$ 240,000",
    deliverBy: "2026/09/30",
    note: "已轉為訂單 #A6FA6A。",
    reply: "訂單已建立，等待首期匯款。",
  },
  {
    id: "#0C55B7",
    tab: "已報價",
    name: "海線科技",
    date: "2026/7/12",
    hidden: true,
    category: "員工中秋禮",
    quantity: "120 盒",
    budget: "NT$ 60,000",
    deliverBy: "2026/09/05",
    note: "客戶暫緩，已隱藏。",
    reply: "已提供兩種盒型報價。",
  },
];

function AdminInquiries() {
  const [tab, setTab] = useState<Tab>("詢價中");
  const [showHidden, setShowHidden] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [replies, setReplies] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<Record<string, boolean>>({});

  const counts = useMemo(
    () =>
      tabs.reduce(
        (acc, t) => {
          acc[t] = inquiries.filter((i) => i.tab === t && (showHidden || !i.hidden)).length;
          return acc;
        },
        {} as Record<Tab, number>,
      ),
    [showHidden],
  );

  const rows = inquiries.filter((i) => i.tab === tab && (showHidden || !i.hidden));

  return (
    <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl tracking-[0.12em]">詢價與回覆</h1>
          <p className="mt-2 text-sm text-muted-foreground">管理客戶詢價、報價與訂單轉換</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm tracking-[0.1em]">
            <RefreshCw className="h-4 w-4" /> 重新整理
          </button>
          <button className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-sm tracking-[0.1em]">
            <Plus className="h-4 w-4" /> 建立特殊報價單
          </button>
          <button className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm tracking-[0.1em]">
            <Sparkles className="h-4 w-4" /> AI 建立報價單
          </button>
          <button className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm tracking-[0.1em] text-primary-foreground">
            <Plus className="h-4 w-4" /> 新增報價單
          </button>
        </div>
      </div>

      <label className="mt-6 flex w-fit cursor-pointer items-center gap-3 text-sm">
        <input
          type="checkbox"
          checked={showHidden}
          onChange={(e) => setShowHidden(e.target.checked)}
          className="h-4 w-4 accent-primary"
        />
        顯示已隱藏報價單
      </label>

      <div className="mt-6 flex overflow-x-auto rounded-full bg-secondary p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 whitespace-nowrap rounded-full px-5 py-3 text-sm tracking-[0.12em] transition-colors ${
              tab === t ? "bg-card text-foreground" : "text-foreground/70"
            }`}
          >
            {t} (<span className="font-sans">{counts[t]}</span>)
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-4">
        {rows.map((i) => {
          const open = openId === i.id;
          return (
            <li key={i.id} className="rounded-xl border border-border p-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-lg">{i.id}</span>
                    <span className="rounded-full border border-border px-3 py-1 text-xs">{i.tab}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {i.name}・<span className="font-sans">{i.date}</span>
                    {i.source ? `・${i.source}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-border px-4 py-2 text-xs">隱藏</button>
                  <button
                    aria-label="展開詢價明細"
                    onClick={() => setOpenId(open ? null : i.id)}
                    className="rounded-lg border border-border p-2"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </div>

              {open ? (
                <div className="mt-6 grid gap-6 border-t border-border pt-6 md:grid-cols-2">
                  <dl className="space-y-3 text-sm">
                    {[
                      ["送禮類別", i.category],
                      ["購買數量", i.quantity],
                      ["禮品預算", i.budget],
                      ["預計交期", i.deliverBy],
                      ["備註", i.note],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-4">
                        <dt className="w-24 shrink-0 text-muted-foreground">{k}</dt>
                        <dd className="font-sans">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <div>
                    <p className="text-sm text-muted-foreground">回覆客戶</p>
                    <textarea
                      value={replies[i.id] ?? i.reply}
                      onChange={(e) => setReplies((r) => ({ ...r, [i.id]: e.target.value }))}
                      rows={5}
                      placeholder="輸入報價內容與交期說明..."
                      className="mt-2 w-full rounded-lg border border-border bg-background p-4 text-sm outline-none focus:border-primary"
                    />
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() => setSent((s) => ({ ...s, [i.id]: true }))}
                        className="rounded-full bg-primary px-5 py-2.5 text-sm tracking-[0.1em] text-primary-foreground"
                      >
                        送出回覆
                      </button>
                      {sent[i.id] ? <span className="text-sm text-primary">已送出回覆</span> : null}
                    </div>
                  </div>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>

      {rows.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">此分類目前沒有詢價單。</p>
      ) : null}
    </section>
  );
}
