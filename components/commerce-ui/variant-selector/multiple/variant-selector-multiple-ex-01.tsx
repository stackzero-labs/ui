"use client";

import * as React from "react";
import VariantSelectorMultiple, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple";

const variants: VariantItem[] = [
  {
    id: "damage-protection",
    value: "damage-protection",
    label: "Damage Protection",
  },
  {
    id: "extended-warranty",
    value: "extended-warranty",
    label: "Extended Warranty",
  },
  {
    id: "theft-protection",
    value: "theft-protection",
    label: "Theft Protection",
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
