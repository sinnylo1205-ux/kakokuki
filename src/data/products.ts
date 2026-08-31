import giftSingle from "@/assets/gift-single.png.asset.json";
import giftSetSix from "@/assets/gift-set-six.png.asset.json";
import giftBoxSet6 from "@/assets/gift-box-set6.png.asset.json";
import luxGifting from "@/assets/lux-gifting.jpg";
import luxTable from "@/assets/lux-table.jpg";
import luxHero from "@/assets/lux-hero.jpg";

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  /** 送禮情境圖 */
  boxImage: string;
  kind: "single" | "set";
  tagline: string;
  description: string;
  specs: string[];
};

export const products: Product[] = [
  {
    slug: "roast-turkey",
    name: "金焰烤雞",
    price: 210,
    image: giftSingle.url,
    boxImage: luxGifting,
    kind: "single",
    tagline: "聖誕大餐第一口，先卡位。",
    description:
      "聖誕跳跳捧著剛出爐的烤雞，笑得比餐桌上的蠟燭還亮。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "big-gift",
    name: "珍禮相贈",
    price: 210,
    image: giftSingle.url,
    boxImage: luxTable,
    kind: "single",
    tagline: "抱住那個最大的盒子。",
    description:
      "綁著紅色蝴蝶結的綠色禮物盒，被聖誕跳跳緊緊抱在懷裡。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "decorate-tree",
    name: "綴樹之夜",
    price: 210,
    image: giftSingle.url,
    boxImage: luxHero,
    kind: "single",
    tagline: "掛上最後一顆吊飾，聖誕就開始了。",
    description:
      "從樹頂的金星到樹梢的小吊飾，聖誕跳跳一顆一顆慢慢掛。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "hot-cocoa",
    name: "暖韻可可",
    price: 210,
    image: giftSingle.url,
    boxImage: luxGifting,
    kind: "single",
    tagline: "一杯下去，整個冬天都暖了。",
    description:
      "雪花紅馬克杯裡疊滿棉花糖，聖誕跳跳捧著杯子瞇起眼睛。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "christmas-card",
    name: "手書聖誕箋",
    price: 210,
    image: giftSingle.url,
    boxImage: luxTable,
    kind: "single",
    tagline: "把想說的話，慢慢寫下來。",
    description:
      "認真寫下第一行聖誕祝福，信封就放在旁邊等著。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "reindeer-headband",
    name: "麋鹿冠冕",
    price: 210,
    image: giftSingle.url,
    boxImage: luxHero,
    kind: "single",
    tagline: "戴上就正式進入聖誕模式。",
    description:
      "小鹿角髮箍一戴上，聖誕跳跳整天都不肯拿下來。單入幸運籤餅，內附一張聖誕籤詩。",
    specs: ["單入幸運籤餅 × 1", "內含聖誕籤詩 × 1", "淨重約 12g", "常溫保存，請避免高溫與直曬"],
  },
  {
    slug: "christmas-set-6",
    name: "聖誕典藏・六入禮盒",
    price: 1320,
    image: giftSetSix.url,
    boxImage: luxTable,
    kind: "set",
    tagline: "六款一次收齊，聖誕不留白。",
    description:
      "六款聖誕跳跳幸運籤餅整組收藏：烤雞、禮物、聖誕樹、熱可可、聖誕卡片與麋鹿髮箍，一次帶走整個聖誕節。",
    specs: [
      "幸運籤餅 × 6（六款各一）",
      "內含聖誕籤詩 × 6",
      "淨重約 72g",
      "附聖誕禮盒外包裝，適合送禮",
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (n: number) => `NT$${n.toLocaleString("en-US")}`;
