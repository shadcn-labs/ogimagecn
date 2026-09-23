import { AgentPrompt } from "@/components/agent-prompt";
import { CommandBox } from "@/components/command-box";
import { ComponentPreview } from "@/components/component-preview";
import { HomeCtas } from "@/components/home-ctas";
import { PageHero } from "@/components/page-hero";
import { PageTransition } from "@/components/page-transition";
import { ROUTES } from "@/constants/routes";
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
            <PageHero
              description={
                <>
                  Ready to use, customizable Open Graph image components for
                  React. <br className="hidden sm:block" />
                  Built on Satori. Distributed via shadcn.
                </>
              }
              descriptionClassName="max-w-2xl text-lg sm:text-xl"
              showAnnouncement
              title="Beautiful OG images, made simple"
              titleClassName="max-w-7xl"
            />

            <CommandBox className="mt-4 w-full max-w-xl" />

            <HomeCtas className="mt-4" />

            <AgentPrompt />
          </div>
        </section>

        <section className="container-wrapper pb-12 lg:pb-20">
          <div className="container grid gap-6 sm:grid-cols-2">
            <ComponentPreview name="simple" hideCustomizer />
            <ComponentPreview name="quote" hideCustomizer />
            <ComponentPreview name="grid" hideCustomizer />
            <ComponentPreview name="showcase" hideCustomizer />
          </div>
        </section>
      </PageTransition>
    </>
  );
}
