"use client";

import { useState } from "react";
import VariantSelectorImages from "./variant-selector-images";

const variants = [
  {
    id: "cat-default",
    label: "Default Cat",
    url: "/placeholders/cat-default.webp",
    value: "cat-default",
  },
  {
    id: "cat-steampunk",
    label: "Steampunk Cat",
    url: "/placeholders/cat-steampunk.webp",
    value: "cat-steampunk",
  },
  {
    id: "cat-cyberpunk",
    label: "Cyberpunk Cat",
    url: "/placeholders/cat-cyberpunk.webp",
    value: "cat-cyberpunk",
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
