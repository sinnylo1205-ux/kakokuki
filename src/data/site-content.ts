/**
 * 全站文案集中管理
 * ─────────────────────────────────────────────
 * ‧ 命名待定稿的項目以 pending: true 標記，後台「網站文案」頁可看到並修改。
 * ‧ en 欄位為英文版預留，待中文定稿後再填入翻譯。
 */

export type CopyEntry = {
  id: string;
  /** 後台顯示的說明 */
  label: string;
  zh: string;
  en?: string;
  /** true＝名稱／文字尚待定稿 */
  pending?: boolean;
};

/** 導覽與頁尾連結名稱（01、02、03、17） */
export const navCopy = {
  about: { id: "nav.about", label: "選單：品牌簡介", zh: "品牌簡介" },
  collection: {
    id: "nav.collection",
    label: "選單：商品總覽（原「幸運籤餅」，已定稿）",
    zh: "探索我們的籤餅",
  },
  art: {
    id: "nav.art",
    label: "選單：藝術專區（名稱待定稿）",
    zh: "以藝向善",
    pending: true,
  },
  custom: {
    id: "nav.custom",
    label: "選單：企業專區（原「企業客製化專區」，名稱待定稿）",
    zh: "企業專區",
    pending: true,
  },
  cart: {
    id: "nav.cart",
    label: "我的選物清單頁面名稱（待定稿）",
    zh: "我的選物清單",
    pending: true,
  },
  membershipRights: { id: "nav.membership", label: "頁尾：會員權益", zh: "會員權益" },
} satisfies Record<string, CopyEntry>;

/** 企業合作頁文案（08、11、12、13） */
export const customCopy = {
  formTitle: {
    id: "custom.formTitle",
    label: "企業頁：問卷標題（待定稿）",
    zh: "讓我們更瞭解你",
    pending: true,
  },
  formSubmit: {
    id: "custom.formSubmit",
    label: "企業頁：問卷送出按鈕（待定稿）",
    zh: "送出，讓我們與你聯繫",
    pending: true,
  },
  formCta: {
    id: "custom.formCta",
    label: "企業頁：開場問卷連結文字（待定稿）",
    zh: "讓我們更瞭解你",
    pending: true,
  },
  logoWallTitle: {
    id: "custom.logoWall",
    label: "企業頁：合作名單標題（Nick 提議 Work with us，待確認）",
    zh: "Work with us",
    pending: true,
  },
  printedService: {
    id: "custom.printedService",
    label: "企業頁：印製籤餅服務新名稱（提案：籤餅畫布，待你確認）",
    zh: "籤餅畫布・餅身圖樣印製",
    pending: true,
  },
} satisfies Record<string, CopyEntry>;

/** 品牌故事文案（06）— 已依 2026-09-10 意見定稿 */
export const brandStoryDraft = {
  pending: false,
  paragraphs: [
    "在這個訊息過載的時代，最珍貴的不是聲音的大小，而是能否引發深度的共鳴。",
    "KAKO KUKI 相信，最具影響力的企業與創意，都值得一種更具儀式感與質感的傳遞方式，將原本大眾熟知的載體，雕琢為專屬於當代商業與藝術的「理念傳譯品」。",
    "越是簡單的事物，越需要不凡的匠人精神。前身累積16 年的研發與產品試作經驗，將深厚的烘焙工藝實力轉化爲精準的品質承諾。在日本的職人哲學中，極致的品質源自對細節無微不至的敬畏。那是一份將「安心、安全與純粹美味」植入人心深處的無聲承諾。KAKO KUKI 承襲這份對工藝的執著，以嚴謹的比例與溫度的精準掌控，將原本大眾熟知的籤餅，重新雕琢為一件兼具當代簡規與層次風味的烘焙藝術品。",
    "輕輕折開餅乾時，那一聲乾脆清響的「KAKO」！不僅是工藝與美味的證明，更是訊息被精準開啟的瞬間。這聲迴響，揭開了藏於其中的訊息，也開啟了優雅與驚喜交織的儀式瞬間。",
    "我們不預測幸運，我們締造迴響。KAKO KUKI 致力於成為創意與創新的支持者，從藝廊的展演、創投的對話，到各大企業的年度心意，我們用極致的簡約與神秘感，幫您把最想說的話、最核心的信仰，優雅地交付於對方手中。",
  ],
};

/** 我的選物清單運費資訊（18）— 實際金額待確認 */
export const shippingPolicy = {
  fee: 120,
  freeThreshold: 1500,
  pending: true,
};

/**
 * 頁尾社群區（19）：暫時隱藏，日後有內容再改成 true。
 */
export const showFooterSocial = false;

/**
 * 企業頁開場區（08）：
 * true＝保留簡短圖文開場（Bonny 方案）／false＝整段刪除（Nick 方案）
 */
export const showCustomHero = true;

/** 企業合作產品選項（15）— 正式品名、規格與最低訂量待確認 */
export const corporateProducts = [
  { id: "12cm", label: "12 公分籤餅（品名待確認）", moq: 3000, pending: true },
  { id: "8cm", label: "8 公分籤餅（品名待確認）", moq: 3000, pending: true },
];

/** 後台「網站文案」頁使用 */
export const allCopyEntries: CopyEntry[] = [
  ...Object.values(navCopy),
  ...Object.values(customCopy),
];
