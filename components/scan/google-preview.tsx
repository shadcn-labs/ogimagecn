import { useState } from "react";

import { cn } from "@/lib/utils";

/* The site name falls back to the bare domain, www stripped. */
const host = (value: string) => {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
};

/* Google keeps the origin intact and turns the rest of the path into a
   breadcrumb, a chevron standing in for every slash. */
const crumbs = (value: string) => {
  try {
    const { origin, pathname } = new URL(value);
    return [origin, ...pathname.split("/").filter(Boolean)];
  } catch {
    return [];
  }
};

export interface GooglePreviewProps {
  className?: string;
  description?: string;
  icon?: string;
  siteName?: string;
  title?: string;
  url?: string;
}

/* A search result is text only: favicon and site name on top, the breadcrumb
   URL under it, then the blue heading and a two line snippet. Google reads the
   title tag and meta description rather than the Open Graph pair, and falls
   back to them only when a page leaves those out. */
export const GooglePreview = ({
  className,
  description,
  icon,
  siteName,
  title,
  url,
}: GooglePreviewProps) => {
  const domain = host(url || "");
  const name = siteName || domain;
  /* The declared favicon may 404 or be blocked (mixed content, hotlink
     protection); fall back to the initial avatar when it fails to load. */
  const [iconFailed, setIconFailed] = useState(false);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <div className="flex items-center gap-3">
        {icon && !iconFailed ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            alt=""
            src={icon}
            onError={() => setIconFailed(true)}
            className="size-7 shrink-0 rounded-full border object-cover"
          />
        ) : (
          <span className="flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-medium uppercase">
            {name.charAt(0)}
          </span>
        )}
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm leading-tight">{name}</span>
          <span className="text-muted-foreground truncate text-xs leading-tight">
            {crumbs(url || "").join(" › ")}
          </span>
        </div>
      </div>
      <span className="line-clamp-1 text-xl text-blue-800 dark:text-blue-300">
        {title}
      </span>
      <span className="text-muted-foreground line-clamp-2 text-sm">
        {description}
      </span>
    </div>
  );
};
