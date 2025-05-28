"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic";

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

      <button
        onClick={() => setSelectedVariant("variant-m")}
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
      >
        Reset to Medium
      </button>
    </div>
  );
}
