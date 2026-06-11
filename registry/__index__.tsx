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
  shiori: { Component: Shiori, config: shioriConfig },
  showcase: { Component: Showcase, config: showcaseConfig },
  simple: { Component: Simple, config: simpleConfig },
  stat: { Component: Stat, config: statConfig },
  terminal: { Component: Terminal, config: terminalConfig },
};

export default registry;
