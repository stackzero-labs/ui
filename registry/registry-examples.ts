import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "image-carousel-horizontal-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-01"
        )
    ),
  },

  {
    name: "image-carousel-horizontal-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-02"
        )
    ),
  },

  {
    name: "image-carousel-horizontal-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-03"
        )
    ),
  },

  {
    name: "price-format-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/price-format/basic/price-format-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/price-format/basic/price-format-basic-ex-01"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-01"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-02"
        )
    ),
  },

  {
    name: "face-rating-basic-ex-03",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/basic/face-rating-basic-ex-03.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/face-rating/basic/face-rating-basic-ex-03"
        )
    ),
  },
  {
    name: "face-rating-gradient-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/gradient/face-rating-gradient-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/face-rating/gradient/face-rating-gradient-ex-01"
        )
    ),
  },

  {
    name: "like-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/like-rating/basic/like-rating-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/like-rating/basic/like-rating-ex-01")
    ),
  },

  {
    name: "star-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/star-rating/basic/star-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/star-rating/basic/star-rating-basic-ex-01"
        )
    ),
  },

  {
    name: "upvote-rating-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-rating/basic/upvote-rating-basic-ex-01"
        )
    ),
  },
  {
    name: "upvote-rating-animated-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-01"
        )
    ),
  },

  {
    name: "upvote-rating-animated-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/upvote-rating/animated/upvote-rating-animated-ex-02"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-basic-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/basic/variant-selector-basic-ex-02"
        )
    ),
  },

  {
    name: "variant-selector-images-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/images/variant-selector-images-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/images/variant-selector-images-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-animated-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-01"
        )
    ),
  },

  {
    name: "variant-selector-animated-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/animated/variant-selector-animated-ex-02"
        )
    ),
  },

  {
    name: "variant-selector-multiple-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-selector/multiple/variant-selector-multiple-ex-01"
        )
    ),
  },

  {
    name: "variant-color-selector-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-color-selector/basic/variant-color-selector-basic-ex-01"
        )
    ),
  },
];
