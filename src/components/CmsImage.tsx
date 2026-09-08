import { Placeholder } from "@/components/Placeholder";
import { useCms } from "@/lib/cms";

/**
 * 圖片版位：後台（/admin/content）有上傳網址就顯示圖片，
 * 沒有就顯示同樣位置的線框佔位，方便對照前後台。
 */
export function CmsImage({
  id,
  label,
  sublabel,
  className,
  alt,
}: {
  /** 對應 /admin/content 的欄位 id */
  id: string;
  label: string;
  sublabel?: string;
  className?: string;
  alt?: string;
}) {
  const { get } = useCms();
  const src = get(id);

  if (!src) return <Placeholder label={label} sublabel={sublabel} className={className} />;

  return (
    <img
      src={src}
      alt={alt ?? label}
      loading="lazy"
      className={`h-full w-full object-cover ${className ?? ""}`}
    />
  );
}
