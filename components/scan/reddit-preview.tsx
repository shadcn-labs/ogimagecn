import { cn } from "@/lib/utils";

/* Crawlers show the bare hostname, never the full URL. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

export interface RedditPreviewProps {
  className?: string;
  image: string;
  title?: string;
  url?: string;
}

export const RedditPreview = ({
  className,
  image,
  title,
  url,
}: RedditPreviewProps) => (
  <div className={cn("flex flex-col gap-2", className)}>
    {title ? (
      <span className="line-clamp-2 text-base font-semibold">{title}</span>
    ) : null}
    <div className="relative overflow-hidden rounded-2xl border">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" src={image} className="aspect-1200/630 w-full object-cover" />
      <span className="absolute bottom-2 left-2 max-w-[calc(100%-1rem)] truncate rounded-full bg-black/70 px-2 py-0.5 text-[11px] text-white">
        {host(url || image)}
      </span>
    </div>
  </div>
);
