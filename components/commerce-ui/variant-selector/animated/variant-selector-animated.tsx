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
  className,
  onValueChange,
  value,
  variants,
}: VariantSelectorAnimatedProps) => {
  const [activeStyles, setActiveStyles] = React.useState({
    height: 0,
    left: 0,
    top: 0,
    width: 0,
  });
  const itemsRef = React.useRef<Map<string, HTMLLabelElement>>(new Map());

  React.useLayoutEffect(() => {
    const getActiveStyles = () => {
      const activeElement = itemsRef.current.get(value);
      if (!activeElement) return { height: 0, left: 0, top: 0, width: 0 };

      const parent = activeElement.parentElement;
      if (!parent) return { height: 0, left: 0, top: 0, width: 0 };

      const parentRect = parent.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      return {
        height: activeRect.height,
        left: activeRect.left - parentRect.left,
        top: activeRect.top - parentRect.top,
        width: activeRect.width,
      };
    };

    // Use requestAnimationFrame to ensure DOM has updated
    requestAnimationFrame(() => {
      const styles = getActiveStyles();
      setActiveStyles(styles);
    });
  }, [value]);

  return (
    <RadioGroupPrimitive.Root
      className={cn("relative flex flex-wrap gap-1.5 sm:gap-2", className)}
      value={value}
      onValueChange={onValueChange}
    >
      <AnimatePresence initial={false}>
        <motion.div
          layoutId="variant-background"
          className="absolute rounded-lg border border-lime-300 bg-lime-300/30"
          animate={{
            height: activeStyles.height,
            left: activeStyles.left,
            top: activeStyles.top,
            width: activeStyles.width,
          }}
          transition={{
            bounce: 0.2,
            duration: 0.6,
            type: "spring",
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
          className="relative flex min-w-[4rem] cursor-pointer flex-col items-center gap-2 rounded-lg px-2.5 py-2 text-center shadow-xs shadow-black/5 outline-offset-2 transition-colors has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50 has-focus-visible:outline has-focus-visible:outline-2 has-focus-visible:outline-ring/70 sm:min-w-[5rem] sm:gap-3 sm:px-4 sm:py-3"
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
