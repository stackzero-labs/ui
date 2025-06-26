import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "cart-01-block-ex",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/cart-01-block.json"],
    files: [
      {
        path: "@/components/commerce-ui/blocks/carts/cart-01-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/blocks/carts/cart-01-ex")
    ),
  },

  {
    name: "image-carousel-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-01"
        )
    ),
  },

  {
    name: "image-carousel-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-02"
        )
    ),
  },

  {
    name: "image-carousel-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-03"
        )
    ),
  },
  {
    name: "image-carousel-basic-ex-04",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-carousel-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-04.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-carousel/basic/image-carousel-basic-ex-04"
        )
    ),
  },

  {
    name: "image-viewer-basic-ex-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/image-viewer-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic-ex-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-viewer/basic/image-viewer-basic-ex-01"
        )
    ),
  },

  {
    name: "image-viewer-basic-ex-02",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/image-viewer-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic-ex-02.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-viewer/basic/image-viewer-basic-ex-02"
        )
    ),
  },

  {
    name: "image-viewer-motion-ex-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/image-viewer-motion.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/image-viewer/motion/image-viewer-motion-ex-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/image-viewer/motion/image-viewer-motion-ex-01"
        )
    ),
  },

  {
    name: "input-icon-ex-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/input-icon.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/inputs/icon/input-icon-ex-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/inputs/icon/input-icon-ex-01"
        )
    ),
  },

  {
    name: "phone-number-input-basic-ex-01",
    type: "registry:example",
    dependencies: [
      "lucide-react",
      "zod",
      "react-hook-form",
      "@hookform/resolvers",
    ],
    registryDependencies: [
      "https://ui.stackzero.co/r/phone-number-input-basic.json",
      "button",
      "form",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/phone-number-input/basic/phone-number-input-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/phone-number-input/basic/phone-number-input-basic-ex-01"
        )
    ),
  },

  {
    name: "price-format-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/price-format-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/basic/price-format-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/basic/price-format-basic-ex-01"
        )
    ),
  },

  {
    name: "price-format-sale-ex-01",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["https://ui.stackzero.co/r/price-format-sale.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/sale/price-format-sale-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/sale/price-format-sale-ex-01"
        )
    ),
  },

  {
    name: "price-format-sale-ex-02",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["https://ui.stackzero.co/r/price-format-sale.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/sale/price-format-sale-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/sale/price-format-sale-ex-02"
        )
    ),
  },

  {
    name: "price-format-sale-ex-03",
    type: "registry:example",
    dependencies: [],
    registryDependencies: ["https://ui.stackzero.co/r/price-format-sale.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/price-format/sale/price-format-sale-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/price-format/sale/price-format-sale-ex-03"
        )
    ),
  },

  {
    name: "product-variant-01-block-ex",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [
      "https://ui.stackzero.co/r/product-variant-01-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-01-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-01-ex"
        )
    ),
  },

  {
    name: "product-variant-02-block-ex",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [
      "https://ui.stackzero.co/r/product-variant-02-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-02-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-02-ex"
        )
    ),
  },

  {
    name: "product-variant-03-block-ex",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [
      "https://ui.stackzero.co/r/product-variant-03-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-03-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-03-ex"
        )
    ),
  },

  {
    name: "product-variant-04-block-ex",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [
      "https://ui.stackzero.co/r/product-variant-04-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-04-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-04-ex"
        )
    ),
  },

  {
    name: "product-variant-05-block-ex",
    type: "registry:example",
    dependencies: [],
    registryDependencies: [
      "https://ui.stackzero.co/r/product-variant-05-block.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/blocks/product-variants/product-variants-05-ex.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/blocks/product-variants/product-variants-05-ex"
        )
    ),
  },

  {
    name: "quantity-input-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/quantity-input/basic/quantity-input-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/quantity-input/basic/quantity-input-ex-01"
        )
    ),
  },

  {
    name: "quantity-input-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/quantity-input/basic/quantity-input-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/quantity-input/basic/quantity-input-ex-02"
        )
    ),
  },

  {
    name: "quantity-input-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/quantity-input-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/quantity-input/basic/quantity-input-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/quantity-input/basic/quantity-input-ex-03"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-01"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],

    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-02"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/face-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/basic/face-rating-basic-ex-03"
        )
    ),
  },
  {
    name: "face-rating-gradient-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/face-rating-gradient.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/face-rating/gradient/face-rating-gradient-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/face-rating/gradient/face-rating-gradient-ex-01"
        )
    ),
  },

  {
    name: "like-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/like-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/like-rating/basic/like-rating-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/like-rating/basic/like-rating-ex-01"
        )
    ),
  },

  {
    name: "star-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-01"
        )
    ),
  },

  {
    name: "star-rating-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-02"
        )
    ),
  },

  {
    name: "star-rating-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["https://ui.stackzero.co/r/star-rating-basic.json"],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/basic/star-rating-basic-ex-03"
        )
    ),
  },

  {
    name: "star-rating-fractions-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-01"
        )
    ),
  },

  {
    name: "star-rating-fractions-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-02"
        )
    ),
  },

  {
    name: "star-rating-fractions-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/star-rating-fractions.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/star-rating/fractions/star-rating-fractions-ex-03"
        )
    ),
  },

  {
    name: "upvote-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/upvote-rating-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic-ex-01"
        )
    ),
  },

  {
    name: "upvote-rating-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/upvote-rating-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic-ex-02"
        )
    ),
  },

  {
    name: "upvote-rating-animated-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/upvote-rating-animated.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated-ex-01"
        )
    ),
  },

  {
    name: "upvote-rating-animated-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    registryDependencies: [
      "https://ui.stackzero.co/r/upvote-rating-animated.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/upvote-rating/animated/upvote-rating-animated-ex-02"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-02"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-03"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-04",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-04.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-04"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-05",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-05.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/basic/variant-selector-basic-ex-05"
        )
    ),
  },

  {
    name: "variant-selector-images-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-images.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/images/variant-selector-images-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/images/variant-selector-images-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-multiple-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-toggle-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-multiple.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-multiple-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-toggle-group"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-selector-multiple.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple-ex-02"
        )
    ),
  },

  {
    name: "variant-color-selector-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    registryDependencies: [
      "https://ui.stackzero.co/r/variant-color-selector-basic.json",
    ],
    files: [
      {
        path: "@/components/commerce-ui/components/variant-color-selector/basic/variant-color-selector-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/components/variant-color-selector/basic/variant-color-selector-basic-ex-01"
        )
    ),
  },
];
