import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  {
    name: "face-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/basic/face-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/basic/face-rating-basic"
        )
    ),
  },

  {
    name: "face-rating-gradient",
    type: "registry:component",
    dependencies: ["lucide-react", "tinycolor2"],
    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/gradient/face-rating-gradient.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/gradient/face-rating-gradient"
        )
    ),
  },

  {
    name: "image-carousel-basic",
    type: "registry:component",
    dependencies: [
      "@radix-ui/react-dialog",
      "lucide-react",
      "embla-carousel-react",
      "embla-carousel",
      "react-zoom-pan-pinch",
    ],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-carousel/basic/image-carousel-basic"
        )
    ),
  },

  {
    name: "image-viewer-basic",
    type: "registry:component",
    dependencies: [
      "@radix-ui/react-dialog",
      "lucide-react",
      "react-zoom-pan-pinch",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-viewer/basic/image-viewer-basic"
        )
    ),
  },

  {
    name: "image-viewer-motion",
    type: "registry:component",
    dependencies: [
      "@radix-ui/react-dialog",
      "lucide-react",
      "react-zoom-pan-pinch",
      "tailwind-motion",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-viewer/motion/image-viewer-motion.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-viewer/motion/image-viewer-motion"
        )
    ),
  },

  {
    name: "like-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/components/like-rating/basic/like-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/like-rating/basic/like-rating-basic"
        )
    ),
  },

  {
    name: "price-format-basic",
    type: "registry:component",
    dependencies: ["lucide-react", "react-number-format"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/basic/price-format-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/basic/price-format-basic"
        )
    ),
  },

  {
    name: "price-format-sale",
    type: "registry:component",
    dependencies: ["lucide-react", "react-number-format"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/sale/price-format-sale.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/sale/price-format-sale"
        )
    ),
  },

  {
    name: "quantity-input-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [],
    files: [
      {
        path: "@/components/commerce-ui/components/quantity-input/basic/quantity-input-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/quantity-input/basic/quantity-input-basic"
        )
    ),
  },

  {
    name: "star-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/basic/star-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/basic/star-rating-basic"
        )
    ),
  },

  {
    name: "star-rating-fractions",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/fractions/star-rating-fractions"
        )
    ),
  },

  {
    name: "upvote-rating-animated",
    type: "registry:component",
    dependencies: ["lucide-react", "@number-flow/react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated"
        )
    ),
  },

  {
    name: "upvote-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic"
        )
    ),
  },

  {
    name: "variant-color-selector-basic",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-color-selector/basic/variant-color-selector-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-color-selector/basic/variant-color-selector-basic"
        )
    ),
  },

  {
    name: "variant-selector-basic",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic"
        )
    ),
  },

  {
    name: "variant-selector-images",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/images/variant-selector-images.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/images/variant-selector-images"
        )
    ),
  },

  {
    name: "variant-selector-multiple",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-toggle-group"],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple"
        )
    ),
  },
];
