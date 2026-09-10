/**
 * 全站「圖片＋文字」內容總表（CMS 結構）
 * ─────────────────────────────────────────────
 * ‧ 結構刻意與前台頁面一致：頁面 → 區塊 → 欄位，順序即前台從上到下的順序。
 * ‧ 後台 /admin/content 直接讀這份結構產生編輯畫面，前台各頁也讀同一份，
 *   因此改後台哪一格，前台就會變動同一格。
 * ‧ 未來接資料庫時，只需把 value 換成從 CMS 取回的值，欄位 id 就是資料表的 key。
 */

export type CmsFieldType = "text" | "longtext" | "image";

export type CmsField = {
  key: string;
  /** 後台欄位名稱 */
  label: string;
  type: CmsFieldType;
  /** 預設值（文字內容，或圖片網址） */
  value: string;
  /** 後台提示：這格在前台的位置或建議尺寸 */
  hint?: string;
};

export type CmsSection = {
  key: string;
  /** 與前台一致的區塊名稱 */
  title: string;
  /** 前台位置說明 */
  where: string;
  fields: CmsField[];
};

export type CmsPage = {
  key: string;
  /** 前台頁面名稱 */
  name: string;
  /** 前台路徑，後台可直接開啟對照 */
  path: string;
  sections: CmsSection[];
};

export const fieldId = (page: string, section: string, field: string) =>
  `${page}.${section}.${field}`;

const img = (key: string, label: string, hint: string): CmsField => ({
  key,
  label,
  type: "image",
  value: "",
  hint,
});

export const defaultCms: CmsPage[] = [
  {
    key: "global",
    name: "全站共用（導覽列／頁尾）",
    path: "/",
    sections: [
      {
        key: "nav",
        title: "導覽列",
        where: "每一頁最上方",
        fields: [
          img("logo", "品牌 LOGO", "導覽列左側，建議透明背景 PNG"),
          { key: "linkAbout", label: "選單一：品牌簡介", type: "text", value: "品牌簡介" },
          { key: "linkCollection", label: "選單二：商品總覽", type: "text", value: "探索我們的籤餅" },
          { key: "linkArt", label: "選單三：藝術專區", type: "text", value: "以藝向善" },
          { key: "linkCustom", label: "選單四：企業專區", type: "text", value: "企業專區" },
          { key: "cartLabel", label: "我的選物清單名稱", type: "text", value: "我的選物清單" },
        ],
      },
      {
        key: "footer",
        title: "頁尾",
        where: "每一頁最下方",
        fields: [
          { key: "membership", label: "頁尾連結：會員權益", type: "text", value: "會員權益" },
          {
            key: "note",
            label: "頁尾說明文字",
            type: "longtext",
            value: "KAKO KUKI 幸運籤餅，把作品印在最日常的甜點上。",
          },
        ],
      },
    ],
  },
  {
    key: "home",
    name: "首頁",
    path: "/",
    sections: [
      {
        key: "hero",
        title: "區塊一：HERO",
        where: "首頁最上方滿版主圖",
        fields: [
          img("image", "主視覺圖片", "16:9 滿版，建議 2400×1350"),
          { key: "label", label: "圖片未上傳時顯示的字", type: "text", value: "HERO" },
          { key: "sublabel", label: "副標說明", type: "text", value: "16:9 滿版主圖" },
        ],
      },
      {
        key: "section2",
        title: "區塊二：兩個方形分類",
        where: "HERO 下方",
        fields: [
          { key: "card1Title", label: "左方框標題", type: "text", value: "經典款" },
          img("card1Image", "左方框圖片", "1:1 方形"),
          { key: "card2Title", label: "右方框標題", type: "text", value: "期間限定" },
          img("card2Image", "右方框圖片", "1:1 方形"),
        ],
      },
      {
        key: "section3",
        title: "區塊三：IP／企業聯名橫幅",
        where: "區塊二下方，左右滿版橫幅",
        fields: [
          { key: "bannerTitle", label: "橫幅標題", type: "text", value: "IP／企業聯名" },
          img("bannerImage", "橫幅圖片", "建議 21:8 寬幅圖片"),
        ],
      },
      {
        key: "section4",
        title: "區塊四：籤餅跑馬燈",
        where: "首頁最下方動態展示",
        fields: [
          img("cookie1", "跑馬燈圖片一", "去背 PNG"),
          img("cookie2", "跑馬燈圖片二", "去背 PNG"),
          img("cookie3", "跑馬燈圖片三", "去背 PNG"),
          img("cookie4", "跑馬燈圖片四", "去背 PNG"),
          img("cookie5", "跑馬燈圖片五", "去背 PNG"),
        ],
      },
    ],
  },
  {
    key: "about",
    name: "品牌簡介",
    path: "/about",
    sections: [
      {
        key: "intro",
        title: "區塊一：品牌故事",
        where: "頁面最上方標題與兩段內文",
        fields: [
          { key: "title", label: "主標題", type: "text", value: "品牌故事" },
          {
            key: "p1",
            label: "第一段內文（前三段，以空行分隔）",
            type: "longtext",
            value:
              "在這個訊息過載的時代，最珍貴的不是聲音的大小，而是能否引發深度的共鳴。\n\nKAKO KUKI 相信，最具影響力的企業與創意，都值得一種更具儀式感與質感的傳遞方式，將原本大眾熟知的載體，雕琢為專屬於當代商業與藝術的「理念傳譯品」。\n\n越是簡單的事物，越需要不凡的匠人精神。前身累積16 年的研發與產品試作經驗，將深厚的烘焙工藝實力轉化爲精準的品質承諾。在日本的職人哲。在日本的職人哲學中，極致的品質源自對細節無微不至的敬畏。那是一份將「安心、安全與純粹美味」植入人心深處的無聲承諾。KAKO KUKI 承襲這份對工藝的執著，以嚴謹的比例與溫度的精準掌控，將原本大眾熟知的籤餅，重新雕琢為一件兼具當代簡規與層次風味的烘焙藝術品。",
          },
          {
            key: "p2",
            label: "第二段內文（後兩段，以空行分隔）",
            type: "longtext",
            value:
              "輕輕折開餅乾時，那一聲乾脆清響的「KAKO」！不僅是工藝與美味的證明，更是訊息被精準開啟的瞬間。這聲迴響，揭開了藏於其中的訊息，也開啟了優雅與驚喜交織的儀式瞬間。\n\n我們不預測幸運，我們締造迴響。KAKO KUKI 致力於成為創意與創新的支持者，從藝廊的展演、創投的對話，到各大企業的年度心意，我們用極致的簡約與神秘感，幫您把最想說的話、最核心的信仰，優雅地交付於對方手中。",
          },
        ],
      },
      {
        key: "video",
        title: "區塊二：品牌影片",
        where: "品牌故事下方",
        fields: [
          { key: "title", label: "區塊標題", type: "text", value: "品牌影片" },
          {
            key: "note",
            label: "區塊說明",
            type: "text",
            value: "版 位 已 保 留 ・ 影 片 檔 待 提 供",
          },
          img("cover", "影片封面／影片版位圖", "16:9"),
        ],
      },
    ],
  },
  {
    key: "collection",
    name: "探索我們的籤餅",
    path: "/collection",
    sections: [
      {
        key: "head",
        title: "頁面標題",
        where: "頁面最上方",
        fields: [{ key: "title", label: "主標題", type: "text", value: "幸運籤餅" }],
      },
      {
        key: "rows",
        title: "兩個商品列標題",
        where: "由上到下兩列商品",
        fields: [
          { key: "row1", label: "第一列標題", type: "text", value: "經典款" },
          { key: "row2", label: "第二列標題", type: "text", value: "期間限定" },
        ],
      },
    ],
  },
  {
    key: "custom",
    name: "企業專區",
    path: "/custom",
    sections: [
      {
        key: "hero",
        title: "區塊一：開場",
        where: "頁面最上方左文右圖",
        fields: [
          {
            key: "title",
            label: "主標語",
            type: "text",
            value: "把企業心意，交給一枚會說話的籤餅",
          },
          {
            key: "subtitle",
            label: "說明文字",
            type: "longtext",
            value:
              "從餅身圖樣、籤文到專屬封套，我們與藝術家一起，為企業打造能被記住的贈禮。",
          },
          img("image", "開場圖片", "4:3 或 1:1"),
        ],
      },
      {
        key: "form",
        title: "區塊五：訂購／詢價問卷",
        where: "頁面下方問卷",
        fields: [
          { key: "title", label: "問卷標題", type: "text", value: "讓我們更瞭解你" },
          { key: "submit", label: "送出按鈕文字", type: "text", value: "送出，讓我們與你聯繫" },
        ],
      },
      {
        key: "logoWall",
        title: "區塊六：合作企業名單",
        where: "頁面最下方 Logo 牆",
        fields: [
          { key: "title", label: "區塊標題", type: "text", value: "Work with us" },
        ],
      },
    ],
  },
  {
    key: "art",
    name: "以藝向善",
    path: "/art",
    sections: [
      {
        key: "head",
        title: "頁面標題",
        where: "頁面最上方",
        fields: [
          { key: "title", label: "主標題", type: "text", value: "以藝向善" },
          {
            key: "intro",
            label: "說明文字",
            type: "longtext",
            value: "與插畫、水墨、立體造型創作者合作，讓作品被使用、也被回饋。",
          },
        ],
      },
    ],
  },
];

/** 展平成 id → 預設值，供前台讀取與未來資料庫對應 */
export const defaultCmsValues: Record<string, string> = Object.fromEntries(
  defaultCms.flatMap((page) =>
    page.sections.flatMap((section) =>
      section.fields.map((field) => [fieldId(page.key, section.key, field.key), field.value]),
    ),
  ),
);
