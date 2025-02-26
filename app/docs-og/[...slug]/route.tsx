import { generateOGImage } from "fumadocs-ui/og";
import { metadataImage } from "@/lib/metadata";

export const GET = metadataImage.createAPI((page) => {
  return generateOGImage({
    description: page.data.description,
    site: "stackzero/commerce-ui",
    title: page.data.title,
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
