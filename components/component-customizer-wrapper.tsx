"use client";

import { useCallback, useEffect, useState } from "react";
import satori from "satori";

import { ComponentCustomizer } from "@/components/component-customizer";
import { DownloadButton } from "@/components/download-button";
import { getDefaults } from "@/lib/customizer-config";
import type { ControlConfig } from "@/lib/customizer-config";
import registry from "@/registry/__index__";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const COMPONENT_MAP: Record<string, React.ComponentType<any>> = {};
for (const [key, entry] of Object.entries(registry)) {
  COMPONENT_MAP[key] = entry.Component;
}

export const ComponentCustomizerWrapper = ({
  controls,
  componentName,
}: {
  controls: ControlConfig;
  componentName: string;
}) => {
  const [values, setValues] = useState(() => getDefaults(controls));
  const [svg, setSvg] = useState("");
  const [fontData, setFontData] = useState<ArrayBuffer | null>(null);

  const Component = COMPONENT_MAP[componentName];

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

  const handleChange = useCallback((key: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [key]: value }));
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

  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-background p-4">
      <div className="text-sm font-medium text-fd-muted-foreground">
        Customize
      </div>

      <ComponentCustomizer
        controls={controls}
        onChange={handleChange}
        values={values}
      />

      <DownloadButton svg={svg} width={OG_WIDTH} />
    </div>
  );
};
