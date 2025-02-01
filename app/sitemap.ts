import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

export const revalidate = false;

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string): string =>
    new URL(path, siteConfig.url).toString();

  return [
    {
      changeFrequency: "monthly",
      priority: 1,
      url: url("/"),
    },
    {
      changeFrequency: "monthly",
      priority: 0.8,
      url: url("/docs"),
    },

    ...source.getPages().map<MetadataRoute.Sitemap[number]>((page) => ({
      changeFrequency: "weekly",
      lastModified: page.data.lastModified
        ? new Date(page.data.lastModified)
        : undefined,
      priority: 0.5,
      url: url(page.url),
    })),
  ];
}
