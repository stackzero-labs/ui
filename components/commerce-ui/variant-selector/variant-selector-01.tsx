"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

interface VariantItem {
  id: string;
  value: string;
  label: string;
}

const variants: VariantItem[] = [
  { id: "variant-xxs", value: "variant-xxs", label: "XXS" },
  { id: "variant-xs", value: "variant-xs", label: "XS" },
  { id: "variant-s", value: "variant-s", label: "S" },
  { id: "variant-m", value: "variant-m", label: "M" },
  { id: "variant-l", value: "variant-l", label: "L" },
  { id: "variant-xl", value: "variant-xl", label: "XL" },
  { id: "variant-xxl", value: "variant-xxl", label: "XXL" },
];

const VariantSelector_01 = ({ className }: { className?: string }) => {
  const handleSelect = (value: string) => {
    console.log("Selected variant:", value);
  };
  return (
    <RadioGroupPrimitive.Root
      className="grid grid-cols-7 gap-2"
      defaultValue="variant-m"
      onValueChange={handleSelect}
    >
      {variants.map((variant) => (
        <label
          key={variant.id}
          className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-accent has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
        >
          <RadioGroupPrimitive.Item
            value={variant.value}
            className="sr-only after:absolute after:inset-0"
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <p className="text-sm font-medium leading-none text-foreground">
            {variant.label}
          </p>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default VariantSelector_01;
