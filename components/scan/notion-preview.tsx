import { useState } from "react";

import { cn } from "@/lib/utils";

/* Notion prints the full URL, so the bare hostname is only a fallback. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

export interface NotionPreviewProps {
  className?: string;
  description?: string;
  icon?: string;
  image: string;
  title?: string;
  url?: string;
}

export const NotionPreview = ({
  className,
  description,
  icon,
  image,
  title,
  url,
}: NotionPreviewProps) => {
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div
      className={cn(
        "flex h-32 overflow-hidden rounded-[10px] border",
        className
      )}
    >
      <div className="flex min-w-0 flex-[4_1_180px] flex-col justify-between gap-3 px-5 pt-4 pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="truncate text-sm font-medium">
            {title || host(url || image)}
          </span>
          {description ? (
            <span className="text-muted-foreground line-clamp-2 text-xs">
              {description}
            </span>
          ) : null}
        </div>
        <div className="flex min-w-0 items-center gap-1.5">
          {icon && !iconFailed ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              alt=""
              src={icon}
              onError={() => setIconFailed(true)}
              className="size-4 shrink-0 object-contain"
            />
          ) : null}
          <span className="truncate text-xs">{url || host(image)}</span>
        </div>
      </div>
      <div className="relative flex-[1_1_100px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src={image}
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </div>
  );
};
