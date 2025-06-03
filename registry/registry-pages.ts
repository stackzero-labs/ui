import type { Registry } from "@/registry/schema";
import * as React from "react";

export const pages: Registry = [
  {
    name: "product-01-page",
    type: "registry:page",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/pages/product-01/page.tsx",
        type: "registry:page",
        target: "app/product/page.tsx",
      },
      {
        path: "@/components/commerce-ui/blocks/reviews/review-04.tsx",
        type: "registry:block",
      },
      {
        path: "@/components/commerce-ui/blocks/banners/banner-08.tsx",
        type: "registry:block",
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
