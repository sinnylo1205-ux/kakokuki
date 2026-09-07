import { useEffect, useState } from "react";
import { Palette } from "lucide-react";
import {
  THEMES,
  THEME_LABELS,
  THEME_SWATCHES,
  applyTheme,
  readStoredTheme,
  storeTheme,
  type SiteTheme,
} from "@/lib/theme";

/** 右下角小按鈕：hover 展開三種全站配色 */
export function ThemeSwitcher() {
  const [theme, setTheme] = useState<SiteTheme>("ivory");

  useEffect(() => {
    const stored = readStoredTheme();
    setTheme(stored);
    applyTheme(stored);
  }, []);

  const pick = (next: SiteTheme) => {
    setTheme(next);
    applyTheme(next);
    storeTheme(next);
  };

  return (
    <div className="group fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <div className="flex items-center gap-2 overflow-hidden rounded-full border border-border bg-card px-0 opacity-0 shadow-md transition-all duration-300 group-hover:px-2 group-hover:py-2 group-hover:opacity-100 group-focus-within:px-2 group-focus-within:py-2 group-focus-within:opacity-100">
        {THEMES.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => pick(t)}
            aria-label={`切換為${THEME_LABELS[t]}配色`}
            aria-pressed={theme === t}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform hover:scale-110 ${
              theme === t ? "border-foreground" : "border-border"
            }`}
          >
            <span
              className="h-5 w-5 rounded-full"
              style={{
                background: `linear-gradient(135deg, ${THEME_SWATCHES[t][0]} 50%, ${THEME_SWATCHES[t][1]} 50%)`,
              }}
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="全站配色切換"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-md transition-colors hover:bg-secondary"
      >
        <Palette className="h-4 w-4" />
      </button>
    </div>
  );
}
