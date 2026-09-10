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

/** 品牌故事文案（06）— 已依 2026-09-08 意見定稿 */
export const brandStoryDraft = {
  pending: false,
  paragraphs: [
    "KAKO KUKI 相信一塊餅可以承載一件作品。我們把餅身當成畫布，邀請插畫、水墨、立體造型的創作者，把他們的語言印在最日常的甜點上；每一次合作都以正式授權與分潤進行，讓創作被使用、也被回饋。",
    "也因為這樣的做法，我們常成為跨國品牌在台灣尋找禮品時的選擇，他們要的不只是好吃，而是一份能說出在地創作故事、細節與品質都有著我們的把控。從圖樣授權、籤文撰寫到封套設計，我們把每個環節做成可被驗證的流程，讓一份小小的贈禮，也能代表品牌的態度。",
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
