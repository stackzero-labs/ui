"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";

// Example size variants
const sizeVariants: VariantItem[] = [
  { id: "size-xs", label: "XS", value: "size-xs" },
  { id: "size-s", label: "S", value: "size-s" },
  { id: "size-m", label: "M", value: "size-m" },
  { id: "size-l", label: "L", value: "size-l" },
  { id: "size-xl", label: "XL", value: "size-xl" },
];

export default function VariantSelector_Basic_Ex_04() {
  const [selectedSize, setSelectedSize] = React.useState("size-m");

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Pill Style
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Rounded pill-shaped variant buttons with custom active state using
          data-state
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Size:
          </label>
          <VariantSelectorBasic
            value={selectedSize}
            onValueChange={setSelectedSize}
            variants={sizeVariants}
            className="gap-2"
            itemClassName="rounded-full min-w-[60px] bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800
                        data-[state=checked]:bg-gray-900 data-[state=checked]:border-gray-900 data-[state=checked]:text-white 
                        dark:data-[state=checked]:bg-white dark:data-[state=checked]:border-white dark:data-[state=checked]:text-gray-900"
          />
        </div>
      </div>
    </div>
  );
}
