import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultCms, defaultCmsValues, fieldId, type CmsPage } from "@/data/cms";

const STORAGE_KEY = "kako-cms-content";

type CmsContextValue = {
  /** 取得某一格內容（後台改了就跟著變） */
  get: (id: string) => string;
  /** 修改某一格內容 */
  set: (id: string, value: string) => void;
  /** 還原全部預設值 */
  reset: () => void;
  /** 後台編輯畫面用：已套用修改後的完整結構 */
  pages: CmsPage[];
  overrides: Record<string, string>;
};

const CmsContext = createContext<CmsContextValue | null>(null);

export function CmsProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useState<Record<string, string>>({});

  // localStorage 只能在瀏覽器讀；未來改成從資料庫載入即可。
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setOverrides(JSON.parse(raw) as Record<string, string>);
    } catch {
      /* 忽略毀損的暫存 */
    }
  }, []);

  const persist = useCallback((next: Record<string, string>) => {
    setOverrides(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* 無痕模式等情況下略過 */
    }
  }, []);

  const value = useMemo<CmsContextValue>(() => {
    const get = (id: string) => overrides[id] ?? defaultCmsValues[id] ?? "";
    return {
      get,
      set: (id, v) => persist({ ...overrides, [id]: v }),
      reset: () => persist({}),
      overrides,
      pages: defaultCms.map((page) => ({
        ...page,
        sections: page.sections.map((section) => ({
          ...section,
          fields: section.fields.map((field) => ({
            ...field,
            value: get(fieldId(page.key, section.key, field.key)),
          })),
        })),
      })),
    };
  }, [overrides, persist]);

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
}

export function useCms(): CmsContextValue {
  const ctx = useContext(CmsContext);
  if (ctx) return ctx;
  // 沒有 Provider 時退回預設值，頁面不會壞掉。
  return {
    get: (id) => defaultCmsValues[id] ?? "",
    set: () => undefined,
    reset: () => undefined,
    overrides: {},
    pages: defaultCms,
  };
}

/** 讀單一頁面的內容：t("section.field") */
export function useCmsPage(pageKey: string) {
  const { get } = useCms();
  return useCallback((path: string) => get(`${pageKey}.${path}`), [get, pageKey]);
}
