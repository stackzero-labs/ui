"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";

// Example model variants
const modelVariants: VariantItem[] = [
  { id: "model-light", label: "Light", value: "model-light" },
  { id: "model-medium", label: "Medium", value: "model-medium" },
  { id: "model-large", label: "Large", value: "model-large" },
  { id: "model-ultra", label: "Ultra", value: "model-ultra" },
];

export default function VariantSelector_Basic_Ex_03() {
  const [selectedModel, setSelectedModel] = React.useState("model-light");

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Choose your model
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select the model you want to purchase.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Color:
          </label>
          <VariantSelectorBasic
            value={selectedModel}
            onValueChange={setSelectedModel}
            variants={modelVariants}
            itemClassName="bg-gray-50 border-gray-200 hover:border-teal-300 dark:bg-gray-800 dark:border-gray-700
                         data-[state=checked]:border-teal-500 data-[state=checked]:bg-gradient-to-r 
                         data-[state=checked]:from-teal-50 data-[state=checked]:to-cyan-50 
                         data-[state=checked]:text-teal-700 dark:data-[state=checked]:bg-gradient-to-r 
                         dark:data-[state=checked]:from-teal-900/40 dark:data-[state=checked]:to-cyan-900/40 
                         dark:data-[state=checked]:border-teal-500 dark:data-[state=checked]:text-teal-300
                         focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:border-teal-400
                         dark:focus:ring-teal-500/40 dark:focus:ring-offset-gray-900"
          />
        </div>
      </div>
    </div>
  );
}
