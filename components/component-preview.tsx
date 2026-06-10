"use client";

import { ComponentCustomizerWrapper } from "@/components/component-customizer-wrapper";
import { ComponentPreviewClient } from "@/components/component-preview-client";
import { getDefaults } from "@/lib/customizer-config";
import { cn } from "@/lib/utils";
import registry from "@/registry/__index__";

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
  const defaults = entry ? getDefaults(entry.config) : {};

  return (
    <div className={cn("flex min-w-0 flex-col gap-4", className)}>
      {entry && name ? (
        <>
          <ComponentPreviewClient
            Component={entry.Component}
            props={defaults}
          />
          {!hideCustomizer && (
            <ComponentCustomizerWrapper
              controls={entry.config}
              componentName={name}
            />
          )}
        </>
      ) : null}
    </div>
  );
};
