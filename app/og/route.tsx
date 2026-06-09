import { ImageResponse } from "next/og";

import { SITE } from "@/constants/site";
import { Grid } from "@/registry/ogimagecn/grid";

export const GET = (request: Request) => {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || SITE.NAME;
  const description = searchParams.get("description") || SITE.DESCRIPTION.SHORT;

  return new ImageResponse(
    <Grid brand={SITE.NAME} description={description} title={title} />,
    { height: 630, width: 1200 }
  );
};
