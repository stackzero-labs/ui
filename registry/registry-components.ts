import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  {
    name: "face-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/basic/face-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/face-rating/basic/face-rating-basic")
    ),
  },

  {
    name: "face-rating-gradient",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/gradient/face-rating-gradient.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/face-rating/gradient/face-rating-gradient"
        )
    ),
  },
  {
    name: "upvote-downvote-rating-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-01"
        )
    ),
  },
  {
    name: "upvote-downvote-rating-02",
    type: "registry:component",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-02.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-02"
        )
    ),
  },

  {
    name: "upvote-downvote-rating-03",
    type: "registry:component",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-03.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-03"
        )
    ),
  },
  {
    name: "upvote-downvote-rating-04",
    type: "registry:component",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-04.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-04"
        )
    ),
  },

  {
    name: "upvote-downvote-rating-05",
    type: "registry:component",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-05.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-downvote-rating/upvote-downvote-rating-05"
        )
    ),
  },

  {
    name: "star-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/star-rating/basic/star-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/star-rating/basic/star-rating-basic")
    ),
  },

  {
    name: "like-rating-basic",
    type: "registry:component",
    dependencies: ["lucide-react"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/like-rating/basic/like-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/like-rating/basic/like-rating-basic")
    ),
  },

  {
    name: "variant-color-selector-basic",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic"
        )
    ),
  },

  {
    name: "image-carousel-horizontal",
    type: "registry:component",
    dependencies: ["lucide-react", "embla-carousel-react", "embla-carousel"],
    registryDependencies: ["button"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal"
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
        path: "@/components/commerce-ui/price-format/basic/price-format-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/price-format/basic/price-format-basic"
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
        path: "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-rating/basic/upvote-rating-basic"
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
        path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated"
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
        path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/basic/variant-selector-basic"
        )
    ),
  },

  {
    name: "variant-selector-images",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/images/variant-selector-images.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/images/variant-selector-images"
        )
    ),
  },

  {
    name: "variant-selector-animated",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/animated/variant-selector-animated"
        )
    ),
  },

  {
    name: "variant-selector-multiple",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/multiple/variant-selector-multiple"
        )
    ),
  },
];
