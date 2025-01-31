"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";

const variants: VariantItem[] = [
  { id: "variant-xxs", value: "variant-xxs", label: "XXS" },
  { id: "variant-xs", value: "variant-xs", label: "XS" },
  { id: "variant-s", value: "variant-s", label: "S" },
  { id: "variant-m", value: "variant-m", label: "M" },
  { id: "variant-l", value: "variant-l", label: "L" },
  { id: "variant-xl", value: "variant-xl", label: "XL" },
  { id: "variant-xxl", value: "variant-xxl", label: "XXL" },
];

export default function VariantSelector_Basic_Ex_01() {
  const [selectedVariant, setSelectedVariant] = React.useState("variant-m");

  return (
    <div className="space-y-8">
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-medium">Select Size:</legend>
        <VariantSelectorBasic
          value={selectedVariant}
          onValueChange={setSelectedVariant}
          variants={variants}
        />
      </fieldset>

      <div className="text-sm text-muted-foreground">
        Selected size:{" "}
        <span className="font-medium text-foreground">{selectedVariant}</span>
      </div>

      <button
        onClick={() => setSelectedVariant("variant-m")}
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Reset to Medium
      </button>
    </div>
  );
}
