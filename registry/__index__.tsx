import { Blog } from "@/registry/blocks/blog";
import { blogConfig } from "@/registry/blocks/blog/config";
import { Changelog } from "@/registry/blocks/changelog";
import { changelogConfig } from "@/registry/blocks/changelog/config";
import { Editorial } from "@/registry/blocks/editorial";
import { editorialConfig } from "@/registry/blocks/editorial/config";
import { Event } from "@/registry/blocks/event";
import { eventConfig } from "@/registry/blocks/event/config";
import { Grid } from "@/registry/blocks/grid";
import { gridConfig } from "@/registry/blocks/grid/config";
import { Livestream } from "@/registry/blocks/livestream";
import { livestreamConfig } from "@/registry/blocks/livestream/config";
import { Logo } from "@/registry/blocks/logo";
import { logoConfig } from "@/registry/blocks/logo/config";
import { Owner } from "@/registry/blocks/owner";
import { ownerConfig } from "@/registry/blocks/owner/config";
import { Photo } from "@/registry/blocks/photo";
import { photoConfig } from "@/registry/blocks/photo/config";
import { Product } from "@/registry/blocks/product";
import { productConfig } from "@/registry/blocks/product/config";
import { Profile } from "@/registry/blocks/profile";
import { profileConfig } from "@/registry/blocks/profile/config";
import { Quote } from "@/registry/blocks/quote";
import { quoteConfig } from "@/registry/blocks/quote/config";
import { ShadcnRegistry1 } from "@/registry/blocks/shadcn-registry-1";
import { shadcnRegistry1Config } from "@/registry/blocks/shadcn-registry-1/config";
import { ShadcnRegistry2 } from "@/registry/blocks/shadcn-registry-2";
import { shadcnRegistry2Config } from "@/registry/blocks/shadcn-registry-2/config";
import { ShadcnRegistry3 } from "@/registry/blocks/shadcn-registry-3";
import { shadcnRegistry3Config } from "@/registry/blocks/shadcn-registry-3/config";
import { ShadcnRegistry4 } from "@/registry/blocks/shadcn-registry-4";
import { shadcnRegistry4Config } from "@/registry/blocks/shadcn-registry-4/config";
import { ShadcnRegistry5 } from "@/registry/blocks/shadcn-registry-5";
import { shadcnRegistry5Config } from "@/registry/blocks/shadcn-registry-5/config";
import { ShadcnRegistry6 } from "@/registry/blocks/shadcn-registry-6";
import { shadcnRegistry6Config } from "@/registry/blocks/shadcn-registry-6/config";
import { Shiori } from "@/registry/blocks/shiori";
import { shioriConfig } from "@/registry/blocks/shiori/config";
import { Showcase } from "@/registry/blocks/showcase";
import { showcaseConfig } from "@/registry/blocks/showcase/config";
import { Simple } from "@/registry/blocks/simple";
import { simpleConfig } from "@/registry/blocks/simple/config";
import { Stat } from "@/registry/blocks/stat";
import { statConfig } from "@/registry/blocks/stat/config";
import { Terminal } from "@/registry/blocks/terminal";
import { terminalConfig } from "@/registry/blocks/terminal/config";
import { AvatarDemo, avatarDemoConfig } from "@/registry/examples/avatar";
import { BadgeDemo, badgeDemoConfig } from "@/registry/examples/badge";
import {
  BrandMarkDemo,
  brandMarkDemoConfig,
} from "@/registry/examples/brand-mark";
import { DividerDemo, dividerDemoConfig } from "@/registry/examples/divider";
import {
  GridLinesDemo,
  gridLinesDemoConfig,
} from "@/registry/examples/grid-lines";
import { WaveformDemo, waveformDemoConfig } from "@/registry/examples/waveform";
import type { ControlConfig } from "@/registry/lib/customizer-config";

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
  divider: { Component: DividerDemo, config: dividerDemoConfig },
  editorial: { Component: Editorial, config: editorialConfig },
  event: { Component: Event, config: eventConfig },
  grid: { Component: Grid, config: gridConfig },
  "grid-lines": { Component: GridLinesDemo, config: gridLinesDemoConfig },
  livestream: { Component: Livestream, config: livestreamConfig },
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
  waveform: { Component: WaveformDemo, config: waveformDemoConfig },
};

export default registry;
