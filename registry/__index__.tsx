import dynamic from "next/dynamic";

import type { ControlConfig } from "@/lib/customizer-config";
import { blogConfig } from "@/registry/ogimagecn/blog/config";
import { changelogConfig } from "@/registry/ogimagecn/changelog/config";
import { editorialConfig } from "@/registry/ogimagecn/editorial/config";
import { eventConfig } from "@/registry/ogimagecn/event/config";
import { gridConfig } from "@/registry/ogimagecn/grid/config";
import { logoConfig } from "@/registry/ogimagecn/logo/config";
import { photoConfig } from "@/registry/ogimagecn/photo/config";
import { productConfig } from "@/registry/ogimagecn/product/config";
import { profileConfig } from "@/registry/ogimagecn/profile/config";
import { quoteConfig } from "@/registry/ogimagecn/quote/config";
import { showcaseConfig } from "@/registry/ogimagecn/showcase/config";
import { simpleConfig } from "@/registry/ogimagecn/simple/config";
import { statConfig } from "@/registry/ogimagecn/stat/config";
import { terminalConfig } from "@/registry/ogimagecn/terminal/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.ComponentType<any>;

export interface RegistryEntry {
  Component: AnyComponent;
  config: ControlConfig;
}

const lazy = (loader: () => Promise<{ default: AnyComponent }>) =>
  dynamic(loader, { ssr: false });

const registry: Record<string, RegistryEntry> = {
  blog: {
    Component: lazy(async () => {
      const { Blog } = await import("@/registry/ogimagecn/blog");
      return { default: Blog };
    }),
    config: blogConfig,
  },
  changelog: {
    Component: lazy(async () => {
      const { Changelog } = await import("@/registry/ogimagecn/changelog");
      return { default: Changelog };
    }),
    config: changelogConfig,
  },
  editorial: {
    Component: lazy(async () => {
      const { Editorial } = await import("@/registry/ogimagecn/editorial");
      return { default: Editorial };
    }),
    config: editorialConfig,
  },
  event: {
    Component: lazy(async () => {
      const { Event } = await import("@/registry/ogimagecn/event");
      return { default: Event };
    }),
    config: eventConfig,
  },
  grid: {
    Component: lazy(async () => {
      const { Grid } = await import("@/registry/ogimagecn/grid");
      return { default: Grid };
    }),
    config: gridConfig,
  },
  logo: {
    Component: lazy(async () => {
      const { Logo } = await import("@/registry/ogimagecn/logo");
      return { default: Logo };
    }),
    config: logoConfig,
  },
  photo: {
    Component: lazy(async () => {
      const { Photo } = await import("@/registry/ogimagecn/photo");
      return { default: Photo };
    }),
    config: photoConfig,
  },
  product: {
    Component: lazy(async () => {
      const { Product } = await import("@/registry/ogimagecn/product");
      return { default: Product };
    }),
    config: productConfig,
  },
  profile: {
    Component: lazy(async () => {
      const { Profile } = await import("@/registry/ogimagecn/profile");
      return { default: Profile };
    }),
    config: profileConfig,
  },
  quote: {
    Component: lazy(async () => {
      const { Quote } = await import("@/registry/ogimagecn/quote");
      return { default: Quote };
    }),
    config: quoteConfig,
  },
  showcase: {
    Component: lazy(async () => {
      const { Showcase } = await import("@/registry/ogimagecn/showcase");
      return { default: Showcase };
    }),
    config: showcaseConfig,
  },
  simple: {
    Component: lazy(async () => {
      const { Simple } = await import("@/registry/ogimagecn/simple");
      return { default: Simple };
    }),
    config: simpleConfig,
  },
  stat: {
    Component: lazy(async () => {
      const { Stat } = await import("@/registry/ogimagecn/stat");
      return { default: Stat };
    }),
    config: statConfig,
  },
  terminal: {
    Component: lazy(async () => {
      const { Terminal } = await import("@/registry/ogimagecn/terminal");
      return { default: Terminal };
    }),
    config: terminalConfig,
  },
};

export default registry;
