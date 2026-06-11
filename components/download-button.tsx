"use client";

import { Download, LoaderIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const initResvgWorker = () => {
  if (typeof window === "undefined") {
    return;
  }

  // eslint-disable-next-line unicorn/relative-url-style
  const worker = new Worker(new URL("./resvg-worker.ts", import.meta.url));

  const pending = new Map();
  worker.addEventListener("message", (e) => {
    const { _id, url } = e.data;
    const resolve = pending.get(_id);
    if (resolve) {
      resolve(url);
      pending.delete(_id);
    }
  });

  return (msg: object) => {
    const _id = Math.random();
    /* eslint-disable unicorn/require-post-message-target-origin */
    worker.postMessage({
      ...msg,
      _id,
    });
    // eslint-disable-next-line promise/avoid-new
    return new Promise((resolve) => {
      pending.set(_id, resolve);
    });
  };
};

const renderPNG = initResvgWorker();

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

  const downloadDisabled = downloading || !svg;

  useEffect(() => {
    if (downloadUrl) {
      anchorRef.current?.click();
    }
  }, [downloadUrl]);

  const handleDownload = async () => {
    if (!svg) {
      return;
    }
    try {
      setDownloading(true);
      const pngDownloadUrl = await renderPNG?.({
        svg,
        width,
      });

      setDownloadUrl(pngDownloadUrl as string);
    } finally {
      setDownloading(false);
    }
  };

  useHotkeys("s", () => handleDownload(), {
    enabled: !downloadDisabled,
    preventDefault: true,
  });

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
      <a
        ref={anchorRef}
        className="hidden"
        download="og-image.png"
        href={downloadUrl}
      />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="h-7"
            disabled={downloadDisabled}
            onClick={handleDownload}
          >
            {downloading ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              <Download />
            )}
            Save Image
          </Button>
        </TooltipTrigger>
        <TooltipContent className="pr-2 pl-3">
          <div className="flex items-center gap-3">
            Save as PNG
            <Kbd>S</Kbd>
          </div>
        </TooltipContent>
      </Tooltip>
    </>
  );
};
