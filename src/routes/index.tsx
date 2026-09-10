import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { CmsImage } from "@/components/CmsImage";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useCmsPage } from "@/lib/cms";
import cookie1 from "@/assets/fortune-cookie-1.png.asset.json";
import cookie2 from "@/assets/fortune-cookie-2.png.asset.json";
import cookie3 from "@/assets/fortune-cookie-3.png.asset.json";
import cookie4 from "@/assets/fortune-cookie-4.png.asset.json";
import cookie5 from "@/assets/fortune-cookie-5.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KAKO KUKI 幸運籤餅｜典藏禮盒官方網站" },
      {
        name: "description",
        content: "KAKO KUKI 幸運籤餅官方網站，經典款與節慶款典藏禮盒、企業客製化服務與會員專屬權益。",
      },
      { property: "og:title", content: "KAKO KUKI 幸運籤餅" },
      { property: "og:description", content: "經典款與節慶款典藏禮盒、企業客製化與會員權益。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const t = useCmsPage("home");
  const defaultCookies = [cookie1.url, cookie2.url, cookie3.url, cookie4.url, cookie5.url];
  const cookies = defaultCookies.map(
    (fallback, index) => t(`section4.cookie${index + 1}`) || fallback,
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      {/* 區塊一：HERO — 16:9 大幅滿版主圖 */}
      <CmsImage
        id="home.hero.image"
        label={t("hero.label")}
        sublabel={t("hero.sublabel")}
        className="aspect-[4/3] w-full sm:aspect-video"
      />

      <main>
        {/* 區塊二 */}
        <section className="border-t border-border py-10 md:py-14">
          <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:px-10">
            <Link to="/collection" className="block">
              <CmsImage
                id="home.section2.card1Image"
                label={t("section2.card1Title")}
                sublabel="方形商品圖"
                className="aspect-square"
              />
            </Link>
            <Link to="/collection" className="block">
              <CmsImage
                id="home.section2.card2Image"
                label={t("section2.card2Title")}
                sublabel="方形商品圖"
                className="aspect-square"
              />
            </Link>
          </div>
        </section>

        {/* 區塊三 */}
        <section className="border-t border-border py-10 md:py-14">
          <Link to="/custom" className="block w-full">
            <CmsImage
              id="home.section3.bannerImage"
              label={t("section3.bannerTitle")}
              sublabel="橫幅圖片"
              className="aspect-[16/7] w-full sm:aspect-[21/8]"
            />
          </Link>
        </section>

        {/* 區塊四 */}
        <section className="border-t border-border py-16 md:py-24" aria-label="幸運籤餅動態展示">
          <div className="cookie-marquee overflow-hidden">
            <div className="cookie-marquee-track flex w-max items-center">
              {[...cookies, ...cookies].map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="flex h-48 w-52 shrink-0 items-center justify-center px-5 sm:h-56 sm:w-64 md:h-72 md:w-80"
                >
                  <img
                    src={src}
                    alt={`幸運籤餅展示 ${(index % cookies.length) + 1}`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <ThemeSwitcher />
    </div>
  );
}
