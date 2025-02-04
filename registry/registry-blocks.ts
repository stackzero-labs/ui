import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "example-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
      "https://ui.stackzero.co/r/image-carousel-horizontal.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/test-block.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/test-block")
    ),
  },
];
