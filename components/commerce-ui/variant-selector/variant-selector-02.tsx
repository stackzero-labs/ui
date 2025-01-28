"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface VariantItem {
  id: string;
  value: string;
  label: string;
  url: string;
  disabled?: boolean;
}

const variants: VariantItem[] = [
  {
    id: "cat-default",
    value: "cat-default",
    label: "Default Cat",
    url: "/placeholders/cat-default.webp",
  },
  {
    id: "cat-steampunk",
    value: "cat-steampunk",
    label: "Steampunk Cat",
    url: "/placeholders/cat-steampunk.webp",
  },
  {
    id: "cat-cyberpunk",
    value: "cat-cyberpunk",
    label: "Cyberpunk Cat",
    url: "/placeholders/cat-cyberpunk.webp",
  },
];
const VariantSelector_02 = ({ className }: { className?: string }) => {
  const handleSelect = (value: string) => {
    console.log("Selected variant:", value);
  };
  return (
    <fieldset className={cn("space-y-4", className)}>
      <legend className="sr-only">Select a variant</legend>
      <RadioGroupPrimitive.Root
        className="grid grid-cols-3 gap-2"
        defaultValue="cat-default"
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
            <img
              alt={variant.label}
              src={variant.url}
              width={150}
              height={150}
            />
            <p className="text-xs text-muted-foreground">{variant.label}</p>
          </label>
        ))}
      </RadioGroupPrimitive.Root>
    </fieldset>
  );
};

export default VariantSelector_02;
