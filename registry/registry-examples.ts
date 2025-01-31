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
    name: "rating-upvote-basic-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/rating-upvote/basic/rating-upvote-basic-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/rating-upvote/basic/rating-upvote-basic-ex-01"
        )
    ),
  },
  {
    name: "rating-upvote-animated-ex-01",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/rating-upvote/animated/rating-upvote-animated-ex-01.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/rating-upvote/animated/rating-upvote-animated-ex-01"
        )
    ),
  },

  {
    name: "rating-upvote-animated-ex-02",
    type: "registry:example",
    dependencies: ["lucide-react", "@number-flow/react"],
    files: [
      {
        path: "@/components/commerce-ui/rating-upvote/animated/rating-upvote-animated-ex-02.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/rating-upvote/animated/rating-upvote-animated-ex-02"
        )
    ),
  },
];
