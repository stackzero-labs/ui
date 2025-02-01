"use client";

import * as React from "react";
import VariantSelectorAnimated from "./variant-selector-animated";

const variants = [
  { id: "variant-a", label: "Sport", value: "variant-a" },
  { id: "variant-b", label: "Pro", value: "variant-b" },
  { id: "variant-c", label: "UltraQuite™", value: "variant-c" },
  { id: "variant-d", label: "ExtremeSilence™", value: "variant-d" },
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
