// import { generateOGImage } from "fumadocs-ui/og";
import { generateOGImage } from "@/lib/generateOGImage";
import { metadataImage } from "@/lib/metadata";

export const GET = metadataImage.createAPI(async (page) => {
  return generateOGImage({
    description: page.data.description,
    primaryColor: "#8940ff34",
    primaryTextColor: "rgb(240, 228, 247)",
    site: "stackzero/commerce-ui",
    title: page.data.title,
  });
});

export function generateStaticParams() {
  return metadataImage.generateParams();
}
