import type { Registry } from "@/registry/schema";
import * as React from "react";

export const components: Registry = [
  {
    name: "face-rating-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/face-rating-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/face-rating/face-rating-01")
    ),
  },
  {
    name: "face-rating-02",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/face-rating-02.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/face-rating/face-rating-02")
    ),
  },
  {
    name: "face-rating-03",
    type: "registry:component",
    dependencies: ["lucide-react", "tailwindcss-motion"],
    files: [
      {
        path: "@/components/commerce-ui/face-rating/face-rating-03.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/face-rating/face-rating-03")
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
    name: "star-rating-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/star-rating/star-rating-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/star-rating/star-rating-01")
    ),
  },

  {
    name: "like-dislike-rating-01",
    type: "registry:component",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/like-dislike-rating/like-dislike-rating-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/like-dislike-rating/like-dislike-rating-01"
        )
    ),
  },

  {
    name: "variant-selector-01",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/variant-selector-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/variant-selector/variant-selector-01")
    ),
  },
  {
    name: "variant-selector-02",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/variant-selector-02.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/variant-selector/variant-selector-02")
    ),
  },
  {
    name: "variant-selector-03",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group", "motion"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/variant-selector-03.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/variant-selector/variant-selector-03")
    ),
  },
  {
    name: "variant-selector-04",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-selector/variant-selector-04.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import("../components/commerce-ui/variant-selector/variant-selector-04")
    ),
  },

  {
    name: "variant-color-selector-01",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/variant-color-selector/variant-color-selector-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/variant-color-selector/variant-color-selector-01"
        )
    ),
  },

  {
    name: "image-carousel-01",
    type: "registry:component",
    dependencies: ["lucide-react", "@radix-ui/react-radio-group"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/image-carousel-01.tsx",
        type: "registry:component",
      },
    ],
    component: React.lazy(
      () => import("../components/commerce-ui/image-carousel/image-carousel-01")
    ),
  },
];
