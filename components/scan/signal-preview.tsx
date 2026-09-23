import { cn } from "@/lib/utils";

/* Signal shows the bare hostname beneath the link preview. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

export interface SignalPreviewProps {
  className?: string;
  description?: string;
  image?: string;
  small?: boolean;
  title?: string;
  url?: string;
}

export const SignalPreview = ({
  className,
  description,
  image,
  small,
  title,
  url,
}: SignalPreviewProps) => (
  <div
    className={cn(
      "flex gap-3 rounded-lg border bg-blue-50 p-3 dark:bg-blue-950/30",
      small ? "items-start" : "flex-col",
      className
    )}
  >
    {image ? (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        alt=""
        src={image}
        className={cn(
          "rounded object-cover",
          small ? "size-14 shrink-0" : "aspect-1200/630 w-full"
        )}
      />
    ) : null}
    <div className="flex min-w-0 flex-col gap-1">
      <span className="text-sm font-semibold">{title}</span>
      <span className="text-muted-foreground line-clamp-2 text-xs">
        {description}
      </span>
      <span className="text-muted-foreground text-[11px]">
        {host(url || image || "")}
      </span>
    </div>
  </div>
);
