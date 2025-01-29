import type { Registry } from "@/registry/schema";
import * as React from "react";

export const examples: Registry = [
  {
    name: "image-carousel-01-example",
    type: "registry:example",
    dependencies: ["lucide-react"],
    files: [
      {
        path: "@/components/commerce-ui/image-carousel/examples/image-carousel-01.example.tsx",
        type: "registry:example",
      },
    ],
    component: React.lazy(
      () =>
        import(
          "../components/commerce-ui/image-carousel/examples/image-carousel-01.example"
        )
    ),
  },
];
