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

export default function VariantSelector_Basic_Ex_02() {
  const [selectedVariant1, setSelectedVariant1] = React.useState("variant-m");
  const [selectedVariant2, setSelectedVariant2] = React.useState("variant-m");

  return (
    <div className="flex items-center gap-6 space-y-8">
      <fieldset className="max-w-sm">
        <legend className="mb-2 text-sm font-medium">Select Size:</legend>
        <VariantSelectorBasic
          value={selectedVariant1}
          onValueChange={setSelectedVariant1}
          variants={variants}
          className="max-w-[100px] grid-cols-1 sm:grid-cols-1"
        />
      </fieldset>
      <fieldset className="max-w-sm">
        <legend className="mb-2 text-sm font-medium">Select Size:</legend>
        <VariantSelectorBasic
          value={selectedVariant2}
          onValueChange={setSelectedVariant2}
          variants={variants}
          className="grid-cols-7 sm:grid-cols-7"
        />
      </fieldset>
    </div>
  );
}
