"use client";

import { RotateCcwIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import satori from "satori";

import { ComponentCustomizer } from "@/components/component-customizer";
import { ComponentPreviewClient } from "@/components/component-preview-client";
import { DownloadButton } from "@/components/download-button";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDefaults } from "@/lib/customizer-config";
import { cn } from "@/lib/utils";
import registry from "@/registry/__index__";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {};
for (const [key, entry] of Object.entries(registry)) {
  COMPONENT_MAP[key] = entry.Component;
}

const ResetButton = ({ ...props }: React.ComponentProps<typeof Button>) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground size-7 rounded-md"
        aria-label="Reset to defaults"
        title="Reset to defaults"
        {...props}
      >
        <RotateCcwIcon />
      </Button>
    </TooltipTrigger>
    <TooltipContent className="pr-2 pl-3">
      <div className="flex items-center gap-3">
        Reset to defaults
        <Kbd>R</Kbd>
      </div>
    </TooltipContent>
  </Tooltip>
);

export const ComponentPreview = ({
  name,
  src: _src,
  title: _title,
  hideCode: _hideCode = false,
  hideCustomizer = false,
  className,
}: {
  name?: string;
  src?: string;
  title?: string;
  hideCode?: boolean;
  hideCustomizer?: boolean;
  className?: string;
}) => {
  const entry = name ? registry[name] : undefined;
  const [values, setValues] = useState(() =>
    entry ? getDefaults(entry.config) : {}
  );
  const [svg, setSvg] = useState("");
  const [fontData, setFontData] = useState<ArrayBuffer | null>(null);

  const Component = name ? COMPONENT_MAP[name] : undefined;

  const handleChange = useCallback((key: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  useEffect(() => {
    const loadFont = async () => {
      const res = await fetch(
        "https://cdn.jsdelivr.net/fontsource/fonts/inter@latest/latin-400-normal.woff"
      );
      const buf = await res.arrayBuffer();
      setFontData(buf);
    };
    void loadFont();
  }, []);

  useEffect(() => {
    if (!fontData || !Component) {
      return;
    }
    let cancelled = false;

    const render = async () => {
      try {
        const svgResult = await satori(<Component {...values} />, {
          fonts: [
            {
              data: fontData,
              name: "Inter",
              style: "normal",
            },
          ],
          height: OG_HEIGHT,
          width: OG_WIDTH,
        });
        if (!cancelled) {
          setSvg(svgResult);
        }
      } catch {
        // satori rendering error, leave svg empty
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [values, fontData, Component]);

  const defaults = useMemo(
    () => (entry ? getDefaults(entry.config) : {}),
    [entry]
  );
  const isDefault =
    entry && Object.keys(defaults).length > 0
      ? Object.entries(defaults).every(
          ([k, v]) => JSON.stringify(values[k]) === JSON.stringify(v)
        )
      : true;

  const handleReset = useCallback(() => {
    setValues(defaults);
  }, [defaults]);

  useHotkeys("r", () => handleReset(), {
    enabled: !isDefault,
    preventDefault: true,
  });

  return (
    <div className={cn("not-prose flex flex-col gap-4", className)}>
      {entry && name ? (
        <>
          <ComponentPreviewClient Component={entry.Component} props={values} />
          {!hideCustomizer && (
            <div className="rounded-lg bg-code px-1 pb-1">
              <div className="flex items-center justify-between px-2 py-1.5">
                <span className="text-sm font-medium text-muted-foreground">
                  Customize
                </span>
                <div className="flex items-center gap-2">
                  <ResetButton disabled={isDefault} onClick={handleReset} />
                  <DownloadButton svg={svg} width={OG_WIDTH} />
                </div>
              </div>
              <div className="rounded-md bg-background p-4">
                <ComponentCustomizer
                  controls={entry.config}
                  values={values}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
};
