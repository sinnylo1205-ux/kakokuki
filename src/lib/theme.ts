export const THEMES = ["ivory", "white", "warm"] as const;
export type SiteTheme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "kako-theme";

export const THEME_LABELS: Record<SiteTheme, string> = {
  ivory: "米白",
  white: "純白",
  warm: "暖色",
};

/** 色票預覽用（僅供小圓點顯示） */
export const THEME_SWATCHES: Record<SiteTheme, string[]> = {
  ivory: ["#F6F1E4", "#1C3B36"],
  white: ["#FFFFFF", "#1A1A1A"],
  warm: ["#FCF4B5", "#FF692E"],
};

export function applyTheme(theme: SiteTheme) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}

export function readStoredTheme(): SiteTheme {
  if (typeof window === "undefined") return "ivory";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return THEMES.includes(stored as SiteTheme) ? (stored as SiteTheme) : "ivory";
}

export function storeTheme(theme: SiteTheme) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}
