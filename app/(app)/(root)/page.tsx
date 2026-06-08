import { CommandBox } from "@/components/command-box";
import { ComponentPreview } from "@/components/component-preview";
import { HomeCtas } from "@/components/home-ctas";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
import { Grid } from "@/registry/ogcn/grid";
import { Quote } from "@/registry/ogcn/quote";
import { Showcase } from "@/registry/ogcn/showcase";
import { Simple } from "@/registry/ogcn/simple";
import { BreadcrumbJsonLd } from "@/seo/json-ld";

export const dynamic = "force-static";
export const revalidate = false;

export default function IndexPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: ROUTES.HOME }]} />
      <PageTransition>
        <section className="container-wrapper relative">
          <div className="container flex flex-col items-center gap-4 py-16 text-center md:py-20 lg:py-24">
            <h1 className="max-w-7xl bg-linear-to-b from-foreground via-foreground to-foreground/65 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
              Beautiful OG images, made simple
            </h1>

            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Ready to use, customizable Open Graph image components for React.
              Built on Satori. Distributed via shadcn.
            </p>

            <CommandBox className="mt-4 w-full max-w-xl" />

            <HomeCtas className="mt-4" />
          </div>
        </section>

        <section className="container-wrapper pb-12 lg:pb-20">
          <div className="container grid gap-6 sm:grid-cols-2">
            <ComponentPreview>
              <Simple {...Simple.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Quote {...Quote.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Grid {...Grid.previewProps} />
            </ComponentPreview>
            <ComponentPreview>
              <Showcase {...Showcase.previewProps} />
            </ComponentPreview>
          </div>
        </section>
      </PageTransition>
    </>
  );
}
