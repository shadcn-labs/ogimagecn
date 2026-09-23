import type { Metadata } from "next";
import Link from "next/link";

import { OgTester } from "@/components/og-tester";
import { PageHero } from "@/components/page-hero";
import { PageTransition } from "@/components/page-transition";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button-variants";
import { ROUTES } from "@/constants/routes";
import { FAQS, SECTIONS } from "@/content/scan/wechat";
import { otherScanPages, scanBreadcrumbs } from "@/lib/scan";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/seo/json-ld";
import { createPageMetadata } from "@/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  description:
    "See the card WeChat will send for your link: link form from the title tag, or a custom card when the page uses WeChat's JS-SDK. Scan a URL before you share it.",
  path: ROUTES.SCAN_WECHAT,
  title: "WeChat Open Graph Preview",
});

const WeChatScanPage = () => (
  <PageTransition>
    <section className="container-wrapper relative">
      <div className="container flex flex-col gap-12 py-16 md:py-20 lg:py-24">
        <PageHero
          description="Paste a URL and see the link preview WeChat will build from it."
          title="WeChat Open Graph Preview"
        />

        <OgTester platform="wechat" />

        <section className="mx-auto flex w-full max-w-2xl flex-col gap-10">
          {SECTIONS.map((section) => (
            <article className="flex flex-col gap-3" key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <div className="text-muted-foreground flex flex-col gap-3 text-sm leading-relaxed">
                {section.body}
              </div>
            </article>
          ))}

          <article className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Frequently asked questions
            </h2>
            <Accordion collapsible type="single">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger sound="click">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </article>

          <nav className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight">
              Check another platform
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherScanPages("wechat").map((page) => (
                <Link
                  className={buttonVariants({ size: "sm", variant: "outline" })}
                  href={page.href}
                  key={page.href}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </nav>

          <FaqJsonLd items={FAQS} />
          <BreadcrumbJsonLd items={scanBreadcrumbs("wechat")} />
        </section>
      </div>
    </section>
  </PageTransition>
);

export default WeChatScanPage;
