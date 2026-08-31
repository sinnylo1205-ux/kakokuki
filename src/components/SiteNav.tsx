import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png.asset.json";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-gold-soft bg-card/95 backdrop-blur">
      <p className="bg-primary py-2 text-center text-[0.7rem] tracking-[0.35em] text-primary-foreground">
        典 藏 聖 誕 系 列 ・ 限 量 發 行
      </p>
      <div className="mx-auto flex h-24 max-w-[1400px] items-center justify-center px-6 md:h-28 md:px-10">
        <Link to="/" aria-label="KAKO KUKI 首頁" className="inline-block">
          <img src={logo.url} alt="KAKO KUKI" className="h-10 w-auto md:h-16" />
        </Link>
      </div>
    </header>
  );
}
