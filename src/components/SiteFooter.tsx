import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

const groups: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
  {
    title: "客戶服務",
    links: [
      { label: "常見問題", to: "/faq" },
      { label: "隱私權政策", to: "/privacy" },
      { label: "退換貨說明", to: "/faq" },
      { label: "聯絡我們", href: "mailto:hello@kakokuki.com" },
    ],
  },
  {
    title: "關於",
    links: [{ label: "品牌故事", to: "/about" }],
  },
  {
    title: "追蹤我們",
    links: [
      { label: "Instagram", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "LINE", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 sm:grid-cols-3 md:px-10">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase opacity-60">{g.title}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {g.links.map((l) => (
                <li key={l.label}>
                  {l.to ? (
                    <Link to={l.to} className="transition-opacity hover:opacity-60">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="transition-opacity hover:opacity-60">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-[1400px] flex-col items-start gap-4 border-t border-background/15 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
        <img src={logo.url} alt="KAKO KUKI" className="h-6 w-auto invert" />
        <p className="text-xs opacity-50">© {new Date().getFullYear()} KAKO KUKI. All rights reserved.</p>
      </div>
    </footer>
  );
}
