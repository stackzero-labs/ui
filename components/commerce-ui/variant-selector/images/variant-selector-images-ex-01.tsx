"use client";

import { useState } from "react";
import VariantSelectorImages from "./variant-selector-images";

const variants = [
  {
    id: "cat-default",
    value: "cat-default",
    label: "Default Cat",
    url: "/placeholders/cat-default.webp",
  },
  {
    id: "cat-steampunk",
    value: "cat-steampunk",
    label: "Steampunk Cat",
    url: "/placeholders/cat-steampunk.webp",
  },
  {
    id: "cat-cyberpunk",
    value: "cat-cyberpunk",
    label: "Cyberpunk Cat",
    url: "/placeholders/cat-cyberpunk.webp",
  },
];

export default function VariantSelector_Images_Ex_01() {
  const [selected, setSelected] = useState("cat-default");

  return (
    <div className="flex flex-col gap-4">
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-medium">Select Variant:</legend>
        <VariantSelectorImages
          value={selected}
          onValueChange={setSelected}
          variants={variants}
        />
      </fieldset>
      <p className="text-center text-sm text-muted-foreground">
        Selected variant: {selected}
      </p>
    </div>
  );
}
