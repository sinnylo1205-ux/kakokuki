import { Link } from "@tanstack/react-router";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";


const groups: { title: string; links: { label: string; to?: string; href?: string }[] }[] = [
  {
    title: "關於我們",
    links: [
      { label: "品牌簡介", to: "/about" },
      { label: "幸運籤餅", to: "/collection" },
      { label: "企業客製化專區", to: "/custom" },
      { label: "會員權益", to: "/membership" },
    ],
  },
  {
    title: "聯繫我們",
    links: [
      { label: "常見問題", to: "/faq" },
      { label: "宅配 / 退換貨規則", to: "/faq" },
      { label: "隱私權政策", to: "/privacy" },
      { label: "服務信箱", href: "mailto:hello@kakokuki.com" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div>
          <Link to="/" aria-label="KAKO KUKI 首頁" className="inline-block">
            <img src={logo.url} alt="KAKO KUKI" className="h-8 w-auto" />
          </Link>
          <p className="mt-3 text-xs tracking-[0.35em] text-muted-foreground">TAIPEI</p>
        </div>


        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="text-sm tracking-[0.2em]">{g.title}</h2>
            <ul className="mt-6 space-y-4 text-sm tracking-[0.1em] text-muted-foreground">
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

        <div>
          <h2 className="text-sm tracking-[0.2em]">關注我們的社群</h2>
          <div className="mt-6 flex gap-5 text-muted-foreground">
            <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-60">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-60">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs tracking-[0.15em] text-muted-foreground">
          © KAKO KUKI {new Date().getFullYear()}　版權所有
        </p>
      </div>
    </footer>
  );
}
