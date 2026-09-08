import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LayoutGrid, ShoppingCart, FileText, Type } from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "後台管理｜KAKO KUKI" },
      { name: "description", content: "KAKO KUKI 後台：儀表板、訂單管理、詢價回覆與網站文案。" },
      { property: "og:title", content: "後台管理｜KAKO KUKI" },
      { property: "og:description", content: "儀表板、訂單管理、詢價回覆與網站文案。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

const navItems = [
  { label: "儀表板", to: "/admin", icon: LayoutGrid, exact: true },
  { label: "訂單管理", to: "/admin/orders", icon: ShoppingCart, exact: false },
  { label: "詢價與回覆", to: "/admin/inquiries", icon: FileText, exact: false },
  { label: "網站文案", to: "/admin/content", icon: Type, exact: false },
];

function AdminLayout() {
  return (
    <div className="admin-sans flex min-h-screen bg-secondary/40">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-card md:block">
        <div className="border-b border-border px-6 py-6">
          <p className="text-xl tracking-[0.15em]">KAKO KUKI 後台</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground">羅心怡</p>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm tracking-[0.12em] text-foreground/80 transition-colors hover:bg-secondary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex-1">
        <nav className="flex gap-2 overflow-x-auto border-b border-border bg-card px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-xs tracking-[0.12em] data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <main className="p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

