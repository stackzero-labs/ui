// import { generateOGImage } from "fumadocs-ui/og";
import { generateOGImage } from "@/lib/generateOGImage";
import { metadataImage, metadataImageBlog } from "@/lib/metadata";

export const GET = metadataImageBlog.createAPI(async (page) => {
  return generateOGImage({
    // description: page.data.description,
    site: "stackzero/commerce-ui",
    title: page.data.title,
    primaryColor: "#8940ff34",
    primaryTextColor: "rgb(240, 228, 247)",
  });
});

export function generateStaticParams() {
  return metadataImageBlog.generateParams();
}
