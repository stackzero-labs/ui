"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
}

interface VariantSelectorBasicProps {
  value: string;
  onValueChange: (value: string) => void;
  variants: VariantItem[];
  className?: string;
}

const VariantSelectorBasic = ({
  className,
  onValueChange,
  value,
  variants,
}: VariantSelectorBasicProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn(
        "data-[state=checked]:border-ring grid grid-cols-2 gap-2 sm:grid-cols-3",
        className
      )}
      value={value}
      onValueChange={onValueChange}
    >
      {variants.map((variant) => (
        <label
          key={variant.id}
          className="border-input has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent has-focus-visible:outline-ring/70 relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border px-2 py-3 text-center shadow-xs shadow-black/5 outline-offset-2 transition-colors has-focus-visible:outline has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50"
          htmlFor={variant.id}
        >
          <RadioGroupPrimitive.Item
            value={variant.value}
            className="sr-only after:absolute after:inset-0"
            id={variant.id}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <p className="text-foreground text-sm leading-none font-medium">
            {variant.label}
          </p>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default VariantSelectorBasic;
