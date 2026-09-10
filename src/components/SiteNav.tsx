import { Link } from "@tanstack/react-router";
import { ShoppingBag, User } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { useCmsPage } from "@/lib/cms";

export function SiteNav() {
  const t = useCmsPage("global");
  const customLogo = t("nav.logo");

  const navLinks = [
    { label: t("nav.linkAbout"), to: "/about" },
    { label: t("nav.linkCollection"), to: "/collection" },
    { label: t("nav.linkArt"), to: "/art" },
    { label: t("nav.linkCustom"), to: "/custom" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card">
      <div className="mx-auto flex h-12 max-w-[1400px] items-center justify-between gap-6 px-6 md:h-14 md:px-10">
        <Link to="/" aria-label="KAKO KUKI 首頁" className="shrink-0">
          <img src={customLogo || logo.url} alt="KAKO KUKI" className="h-7 w-auto md:h-9" />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
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
          <Link
            to="/cart"
            aria-label={t("nav.cartLabel")}
            className="transition-opacity hover:opacity-60"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <nav className="flex items-center justify-center gap-4 border-t border-border px-4 py-1.5 lg:hidden">
        {navLinks.map((l) => (
          <Link key={l.to} to={l.to} className="text-xs tracking-[0.08em]">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
