import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";


const navLinks = [
  { label: "品牌簡介", to: "/about" },
  { label: "幸運籤餅", to: "/collection" },
  { label: "企業客製化專區", to: "/custom" },
  { label: "會員權益", to: "/membership" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-6 md:h-24 md:px-10">
        <Link to="/" aria-label="KAKO KUKI 首頁" className="shrink-0">
          <span className="text-xl tracking-[0.25em] md:text-2xl">KAKO KUKI</span>
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
          <Link to="/membership" aria-label="會員" className="transition-opacity hover:opacity-60">
            <User className="h-5 w-5" />
          </Link>
          <button type="button" aria-label="購物車" className="transition-opacity hover:opacity-60">
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-5 border-t border-border px-4 py-3 lg:hidden">
        {navLinks.map((l) => (
          <Link key={l.label} to={l.to} className="text-xs tracking-[0.1em]">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
