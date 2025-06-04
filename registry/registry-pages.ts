import type { Registry } from "@/registry/schema";
import * as React from "react";

export const pages: Registry = [
  {
    name: "product-01-page",
    type: "registry:page",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "accordion",
      "breadcrumb",
      "button",
      "dropdown-menu",
      "input",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
      "https://ui.stackzero.co/r/product-variant-01-block.json",
      "https://ui.stackzero.co/r/banner-08-block.json",
      "https://ui.stackzero.co/r/review-04-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/pages/product-01/page.tsx",
        type: "registry:page",
        target: "app/product/page.tsx",
      },
      {
        path: "@/components/commerce-ui/pages/product-01/components/product.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/commerce-ui/pages/product-01/components/product-info.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/commerce-ui/pages/product-01/components/store-header.tsx",
        type: "registry:component",
      },
      {
        path: "@/components/commerce-ui/pages/product-01/components/store-navigation.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/pages/product-01/page")
    ),
  },
];
