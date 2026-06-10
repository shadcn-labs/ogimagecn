"use client";

import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";

export const DownloadButton = ({
  svg,
  width,
}: {
  svg: string;
  width: number;
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string>();
  const anchorRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (downloadUrl) {
      anchorRef.current?.click();
    }
  }, [downloadUrl]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        ref={anchorRef}
        className="hidden"
        download="og-image.png"
        href={downloadUrl}
      />

      <Button
        disabled={downloading || !svg}
        onClick={async () => {
          if (!svg) {
            return;
          }
          try {
            setDownloading(true);
            const worker = new Worker(
              new URL("resvg-worker.ts", import.meta.url)
            );
            const _id = Math.random();
            // eslint-disable-next-line promise/avoid-new
            const url = await new Promise<string>((resolve) => {
              worker.addEventListener(
                "message",
                (e) => {
                  resolve(e.data.url);
                },
                { once: true }
              );
              // eslint-disable-next-line unicorn/require-post-message-target-origin
              worker.postMessage({ _id, svg, width });
            });
            setDownloadUrl(url);
          } finally {
            setDownloading(false);
          }
        }}
        variant="outline"
      >
        {downloading ? (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        ) : (
          <Download className="mr-2 h-4 w-4" />
        )}
        Download PNG
      </Button>
    </>
  );
};
