"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface VariantItem {
  id: string;
  value: string;
  label: string;
}

const variants: VariantItem[] = [
  { id: "variant-a", value: "variant-a", label: "Sport" },
  { id: "variant-b", value: "variant-b", label: "Pro" },
  { id: "variant-c", value: "variant-c", label: "UltraQuite™" },
  { id: "variant-d", value: "variant-d", label: "ExtremeSilence™" },
];

const VariantSelector_03 = ({ className }: { className?: string }) => {
  const handleSelect = (value: string) => {
    console.log("Selected variant:", value);
  };

  const [activeTab, setActiveTab] = React.useState(variants[0].id);
  const itemsRef = React.useRef<Map<string, HTMLLabelElement>>(new Map());

  // Function to get the position and width of the active element
  const getActiveStyles = () => {
    const activeElement = itemsRef.current.get(activeTab);
    if (!activeElement) return { left: 0, width: 0 };

    const parent = activeElement.parentElement;
    if (!parent) return { left: 0, width: 0 };

    const parentRect = parent.getBoundingClientRect();
    const activeRect = activeElement.getBoundingClientRect();

    return {
      left: activeRect.left - parentRect.left,
      width: activeRect.width,
    };
  };

  return (
    <fieldset className={cn("space-y-4", className)}>
      <legend>Select your Headphone variant:</legend>
      <RadioGroupPrimitive.Root
        className="relative flex gap-2"
        defaultValue="variant-b"
        onValueChange={(value) => {
          handleSelect(value);
          setActiveTab(value);
        }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            layoutId="variant-background"
            className="absolute inset-0 h-full rounded-lg border border-lime-300 bg-lime-300/30"
            animate={getActiveStyles()}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.6,
            }}
          />
        </AnimatePresence>

        {variants.map((variant) => (
          <label
            key={variant.id}
            ref={(el) => {
              if (el) {
                itemsRef.current.set(variant.value, el);
              } else {
                itemsRef.current.delete(variant.value);
              }
            }}
            className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg px-4 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors has-[[data-disabled]]:cursor-not-allowed has-[[data-disabled]]:opacity-50 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring/70"
          >
            <RadioGroupPrimitive.Item
              value={variant.value}
              className="sr-only after:absolute after:inset-0"
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <motion.p className="whitespace-nowrap text-sm font-medium leading-none text-foreground">
              {variant.label}
            </motion.p>
          </label>
        ))}
      </RadioGroupPrimitive.Root>
    </fieldset>
  );
};

export default VariantSelector_03;
