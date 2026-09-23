import type { ControlConfig } from "@/lib/customizer-config";
import { blogConfig } from "@/registry/config/blog";
import { changelogConfig } from "@/registry/config/changelog";
import { editorialConfig } from "@/registry/config/editorial";
import { eventConfig } from "@/registry/config/event";
import { gridConfig } from "@/registry/config/grid";
import { logoConfig } from "@/registry/config/logo";
import { ownerConfig } from "@/registry/config/owner";
import { photoConfig } from "@/registry/config/photo";
import { productConfig } from "@/registry/config/product";
import { profileConfig } from "@/registry/config/profile";
import { quoteConfig } from "@/registry/config/quote";
import { shadcnRegistry1Config } from "@/registry/config/shadcn-registry-1";
import { shadcnRegistry2Config } from "@/registry/config/shadcn-registry-2";
import { shadcnRegistry3Config } from "@/registry/config/shadcn-registry-3";
import { shadcnRegistry4Config } from "@/registry/config/shadcn-registry-4";
import { shadcnRegistry5Config } from "@/registry/config/shadcn-registry-5";
import { shadcnRegistry6Config } from "@/registry/config/shadcn-registry-6";
import { shioriConfig } from "@/registry/config/shiori";
import { showcaseConfig } from "@/registry/config/showcase";
import { simpleConfig } from "@/registry/config/simple";
import { statConfig } from "@/registry/config/stat";
import { terminalConfig } from "@/registry/config/terminal";
import { AvatarDemo, avatarDemoConfig } from "@/registry/examples/avatar";
import { BadgeDemo, badgeDemoConfig } from "@/registry/examples/badge";
import {
  BrandMarkDemo,
  brandMarkDemoConfig,
} from "@/registry/examples/brand-mark";
import {
  GridLinesDemo,
  gridLinesDemoConfig,
} from "@/registry/examples/grid-lines";
import { Blog } from "@/registry/og/blog";
import { Changelog } from "@/registry/og/changelog";
import { Editorial } from "@/registry/og/editorial";
import { Event } from "@/registry/og/event";
import { Grid } from "@/registry/og/grid";
import { Logo } from "@/registry/og/logo";
import { Owner } from "@/registry/og/owner";
import { Photo } from "@/registry/og/photo";
import { Product } from "@/registry/og/product";
import { Profile } from "@/registry/og/profile";
import { Quote } from "@/registry/og/quote";
import { ShadcnRegistry1 } from "@/registry/og/shadcn-registry-1";
import { ShadcnRegistry2 } from "@/registry/og/shadcn-registry-2";
import { ShadcnRegistry3 } from "@/registry/og/shadcn-registry-3";
import { ShadcnRegistry4 } from "@/registry/og/shadcn-registry-4";
import { ShadcnRegistry5 } from "@/registry/og/shadcn-registry-5";
import { ShadcnRegistry6 } from "@/registry/og/shadcn-registry-6";
import { Shiori } from "@/registry/og/shiori";
import { Showcase } from "@/registry/og/showcase";
import { Simple } from "@/registry/og/simple";
import { Stat } from "@/registry/og/stat";
import { Terminal } from "@/registry/og/terminal";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.ComponentType<any>;

export interface RegistryEntry {
  Component: AnyComponent;
  config: ControlConfig;
}

// Keys are registry item names: blocks render themselves, components render a demo.
const registry: Record<string, RegistryEntry> = {
  avatar: { Component: AvatarDemo, config: avatarDemoConfig },
  badge: { Component: BadgeDemo, config: badgeDemoConfig },
  blog: { Component: Blog, config: blogConfig },
  "brand-mark": { Component: BrandMarkDemo, config: brandMarkDemoConfig },
  changelog: { Component: Changelog, config: changelogConfig },
  editorial: { Component: Editorial, config: editorialConfig },
  event: { Component: Event, config: eventConfig },
  grid: { Component: Grid, config: gridConfig },
  "grid-lines": { Component: GridLinesDemo, config: gridLinesDemoConfig },
  logo: { Component: Logo, config: logoConfig },
  owner: { Component: Owner, config: ownerConfig },
  photo: { Component: Photo, config: photoConfig },
  product: { Component: Product, config: productConfig },
  profile: { Component: Profile, config: profileConfig },
  quote: { Component: Quote, config: quoteConfig },
  "shadcn-registry-1": {
    Component: ShadcnRegistry1,
    config: shadcnRegistry1Config,
  },
  "shadcn-registry-2": {
    Component: ShadcnRegistry2,
    config: shadcnRegistry2Config,
  },
  "shadcn-registry-3": {
    Component: ShadcnRegistry3,
    config: shadcnRegistry3Config,
  },
  "shadcn-registry-4": {
    Component: ShadcnRegistry4,
    config: shadcnRegistry4Config,
  },
  "shadcn-registry-5": {
    Component: ShadcnRegistry5,
    config: shadcnRegistry5Config,
  },
  "shadcn-registry-6": {
    Component: ShadcnRegistry6,
    config: shadcnRegistry6Config,
  },
  shiori: { Component: Shiori, config: shioriConfig },
  showcase: { Component: Showcase, config: showcaseConfig },
  simple: { Component: Simple, config: simpleConfig },
  stat: { Component: Stat, config: statConfig },
  terminal: { Component: Terminal, config: terminalConfig },
};

export default registry;
