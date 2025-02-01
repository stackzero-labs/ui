"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";

const variants: VariantItem[] = [
  { id: "variant-xxs", label: "XXS", value: "variant-xxs" },
  { id: "variant-xs", label: "XS", value: "variant-xs" },
  { id: "variant-s", label: "S", value: "variant-s" },
  { id: "variant-m", label: "M", value: "variant-m" },
  { id: "variant-l", label: "L", value: "variant-l" },
  { id: "variant-xl", label: "XL", value: "variant-xl" },
  { id: "variant-xxl", label: "XXL", value: "variant-xxl" },
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
