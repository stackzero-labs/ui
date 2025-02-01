"use client";

import * as React from "react";
import VariantSelectorMultiple, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple";

const variants: VariantItem[] = [
  {
    id: "damage-protection",
    label: "Damage Protection",
    value: "damage-protection",
  },
  {
    id: "extended-warranty",
    label: "Extended Warranty",
    value: "extended-warranty",
  },
  {
    id: "theft-protection",
    label: "Theft Protection",
    value: "theft-protection",
  },
];

export default function VariantSelector_Basic_Ex_01() {
  const [selectedVariant, setSelectedVariant] = React.useState<string[]>([
    "extended-warranty",
  ]);

  return (
    <div className="space-y-8">
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-medium">Select Size:</legend>
        <VariantSelectorMultiple
          values={selectedVariant}
          onValuesChange={setSelectedVariant}
          variants={variants}
        />
      </fieldset>
    </div>
  );
}
