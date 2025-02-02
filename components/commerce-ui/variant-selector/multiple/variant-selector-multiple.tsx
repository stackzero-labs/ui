"use client";

import * as React from "react";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
}

interface VariantSelectorMultipleProps {
  values: string[];
  onValuesChange: (values: string[]) => void;
  variants: VariantItem[];
  className?: string;
}

const VariantSelectorMultiple = ({
  className,
  onValuesChange,
  values,
  variants,
}: VariantSelectorMultipleProps) => {
  return (
    <ToggleGroup
      type="multiple"
      className={cn("grid grid-cols-2 gap-2 sm:grid-cols-3", className)}
      value={values}
      onValueChange={onValuesChange}
    >
      {variants.map((variant) => (
        <ToggleGroupItem
          key={variant.id}
          value={variant.value}
          className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-xs shadow-black/5 outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=on]:border-ring data-[state=on]:bg-accent"
        >
          <p className="text-sm font-medium leading-none text-foreground">
            {variant.label}
          </p>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default VariantSelectorMultiple;
