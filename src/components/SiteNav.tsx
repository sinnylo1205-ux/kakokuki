import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { navCopy } from "@/data/site-content";

const navLinks = [
  { label: navCopy.about.zh, to: "/about" },
  { label: navCopy.collection.zh, to: "/collection" },
  { label: navCopy.art.zh, to: "/art" },
  { label: navCopy.custom.zh, to: "/custom" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-6 md:h-24 md:px-10">
        <Link to="/" aria-label="KAKO KUKI 首頁" className="shrink-0">
          <img src={logo.url} alt="KAKO KUKI" className="h-10 w-auto md:h-16" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm tracking-[0.2em] transition-opacity hover:opacity-60"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <Link to="/account" aria-label="會員" className="transition-opacity hover:opacity-60">
            <User className="h-5 w-5" />
          </Link>
          <Link to="/cart" aria-label={navCopy.cart.zh} className="transition-opacity hover:opacity-60">
            <ShoppingBag className="h-5 w-5" />
          </Link>

        </div>
      </div>

      <nav className="flex items-center justify-center gap-4 border-t border-border px-4 py-3 lg:hidden">
        {navLinks.map((l) => (
          <Link key={l.label} to={l.to} className="text-xs tracking-[0.08em]">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
