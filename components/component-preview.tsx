"use client";

import { RotateCcwIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import { ComponentCustomizer } from "@/components/component-customizer";
import { DownloadButton } from "@/components/download-button";
import { PreviewRenderer } from "@/components/preview-renderer";
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
  title,
  hideCustomizer = false,
  className,
}: {
  name: string;
  title?: string;
  hideCustomizer?: boolean;
  className?: string;
}) => {
  const entry = registry[name];
  const [values, setValues] = useState(() =>
    entry ? getDefaults(entry.config) : {}
  );
  const [svg, setSvg] = useState("");

  const handleChange = useCallback((key: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

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
      <PreviewRenderer
        Component={entry.Component}
        values={values}
        name={title || name}
        onSvgReady={setSvg}
        width={OG_WIDTH}
        height={OG_HEIGHT}
      />

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
    </div>
  );
};
