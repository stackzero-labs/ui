"use client";

import * as React from "react";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";

// Example material variants
const materialVariants: VariantItem[] = [
  { id: "material-cotton", label: "Cotton", value: "material-cotton" },
  { id: "material-polyester", label: "Polyester", value: "material-polyester" },
  { id: "material-blend", label: "Blend", value: "material-blend" },
];

export default function VariantSelector_Basic_Ex_05() {
  const [selectedMaterial, setSelectedMaterial] =
    React.useState("material-cotton");

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Pick your material
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Choose the material that best suits your needs.
        </p>

        <div className="space-y-2">
          <label className="mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Select Material:
          </label>
          <VariantSelectorBasic
            value={selectedMaterial}
            onValueChange={setSelectedMaterial}
            variants={materialVariants}
            itemClassName="bg-transparent border-dashed hover:border-solid hover:border-indigo-300 dark:hover:border-indigo-700 
                          focus:ring-indigo-200 focus:ring-offset-1 focus:ring-opacity-60 dark:focus:ring-indigo-800 
                          dark:focus:ring-opacity-40 focus:border-indigo-400 dark:focus:border-indigo-600
                          data-[state=checked]:border-2 data-[state=checked]:border-solid data-[state=checked]:border-indigo-500 
                          data-[state=checked]:bg-indigo-50 data-[state=checked]:text-indigo-700 
                          dark:data-[state=checked]:bg-indigo-900/30 dark:data-[state=checked]:text-indigo-300 
                          dark:data-[state=checked]:border-indigo-400 
                          data-[state=checked]:shadow-[0_0_0_1px_rgba(79,70,229,0.2)] 
                          dark:data-[state=checked]:shadow-[0_0_0_1px_rgba(99,102,241,0.3)]"
            labelClassName="font-normal"
          />
        </div>
      </div>
    </div>
  );
}
