"use client";

import * as React from "react";
import { Check } from "lucide-react";
import VariantSelectorMultiple, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple";

const deliveryOptions: VariantItem[] = [
  {
    id: "standard",
    label: "Standard Delivery (3-5 days)",
    value: "standard",
  },
  {
    id: "express",
    label: "Express Delivery (1-2 days)",
    value: "express",
  },
  {
    id: "same-day",
    label: "Same Day Delivery",
    value: "same-day",
  },
  {
    id: "pickup",
    label: "In-Store Pickup",
    value: "pickup",
  },
];

export default function VariantSelector_Multiple_Ex_02() {
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([
    "standard",
  ]);

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Delivery Options
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select your preferred delivery methods. You can choose multiple
          options.
        </p>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Available Options:
          </label>
          <VariantSelectorMultiple
            values={selectedOptions}
            onValuesChange={setSelectedOptions}
            variants={deliveryOptions}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            itemClassName="relative bg-white border-2 border-gray-200 rounded-lg hover:border-purple-300 
                         data-[state=on]:border-purple-600 data-[state=on]:bg-purple-50
                         dark:bg-gray-900 dark:border-gray-700 dark:data-[state=on]:bg-purple-900/20
                         dark:data-[state=on]:border-purple-500 dark:hover:border-purple-400
                         focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2
                         dark:focus:ring-purple-500/40 dark:focus:ring-offset-gray-900
                         h-auto py-4 px-4 text-left flex items-center justify-between"
            labelClassName="text-sm"
          />
        </div>

        <div className="mt-4 min-h-[200px] rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Selected Delivery Options:
            {selectedOptions.length > 0 ? (
              <span className="ml-1 text-purple-600 dark:text-purple-400">
                {selectedOptions.length}{" "}
                {selectedOptions.length === 1 ? "option" : "options"}
              </span>
            ) : (
              <span className="ml-1 text-gray-500">None</span>
            )}
          </p>
          {selectedOptions.length > 0 && (
            <ul className="mt-2 space-y-1">
              {selectedOptions.map((option) => (
                <li
                  key={option}
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {deliveryOptions.find((item) => item.value === option)?.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
