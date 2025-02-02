"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
  url: string;
  disabled?: boolean;
}

interface VariantSelectorImagesProps {
  value: string;
  onValueChange: (value: string) => void;
  variants: VariantItem[];
  className?: string;
}

const VariantSelectorImages = ({
  className,
  onValueChange,
  value,
  variants,
}: VariantSelectorImagesProps) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid grid-cols-2 gap-2 sm:grid-cols-3", className)}
      value={value}
      onValueChange={onValueChange}
    >
      {variants.map((variant) => (
        <label
          key={variant.id}
          className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-xs shadow-black/5 outline-offset-2 transition-colors has-data-disabled:cursor-not-allowed has-data-[state=checked]:border-ring has-data-[state=checked]:bg-accent has-data-disabled:opacity-50 has-focus-visible:outline has-focus-visible:outline-2 has-focus-visible:outline-ring/70"
        >
          <RadioGroupPrimitive.Item
            value={variant.value}
            disabled={variant.disabled}
            className="sr-only after:absolute after:inset-0"
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <Circle className="h-2.5 w-2.5 fill-current text-current" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <Image
            alt={variant.label}
            src={variant.url}
            width={150}
            height={150}
            unoptimized
          />
          <p className="text-xs text-muted-foreground">{variant.label}</p>
        </label>
      ))}
    </RadioGroupPrimitive.Root>
  );
};

export default VariantSelectorImages;
