import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Image as ImageIcon, RotateCcw, Type } from "lucide-react";
import { fieldId } from "@/data/cms";
import { allCopyEntries, type CopyEntry } from "@/data/site-content";
import { useCms } from "@/lib/cms";

export const Route = createFileRoute("/admin/content")({
  head: () => ({
    meta: [
      { title: "網站內容｜KAKO KUKI 後台" },
      {
        name: "description",
        content: "後台網站內容管理：依前台頁面與區塊順序整理所有圖片與文字，改後台即改前台。",
      },
      { property: "og:title", content: "網站內容｜KAKO KUKI 後台" },
      { property: "og:description", content: "依前台頁面順序管理全站圖片與文字。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminContentPage,
});

function AdminContentPage() {
  const { pages, set, reset } = useCms();
  const [activeKey, setActiveKey] = useState(pages[0]?.key ?? "global");
  const [copyRows, setCopyRows] = useState<CopyEntry[]>(allCopyEntries);

  const activePage = pages.find((p) => p.key === activeKey) ?? pages[0];
  const pendingCount = copyRows.filter((r) => r.pending).length;

  return (
    <div className="admin-sans">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl">網站內容</h1>
          <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-muted-foreground">
            下面的頁面與區塊順序，跟前台從上到下完全一樣：改哪一格，前台同一格就會跟著變。
            圖片先填圖片網址，之後接上資料庫就會改成直接上傳。
          </p>
        </div>
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm"
        >
          <RotateCcw className="h-4 w-4" />
          全部還原預設
        </button>
      </header>

      {/* 頁面切換：與前台選單同順序 */}
      <nav className="mt-8 flex flex-wrap gap-2">
        {pages.map((page) => (
          <button
            key={page.key}
            type="button"
            onClick={() => setActiveKey(page.key)}
            className={`rounded-full border px-4 py-2 text-xs ${
              page.key === activeKey
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card"
            }`}
          >
            {page.name}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setActiveKey("__copy")}
          className={`rounded-full border px-4 py-2 text-xs ${
            activeKey === "__copy"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card"
          }`}
        >
          待定名稱與文案（{pendingCount}）
        </button>
      </nav>

      {activeKey === "__copy" ? (
        <div className="mt-8 space-y-4">
          {copyRows.map((r) => (
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
                    onChange={(e) =>
                      setCopyRows((prev) =>
                        prev.map((row) => (row.id === r.id ? { ...row, zh: e.target.value } : row)),
                      )
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs text-muted-foreground">English（待翻譯）</span>
                  <input
                    value={r.en ?? ""}
                    placeholder="待中文定稿後填入"
                    onChange={(e) =>
                      setCopyRows((prev) =>
                        prev.map((row) => (row.id === r.id ? { ...row, en: e.target.value } : row)),
                      )
                    }
                    className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </label>
              </div>
            </article>
          ))}
        </div>
      ) : activePage ? (
        <div className="mt-8 space-y-6">
          <a
            href={activePage.path}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-primary underline-offset-4 hover:underline"
          >
            <ExternalLink className="h-4 w-4" />
            在前台開啟「{activePage.name}」對照（{activePage.path}）
          </a>

          {activePage.sections.map((section) => (
            <section key={section.key} className="rounded-xl border border-border bg-card p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                <h2 className="text-base">{section.title}</h2>
                <p className="text-xs text-muted-foreground">前台位置：{section.where}</p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                {section.fields.map((field) => {
                  const id = fieldId(activePage.key, section.key, field.key);
                  const isImage = field.type === "image";
                  return (
                    <div
                      key={id}
                      className={field.type === "longtext" ? "md:col-span-2" : undefined}
                    >
                      <div className="flex items-center gap-2">
                        {isImage ? (
                          <ImageIcon className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <Type className="h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="text-sm">{field.label}</span>
                      </div>
                      {field.hint ? (
                        <p className="mt-1 text-xs text-muted-foreground">{field.hint}</p>
                      ) : null}

                      {field.type === "longtext" ? (
                        <textarea
                          value={field.value}
                          rows={4}
                          onChange={(e) => set(id, e.target.value)}
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm leading-relaxed outline-none focus:border-primary"
                        />
                      ) : (
                        <input
                          value={field.value}
                          placeholder={isImage ? "貼上圖片網址（留空＝顯示線框版位）" : ""}
                          onChange={(e) => set(id, e.target.value)}
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                        />
                      )}

                      {isImage && field.value ? (
                        <img
                          src={field.value}
                          alt={field.label}
                          className="mt-3 h-28 w-full rounded-lg border border-border object-cover"
                        />
                      ) : null}

                      <p className="mt-2 text-[11px] text-muted-foreground">資料欄位：{id}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  );
}
