export const siteConfig = {
  name: "commerce-ui",
  creator: "@stackzero-labs",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "https://ui.stackzero.co",
  ogImage: "https://ui.stackzero.co/opengraph-image.png",
  description:
    "stackzero/commerce-ui is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI Library",
    "UI Kit",
    "UI Components",
    "UI Elements",
    "Open Source",
    "shadcn/ui",
  ],
  links: {
    portfolio: "https://stackzero.co",
    github: "https://github.com/stackzero-labs/ui",
  },
};

export type SiteConfig = typeof siteConfig;
