import { cn } from "@/lib/utils";

/* Crawlers show the bare hostname, never the full URL. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

export interface SnapchatPreviewProps {
  className?: string;
  image: string;
  title?: string;
  url?: string;
}

export const SnapchatPreview = ({
  className,
  image,
  title,
  url,
}: SnapchatPreviewProps) => (
  <div
    className={cn(
      "bg-card flex items-center gap-3 rounded-2xl border p-2.5",
      className
    )}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      alt=""
      src={image}
      className="size-16 shrink-0 rounded-lg object-cover"
    />
    <div className="flex min-w-0 flex-col gap-0.5">
      {title ? (
        <span className="line-clamp-2 text-sm font-semibold">{title}</span>
      ) : null}
      <span className="text-muted-foreground truncate text-xs">
        {host(url || image)}
      </span>
    </div>
  </div>
);
