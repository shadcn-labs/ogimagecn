import type { ControlConfig } from "@/lib/customizer-config";
import { Blog } from "@/registry/ogimagecn/blog";
import { blogConfig } from "@/registry/ogimagecn/blog/config";
import { Changelog } from "@/registry/ogimagecn/changelog";
import { changelogConfig } from "@/registry/ogimagecn/changelog/config";
import { Editorial } from "@/registry/ogimagecn/editorial";
import { editorialConfig } from "@/registry/ogimagecn/editorial/config";
import { Event } from "@/registry/ogimagecn/event";
import { eventConfig } from "@/registry/ogimagecn/event/config";
import { Grid } from "@/registry/ogimagecn/grid";
import { gridConfig } from "@/registry/ogimagecn/grid/config";
import { Logo } from "@/registry/ogimagecn/logo";
import { logoConfig } from "@/registry/ogimagecn/logo/config";
import { Owner } from "@/registry/ogimagecn/owner";
import { ownerConfig } from "@/registry/ogimagecn/owner/config";
import { Photo } from "@/registry/ogimagecn/photo";
import { photoConfig } from "@/registry/ogimagecn/photo/config";
import { Product } from "@/registry/ogimagecn/product";
import { productConfig } from "@/registry/ogimagecn/product/config";
import { Profile } from "@/registry/ogimagecn/profile";
import { profileConfig } from "@/registry/ogimagecn/profile/config";
import { Quote } from "@/registry/ogimagecn/quote";
import { quoteConfig } from "@/registry/ogimagecn/quote/config";
import { ShadcnRegistry1 } from "@/registry/ogimagecn/shadcn-registry-1";
import { shadcnRegistry1Config } from "@/registry/ogimagecn/shadcn-registry-1/config";
import { ShadcnRegistry2 } from "@/registry/ogimagecn/shadcn-registry-2";
import { shadcnRegistry2Config } from "@/registry/ogimagecn/shadcn-registry-2/config";
import { ShadcnRegistry3 } from "@/registry/ogimagecn/shadcn-registry-3";
import { shadcnRegistry3Config } from "@/registry/ogimagecn/shadcn-registry-3/config";
import { ShadcnRegistry4 } from "@/registry/ogimagecn/shadcn-registry-4";
import { shadcnRegistry4Config } from "@/registry/ogimagecn/shadcn-registry-4/config";
import { ShadcnRegistry5 } from "@/registry/ogimagecn/shadcn-registry-5";
import { shadcnRegistry5Config } from "@/registry/ogimagecn/shadcn-registry-5/config";
import { ShadcnRegistry6 } from "@/registry/ogimagecn/shadcn-registry-6";
import { shadcnRegistry6Config } from "@/registry/ogimagecn/shadcn-registry-6/config";
import { ShadcnRegistry7 } from "@/registry/ogimagecn/shadcn-registry-7";
import { shadcnRegistry7Config } from "@/registry/ogimagecn/shadcn-registry-7/config";
import { ShadcnRegistry8 } from "@/registry/ogimagecn/shadcn-registry-8";
import { shadcnRegistry8Config } from "@/registry/ogimagecn/shadcn-registry-8/config";
import { ShadcnRegistry9 } from "@/registry/ogimagecn/shadcn-registry-9";
import { shadcnRegistry9Config } from "@/registry/ogimagecn/shadcn-registry-9/config";
import { ShadcnRegistry10 } from "@/registry/ogimagecn/shadcn-registry-10";
import { shadcnRegistry10Config } from "@/registry/ogimagecn/shadcn-registry-10/config";
import { ShadcnRegistry11 } from "@/registry/ogimagecn/shadcn-registry-11";
import { shadcnRegistry11Config } from "@/registry/ogimagecn/shadcn-registry-11/config";
import { ShadcnRegistry12 } from "@/registry/ogimagecn/shadcn-registry-12";
import { shadcnRegistry12Config } from "@/registry/ogimagecn/shadcn-registry-12/config";
import { ShadcnRegistry13 } from "@/registry/ogimagecn/shadcn-registry-13";
import { shadcnRegistry13Config } from "@/registry/ogimagecn/shadcn-registry-13/config";
import { Shiori } from "@/registry/ogimagecn/shiori";
import { shioriConfig } from "@/registry/ogimagecn/shiori/config";
import { Showcase } from "@/registry/ogimagecn/showcase";
import { showcaseConfig } from "@/registry/ogimagecn/showcase/config";
import { Simple } from "@/registry/ogimagecn/simple";
import { simpleConfig } from "@/registry/ogimagecn/simple/config";
import { Stat } from "@/registry/ogimagecn/stat";
import { statConfig } from "@/registry/ogimagecn/stat/config";
import { Terminal } from "@/registry/ogimagecn/terminal";
import { terminalConfig } from "@/registry/ogimagecn/terminal/config";

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
