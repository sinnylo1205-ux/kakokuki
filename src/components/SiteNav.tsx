import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-center px-6 md:h-20 md:px-10">
        <Link to="/" aria-label="KAKO KUKI 首頁" className="inline-block">
          <img src={logo.url} alt="KAKO KUKI" className="h-8 w-auto md:h-12" />
        </Link>
      </div>
    </header>
  );
}
