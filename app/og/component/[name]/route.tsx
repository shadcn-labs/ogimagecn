import { ImageResponse } from "next/og";

import { Blog } from "@/registry/ogimagecn/blog";
import { Changelog } from "@/registry/ogimagecn/changelog";
import { Editorial } from "@/registry/ogimagecn/editorial";
import { Event } from "@/registry/ogimagecn/event";
import { Grid } from "@/registry/ogimagecn/grid";
import { Logo } from "@/registry/ogimagecn/logo";
import { Photo } from "@/registry/ogimagecn/photo";
import { Product } from "@/registry/ogimagecn/product";
import { Profile } from "@/registry/ogimagecn/profile";
import { Quote } from "@/registry/ogimagecn/quote";
import { Showcase } from "@/registry/ogimagecn/showcase";
import { Simple } from "@/registry/ogimagecn/simple";
import { Stat } from "@/registry/ogimagecn/stat";
import { Terminal } from "@/registry/ogimagecn/terminal";

const SIZE = { height: 630, width: 1200 };

const renderComponent = (
  name: string,
  get: (key: string) => string,
  list: (key: string) => string[]
) => {
  switch (name) {
    case "simple": {
      return (
        <Simple
          accent={get("accent")}
          brand={get("brand")}
          description={get("description")}
          label={get("label")}
          title={get("title")}
        />
      );
    }
    case "grid": {
      return (
        <Grid
          accent={get("accent")}
          brand={get("brand")}
          description={get("description")}
          title={get("title")}
        />
      );
    }
    case "blog": {
      return (
        <Blog
          accent={get("accent")}
          author={get("author")}
          avatar={get("avatar")}
          category={get("category")}
          excerpt={get("excerpt")}
          meta={get("meta")}
          title={get("title")}
        />
      );
    }
    case "changelog": {
      return (
        <Changelog
          accent={get("accent")}
          brand={get("brand")}
          date={get("date")}
          items={list("items")}
          title={get("title")}
          version={get("version")}
        />
      );
    }
    case "quote": {
      return (
        <Quote
          accent={get("accent")}
          author={get("author")}
          avatar={get("avatar")}
          handle={get("handle")}
          quote={get("quote")}
        />
      );
    }
    case "photo": {
      return (
        <Photo
          brand={get("brand")}
          image={get("image")}
          label={get("label")}
          title={get("title")}
        />
      );
    }
    case "product": {
      return (
        <Product
          accent={get("accent")}
          brand={get("brand")}
          description={get("description")}
          image={get("image")}
          price={get("price")}
          title={get("title")}
        />
      );
    }
    case "profile": {
      return (
        <Profile
          accent={get("accent")}
          avatar={get("avatar")}
          bio={get("bio")}
          name={get("name")}
          role={get("role")}
          website={get("website")}
        />
      );
    }
    case "event": {
      return (
        <Event
          accent={get("accent")}
          brand={get("brand")}
          date={get("date")}
          label={get("label")}
          location={get("location")}
          title={get("title")}
        />
      );
    }
    case "stat": {
      return (
        <Stat
          accent={get("accent")}
          brand={get("brand")}
          caption={get("caption")}
          label={get("label")}
          trend={get("trend")}
          value={get("value")}
        />
      );
    }
    case "logo": {
      return (
        <Logo
          accent={get("accent")}
          background={get("background")}
          brand={get("brand")}
          monogram={get("monogram")}
          tagline={get("tagline")}
        />
      );
    }
    case "terminal": {
      return (
        <Terminal
          accent={get("accent")}
          brand={get("brand")}
          caption={get("caption")}
          title={get("title")}
        />
      );
    }
    case "editorial": {
      return (
        <Editorial
          accent={get("accent")}
          author={get("author")}
          ghost={get("ghost")}
          kicker={get("kicker")}
          meta={get("meta")}
          title={get("title")}
        />
      );
    }
    case "showcase": {
      return (
        <Showcase
          accent={get("accent")}
          subtitle={get("subtitle")}
          title={get("title")}
          url={get("url")}
        />
      );
    }
    default: {
      return null;
    }
  }
};

/**
 * Renders any OG component as a real PNG via Satori (`next/og`).
 *
 * GET /og/component/simple?title=Hello&description=World
 *
 * This is what proves the registry components work on the server — the exact
 * same components power the live DOM previews in the docs.
 */
export const GET = async (
  request: Request,
  { params }: RouteContext<"/og/component/[name]">
) => {
  const { name } = await params;
  const sp = new URL(request.url).searchParams;
  const get = (key: string) => sp.get(key) ?? "";
  const list = (key: string) => sp.get(key)?.split("|").filter(Boolean) ?? [];

  const element = renderComponent(name, get, list);

  if (!element) {
    return new Response(`Unknown component: ${name}`, { status: 404 });
  }

  return new ImageResponse(element, SIZE);
};
