"use client";

import { useEffect, useRef, useState } from "react";
import satori from "satori";
import type { Font } from "satori";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export const PreviewRenderer = ({
  Component,
  values,
  name,
  onSvgReady,
  width,
  height,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  values: Record<string, unknown>;
  name: string;
  onSvgReady?: (svg: string) => void;
  width: number;
  height: number;
}) => {
  const [svg, setSvg] = useState("");
  const [fonts, setFonts] = useState<Font[]>([]);
  const onSvgReadyRef = useRef(onSvgReady);
  onSvgReadyRef.current = onSvgReady;

  useEffect(() => {
    const loadFonts = async () => {
      const weights = [400, 500, 600, 700, 800] as const;
      const loaded = await Promise.all(
        weights.map(async (weight) => {
          const res = await fetch(
            `https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-${weight}-normal.woff`
          );
          const buf = await res.arrayBuffer();
          return {
            data: buf,
            name: "Inter" as const,
            style: "normal" as const,
            weight,
          };
        })
      );
      setFonts(loaded);
    };
    void loadFonts();
  }, []);

  useEffect(() => {
    if (fonts.length === 0) {
      return;
    }
    let cancelled = false;

    const render = async () => {
      try {
        const svgResult = await satori(<Component {...values} />, {
          fonts,
          height,
          width,
        });
        if (!cancelled) {
          setSvg(svgResult);
          onSvgReadyRef.current?.(svgResult);
        }
      } catch {
        // satori rendering error, leave svg empty
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [values, fonts, Component, width, height]);

  return (
    <div className="relative w-full min-w-0 overflow-hidden rounded-xl border bg-background shadow-sm">
      <AspectRatio ratio={width / height}>
        {svg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt={name}
            className="h-full w-full object-contain"
            height={height}
            width={width}
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
          />
        ) : (
          <div className="h-full w-full animate-pulse bg-muted" />
        )}
      </AspectRatio>
    </div>
  );
};
