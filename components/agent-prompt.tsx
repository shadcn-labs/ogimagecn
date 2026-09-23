"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { motionIconProps } from "@/components/copy-button";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { FALLBACK_SITE_ORIGIN, SITE } from "@/constants/site";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { trackEvent } from "@/lib/events";
import { cn } from "@/lib/utils";

const installCommand = `npx shadcn@latest add ${SITE.REGISTRY}/simple`;

const agentInstallPrompt = `Read the ogimagecn agent instructions at ${FALLBACK_SITE_ORIGIN}${ROUTES.LLMS}, then install ogimagecn in this project. Run ${installCommand}; the component is copied to "@/components/og/simple" and has no dependencies. Then add an Open Graph image route at app/og/route.tsx that returns new ImageResponse(<Simple />, { width: 1200, height: 630 }) using ImageResponse from "next/og", passing every required prop (label, title, description, brand) and reading the title from the query string. Point the page's openGraph.images and twitter.images metadata at that route, with the twitter card set to "summary_large_image". If another card fits the project better, browse ${FALLBACK_SITE_ORIGIN}${ROUTES.DOCS_COMPONENTS} and install it, such as ${SITE.REGISTRY}/blog or ${SITE.REGISTRY}/changelog, instead of building one from scratch. Components are built on Satori, so keep any edits to flexbox and inline styles. Preserve the existing Tailwind CSS and shadcn/ui setup. Do not manually rewrite registry components unless the command fails; if it fails, inspect ${FALLBACK_SITE_ORIGIN}/r/simple.json and copy the file it lists.`;

export const AgentPrompt = ({ className }: { className?: string }) => {
  const { copyToClipboard, isCopied } = useCopyToClipboard({ timeout: 2500 });

  const handleCopy = async () => {
    const hasCopied = await copyToClipboard(agentInstallPrompt);

    if (hasCopied) {
      trackEvent({ name: "copy_agent_prompt" });
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="xs"
      sound="copy"
      aria-live="polite"
      onClick={handleCopy}
      className={cn(
        "text-muted-foreground hover:text-foreground h-7 px-2.5",
        className
      )}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {isCopied ? (
          <motion.span key="done" {...motionIconProps}>
            <CheckIcon />
          </motion.span>
        ) : (
          <motion.span key="idle" {...motionIconProps}>
            <CopyIcon />
          </motion.span>
        )}
      </AnimatePresence>
      {isCopied
        ? "Copied — paste into your agent"
        : "Copy prompt for your agent"}
    </Button>
  );
};
