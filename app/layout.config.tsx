import { HeaderCustomLinks } from "@/components/landing/header-custom-links";
import { Icons } from "@/components/ui/icons";
import { siteConfig } from "@/config/site";
import { LinkItemType } from "fumadocs-ui/layouts/links";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const linkItems: LinkItemType[] = [
  {
    items: [
      {
        description: "Getting started with commerce-ui",
        icon: <Icons.album />,
        text: "Getting Started",
        url: "/docs",
      },
      {
        description: "Collection of interactive components",
        icon: <Icons.lab />,
        text: "Components",
        url: "/docs/components/rating-star/basic",
      },
      {
        description: "Collection of text components",
        icon: <Icons.caseLower />,
        text: "Texts",
        url: "/docs/texts/test",
      },
    ],
    text: "Docs",
    type: "menu",
    url: "/docs",
  },
  {
    active: "nested-url",
    icon: <Icons.news />,
    label: "Stackzero Blog",
    text: "Blog",
    url: "/blog",
  },
  {
    children: <HeaderCustomLinks />,
    type: "custom",
  },
  {
    external: true,
    icon: (
      <svg role="img" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    text: "GitHub",
    type: "icon",
    url: siteConfig.links.github,
  },
];

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  links: [...linkItems],
  nav: {
    title: (
      <div className="relative flex items-center space-x-2">
        {/* <Icons.logo /> */}
        <div className="text-sm font-semibold text-nowrap sm:inline-block">
          {siteConfig.name}
        </div>
        <span className="bg-secondary text-foreground ml-0.5 hidden rounded-full px-1.5 py-px text-[10px] font-medium select-none md:block">
          beta
        </span>
      </div>
    ),
    transparentMode: "top",
  },
};
