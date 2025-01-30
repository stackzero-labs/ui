import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "image-carousel-01-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/examples/image-carousel-01-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/examples/image-carousel-01-ex-01"
        )
    ),
  },
  {
    name: "image-carousel-01-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/examples/image-carousel-01-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/examples/image-carousel-01-ex-02"
        )
    ),
  },
  {
    name: "image-carousel-01-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/examples/image-carousel-01-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/examples/image-carousel-01-ex-03"
        )
    ),
  },

  {
    name: "price-format-01-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/price-format/examples/price-format-01-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/price-format/examples/price-format-01-ex-01"
        )
    ),
  },
];
