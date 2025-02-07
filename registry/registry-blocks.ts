import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "product-card-01-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-horizontal.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-cards/product-cards-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-cards/product-cards-01"
        )
    ),
  },

  {
    name: "product-card-02-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
      "https://ui.stackzero.co/r/image-carousel-horizontal.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-cards/product-cards-02.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-cards/product-cards-02"
        )
    ),
  },

  {
    name: "product-card-03-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-cards/product-cards-03.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-cards/product-cards-03"
        )
    ),
  },
];
