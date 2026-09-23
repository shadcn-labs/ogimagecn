import { cn } from "@/lib/utils";

const host = (value: string) => {
  try {
    return new URL(value).hostname;
  } catch {
    return value;
  }
};

export interface MastodonPreviewProps {
  className?: string;
  description?: string;
  image?: string;
  siteName?: string;
  title?: string;
  url?: string;
}

/* Wide images make Mastodon use its expanded card: a 1.91:1 image above the
   provider, title, and description. Narrow images use a separate compact row. */
export const MastodonPreview = ({
  className,
  description,
  image,
  siteName,
  title,
  url,
}: MastodonPreviewProps) => {
  const text = (
    <div className="flex min-w-0 flex-col p-[15px]">
      <span className="text-muted-foreground mb-2 truncate text-sm">
        {siteName || host(url || image || "")}
      </span>
      <span className="line-clamp-2 text-[19px] leading-6 font-bold">
        {title}
      </span>
      {description ? (
        <span className="text-muted-foreground mt-2 truncate text-sm">
          {description}
        </span>
      ) : null}
    </div>
  );

  return image ? (
    <div className={cn("overflow-hidden rounded-lg border", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt="" className="aspect-[1.91/1] w-full object-cover" src={image} />
      {text}
    </div>
  ) : (
    <div className={cn("flex overflow-hidden rounded-lg border", className)}>
      <div className="bg-muted text-muted-foreground flex aspect-square w-24 shrink-0 items-center justify-center border-r">
        <svg aria-hidden="true" viewBox="0 -960 960 960" className="size-6">
          <path
            fill="currentColor"
            d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520h200L520-800v200Z"
          />
        </svg>
      </div>
      {text}
    </div>
  );
};
