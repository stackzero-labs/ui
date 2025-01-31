"use client";

import * as React from "react";
import VariantSelectorAnimated from "./variant-selector-animated";

const variants = [
  { id: "variant-a", value: "variant-a", label: "Sport" },
  { id: "variant-b", value: "variant-b", label: "Pro" },
  { id: "variant-c", value: "variant-c", label: "UltraQuite™" },
  { id: "variant-d", value: "variant-d", label: "ExtremeSilence™" },
];

const VariantSelectorAnimatedExample = () => {
  const [selectedVariant, setSelectedVariant] = React.useState("variant-b");

  return (
    <div className="flex flex-col gap-4">
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-medium">Select Variant:</legend>
        <VariantSelectorAnimated
          value={selectedVariant}
          onValueChange={setSelectedVariant}
          variants={variants}
        />
      </fieldset>
    </div>
  );
};

export default VariantSelectorAnimatedExample;
