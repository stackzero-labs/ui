import { createMetadataImage } from "fumadocs-core/server";
import { source, blog } from "@/lib/source";

export const metadataImage = createMetadataImage({
  imageRoute: "/docs-og",
  source,
});

export const metadataImageBlog = createMetadataImage({
  imageRoute: "/blog-og",
  source: blog,
});
