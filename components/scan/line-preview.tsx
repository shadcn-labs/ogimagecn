import { cn } from "@/lib/utils";

/* Crawlers show the bare hostname, never the full URL. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

export interface LINEPreviewProps {
  className?: string;
  description?: string;
  image?: string;
  title?: string;
  url?: string;
}

/* LINE renders a chat-bubble card: full-width image on top, bold title, one-line muted description, bare domain footer. */
export const LINEPreview = ({
  className,
  description,
  image,
  title,
  url,
}: LINEPreviewProps) => (
  <div className={cn("overflow-hidden rounded-2xl border", className)}>
    {image ? (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img alt="" src={image} className="aspect-1200/630 w-full object-cover" />
    ) : null}
    <div className="flex flex-col gap-0.5 px-3 py-2.5">
      <span className="line-clamp-1 text-sm font-semibold">{title}</span>
      <span className="text-muted-foreground line-clamp-1 text-xs">
        {description}
      </span>
      <span className="text-muted-foreground text-[11px]">
        {host(url || image || "")}
      </span>
    </div>
  </div>
);
