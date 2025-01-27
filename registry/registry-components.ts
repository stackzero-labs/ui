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
    dependencies: ["lucide-react"],
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
];
