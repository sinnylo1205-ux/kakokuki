import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { allCopyEntries, type CopyEntry } from "@/data/site-content";

export const Route = createFileRoute("/admin/content")({
  head: () => ({
    meta: [
      { title: "網站文案｜KAKO KUKI 後台" },
      { name: "description", content: "後台網站文案管理：選單名稱、企業合作頁標題與英文版翻譯。" },
      { property: "og:title", content: "網站文案｜KAKO KUKI 後台" },
      { property: "og:description", content: "選單名稱、頁面標題與英文版翻譯管理。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminContentPage,
});

function AdminContentPage() {
  const [rows, setRows] = useState<CopyEntry[]>(allCopyEntries);
  const [saved, setSaved] = useState(false);

  const update = (id: string, key: "zh" | "en", value: string) => {
    setSaved(false);
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, [key]: value } : r)));
  };

  const pendingCount = rows.filter((r) => r.pending).length;

  return (
    <div className="admin-sans">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl">網站文案</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            選單名稱、頁面標題與按鈕文字集中在此修改；標記「待定稿」者共 {pendingCount} 項。
            英文欄位為雙語版預留。
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSaved(true)}
          className="rounded-lg bg-primary px-6 py-3 text-sm text-primary-foreground"
        >
          儲存變更
        </button>
      </header>

      {saved ? (
        <p className="mt-4 rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
          已暫存於此頁（示意用，尚未連接資料庫）。
        </p>
      ) : null}

      <div className="mt-8 space-y-4">
        {rows.map((r) => (
          <article key={r.id} className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-sm">{r.label}</h2>
              {r.pending ? (
                <span className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                  待定稿
                </span>
              ) : null}
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs text-muted-foreground">中文</span>
                <input
                  value={r.zh}
                  onChange={(e) => update(r.id, "zh", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
              <label className="block">
                <span className="text-xs text-muted-foreground">English（待翻譯）</span>
                <input
                  value={r.en ?? ""}
                  placeholder="待中文定稿後填入"
                  onChange={(e) => update(r.id, "en", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                />
              </label>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
