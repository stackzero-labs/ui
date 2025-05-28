"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
  disabled?: boolean;
}

interface VariantSelectorMultipleProps {
  values: string[];
  onValuesChange: (values: string[]) => void;
  variants: VariantItem[];
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
}

const VariantSelectorMultiple = ({
  className,
  itemClassName,
  labelClassName,
  onValuesChange,
  values,
  variants,
}: VariantSelectorMultipleProps) => {
  return (
    <ToggleGroup
      type="multiple"
      className={cn("flex flex-wrap gap-3", className)}
      value={values}
      onValueChange={onValuesChange}
    >
      {variants.map((variant) => (
        <div key={variant.id} className="flex items-center">
          <ToggleGroupItem
            value={variant.value}
            disabled={variant.disabled}
            className={cn(
              "relative h-10 w-full min-w-[80px] rounded-md border border-gray-300 px-3 py-2 text-center text-sm transition-all",
              "dark:border-gray-600 dark:text-gray-100",
              "data-[state=on]:border-2 data-[state=on]:border-black dark:data-[state=on]:border-white",
              "focus:ring-2 focus:ring-black focus:ring-offset-2 focus:outline-none",
              "dark:focus:ring-white dark:focus:ring-offset-gray-900",
              "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50",
              itemClassName
            )}
          >
            <span className={cn("font-medium", labelClassName)}>
              {variant.label}
            </span>
          </ToggleGroupItem>
        </div>
      ))}
    </ToggleGroup>
  );
};

export default VariantSelectorMultiple;
