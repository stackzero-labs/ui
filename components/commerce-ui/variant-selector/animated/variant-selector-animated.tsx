"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface VariantItem {
  id: string;
  value: string;
  label: string;
}

interface VariantSelectorAnimatedProps {
  value: string;
  onValueChange: (value: string) => void;
  variants: VariantItem[];
  className?: string;
}

const VariantSelectorAnimated = ({
  value,
  onValueChange,
  variants,
  className,
}: VariantSelectorAnimatedProps) => {
  const [activeStyles, setActiveStyles] = React.useState({ left: 0, width: 0 });
  const itemsRef = React.useRef<Map<string, HTMLLabelElement>>(new Map());

  // Function to get the position and width of the active element
  const getActiveStyles = () => {
    const activeElement = itemsRef.current.get(value);
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

  // Use useLayoutEffect to calculate initial position
  React.useLayoutEffect(() => {
    const styles = getActiveStyles();
    setActiveStyles(styles);
  }, [value]);

  return (
    <RadioGroupPrimitive.Root
      className={cn("relative flex gap-2", className)}
      value={value}
      onValueChange={onValueChange}
    >
      <AnimatePresence initial={false}>
        <motion.div
          layoutId="variant-background"
          className="absolute inset-0 h-full rounded-lg border border-lime-300 bg-lime-300/30"
          animate={activeStyles}
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
  );
};

export default VariantSelectorAnimated;
