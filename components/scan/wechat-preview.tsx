import { cn } from "@/lib/utils";

export interface WeChatPreviewProps {
  className?: string;
  description?: string;
  image?: string;
  title?: string;
}

export const WeChatPreview = ({
  className,
  description,
  image,
  title,
}: WeChatPreviewProps) => (
  <div
    className={cn(
      "bg-card flex flex-col gap-2 overflow-hidden rounded-lg border p-3",
      className
    )}
  >
    <span className="line-clamp-2 text-sm font-medium">{title}</span>
    <div className="flex items-start gap-3">
      <span className="text-muted-foreground line-clamp-3 min-w-0 flex-1 text-xs wrap-anywhere">
        {description}
      </span>
      {image ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          alt=""
          src={image}
          className="size-12 shrink-0 rounded-sm object-cover"
        />
      ) : (
        <span className="bg-muted text-muted-foreground flex size-12 shrink-0 items-center justify-center rounded-sm">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </span>
      )}
    </div>
  </div>
);
