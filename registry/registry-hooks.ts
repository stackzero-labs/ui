import type { Registry } from "./schema";

export const hooks: Registry = [
  {
    name: "use-auto-resize-textarea",
    type: "registry:hook",
    files: [
      {
        path: "hooks/use-auto-resize-textarea.ts",
        type: "registry:hook",
      },
    ],
  },
];
