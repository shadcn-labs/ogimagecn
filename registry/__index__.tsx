import type { ControlConfig } from "@/lib/customizer-config";
import { Blog } from "@/registry/components/blog";
import { blogConfig } from "@/registry/components/blog/config";
import { Changelog } from "@/registry/components/changelog";
import { changelogConfig } from "@/registry/components/changelog/config";
import { Editorial } from "@/registry/components/editorial";
import { editorialConfig } from "@/registry/components/editorial/config";
import { Event } from "@/registry/components/event";
import { eventConfig } from "@/registry/components/event/config";
import { Grid } from "@/registry/components/grid";
import { gridConfig } from "@/registry/components/grid/config";
import { Logo } from "@/registry/components/logo";
import { logoConfig } from "@/registry/components/logo/config";
import { Owner } from "@/registry/components/owner";
import { ownerConfig } from "@/registry/components/owner/config";
import { Photo } from "@/registry/components/photo";
import { photoConfig } from "@/registry/components/photo/config";
import { Product } from "@/registry/components/product";
import { productConfig } from "@/registry/components/product/config";
import { Profile } from "@/registry/components/profile";
import { profileConfig } from "@/registry/components/profile/config";
import { Quote } from "@/registry/components/quote";
import { quoteConfig } from "@/registry/components/quote/config";
import { ShadcnRegistry1 } from "@/registry/components/shadcn-registry-1";
import { shadcnRegistry1Config } from "@/registry/components/shadcn-registry-1/config";
import { ShadcnRegistry2 } from "@/registry/components/shadcn-registry-2";
import { shadcnRegistry2Config } from "@/registry/components/shadcn-registry-2/config";
import { ShadcnRegistry3 } from "@/registry/components/shadcn-registry-3";
import { shadcnRegistry3Config } from "@/registry/components/shadcn-registry-3/config";
import { ShadcnRegistry4 } from "@/registry/components/shadcn-registry-4";
import { shadcnRegistry4Config } from "@/registry/components/shadcn-registry-4/config";
import { ShadcnRegistry5 } from "@/registry/components/shadcn-registry-5";
import { shadcnRegistry5Config } from "@/registry/components/shadcn-registry-5/config";
import { ShadcnRegistry6 } from "@/registry/components/shadcn-registry-6";
import { shadcnRegistry6Config } from "@/registry/components/shadcn-registry-6/config";
import { ShadcnRegistry7 } from "@/registry/components/shadcn-registry-7";
import { shadcnRegistry7Config } from "@/registry/components/shadcn-registry-7/config";
import { ShadcnRegistry8 } from "@/registry/components/shadcn-registry-8";
import { shadcnRegistry8Config } from "@/registry/components/shadcn-registry-8/config";
import { ShadcnRegistry9 } from "@/registry/components/shadcn-registry-9";
import { shadcnRegistry9Config } from "@/registry/components/shadcn-registry-9/config";
import { ShadcnRegistry10 } from "@/registry/components/shadcn-registry-10";
import { shadcnRegistry10Config } from "@/registry/components/shadcn-registry-10/config";
import { ShadcnRegistry11 } from "@/registry/components/shadcn-registry-11";
import { shadcnRegistry11Config } from "@/registry/components/shadcn-registry-11/config";
import { ShadcnRegistry12 } from "@/registry/components/shadcn-registry-12";
import { shadcnRegistry12Config } from "@/registry/components/shadcn-registry-12/config";
import { ShadcnRegistry13 } from "@/registry/components/shadcn-registry-13";
import { shadcnRegistry13Config } from "@/registry/components/shadcn-registry-13/config";
import { Shiori } from "@/registry/components/shiori";
import { shioriConfig } from "@/registry/components/shiori/config";
import { Showcase } from "@/registry/components/showcase";
import { showcaseConfig } from "@/registry/components/showcase/config";
import { Simple } from "@/registry/components/simple";
import { simpleConfig } from "@/registry/components/simple/config";
import { Stat } from "@/registry/components/stat";
import { statConfig } from "@/registry/components/stat/config";
import { Terminal } from "@/registry/components/terminal";
import { terminalConfig } from "@/registry/components/terminal/config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComponent = React.ComponentType<any>;

export interface RegistryEntry {
  Component: AnyComponent;
  config: ControlConfig;
}

const registry: Record<string, RegistryEntry> = {
  blog: { Component: Blog, config: blogConfig },
  changelog: { Component: Changelog, config: changelogConfig },
  editorial: { Component: Editorial, config: editorialConfig },
  event: { Component: Event, config: eventConfig },
  grid: { Component: Grid, config: gridConfig },
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
  "shadcn-registry-10": {
    Component: ShadcnRegistry10,
    config: shadcnRegistry10Config,
  },
  "shadcn-registry-11": {
    Component: ShadcnRegistry11,
    config: shadcnRegistry11Config,
  },
  "shadcn-registry-12": {
    Component: ShadcnRegistry12,
    config: shadcnRegistry12Config,
  },
  "shadcn-registry-13": {
    Component: ShadcnRegistry13,
    config: shadcnRegistry13Config,
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
  "shadcn-registry-7": {
    Component: ShadcnRegistry7,
    config: shadcnRegistry7Config,
  },
  "shadcn-registry-8": {
    Component: ShadcnRegistry8,
    config: shadcnRegistry8Config,
  },
  "shadcn-registry-9": {
    Component: ShadcnRegistry9,
    config: shadcnRegistry9Config,
  },
  shiori: { Component: Shiori, config: shioriConfig },
  showcase: { Component: Showcase, config: showcaseConfig },
  simple: { Component: Simple, config: simpleConfig },
  stat: { Component: Stat, config: statConfig },
  terminal: { Component: Terminal, config: terminalConfig },
};

export default registry;
