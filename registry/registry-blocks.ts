import type { Registry } from "@/registry/schema";
import * as React from "react";

export const blocks: Registry = [
  {
    name: "banner-01-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-01")
    ),
  },

  {
    name: "banner-02-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-02.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-02")
    ),
  },

  {
    name: "banner-03-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-03.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-03")
    ),
  },

  {
    name: "banner-04-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-04.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-04")
    ),
  },

  {
    name: "banner-05-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-05.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-05")
    ),
  },

  {
    name: "banner-06-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-06.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-06")
    ),
  },

  {
    name: "banner-07-block",
    type: "registry:block",
    dependencies: ["@number-flow/react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-07.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-07")
    ),
  },

  {
    name: "banner-08-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-08.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-08")
    ),
  },

  {
    name: "banner-09-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-09.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-09")
    ),
  },

  {
    name: "banner-10-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-10.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-10")
    ),
  },

  {
    name: "banner-11-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-11.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-11")
    ),
  },

  {
    name: "banner-12-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/blocks/banners/banner-12.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/banners/banner-12")
    ),
  },

  {
    name: "product-card-01-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-01")
    ),
  },

  {
    name: "product-card-02-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-02.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-02")
    ),
  },

  {
    name: "product-card-03-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-03.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-03")
    ),
  },

  {
    name: "product-card-04-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-04.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-04")
    ),
  },

  {
    name: "product-card-05-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-05.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-05")
    ),
  },

  {
    name: "product-card-06-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-06.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-06")
    ),
  },

  {
    name: "product-card-07-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-07.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-07")
    ),
  },

  {
    name: "product-card-08-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-08.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-08")
    ),
  },

  {
    name: "product-card-09-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-09.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-09")
    ),
  },

  {
    name: "product-card-10-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-10.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-10")
    ),
  },

  {
    name: "product-card-11-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-11.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-11")
    ),
  },

  {
    name: "product-card-12-block",
    type: "registry:block",
    dependencies: [],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-12.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-12")
    ),
  },

  {
    name: "product-card-13-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-card/product-card-13.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/blocks/product-card/product-card-13")
    ),
  },

  {
    name: "product-variant-01-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "badge",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/variant-selector-basic.json",
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-01"
        )
    ),
  },

  {
    name: "product-variant-02-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "badge",
      "separator",
      "https://ui.stackzero.co/r/image-viewer-basic.json",
      "https://ui.stackzero.co/r/price-format-sale.json",
      "https://ui.stackzero.co/r/variant-selector-basic.json",
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-02.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-02"
        )
    ),
  },

  {
    name: "product-variants-carousel-01-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "badge",
      "separator",
      "https://ui.stackzero.co/r/image-carousel-basic.json",
      "https://ui.stackzero.co/r/price-format-basic.json",
      "https://ui.stackzero.co/r/variant-selector-basic.json",
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants-carousel/product-variants-carousel-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants-carousel/product-variants-carousel-01"
        )
    ),
  },

  {
    name: "review-01-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/blocks/reviews/review-01.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/reviews/review-01")
    ),
  },
  {
    name: "review-02-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/reviews/review-02.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/reviews/review-02")
    ),
  },

  {
    name: "review-03-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "button",
      "https://ui.stackzero.co/r/star-rating-basic.json",
      "https://ui.stackzero.co/r/like-rating-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/reviews/review-03.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/reviews/review-03")
    ),
  },

  {
    name: "review-04-block",
    type: "registry:block",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/reviews/review-04.tsx",
        type: "registry:block",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/reviews/review-04")
    ),
  },
];
