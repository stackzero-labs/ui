"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

export interface VariantItem {
  value: string;
  color: string;
  label: string;
  disabled?: boolean;
}

const VariantSelectorColor = React.forwardRef<
  HTMLFieldSetElement,
  React.HTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
  <fieldset ref={ref} className={cn("space-y-4", className)} {...props} />
));
VariantSelectorColor.displayName = "VariantSelectorColor";

const VariantSelectorGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
VariantSelectorGroup.displayName = RadioGroupPrimitive.Root.displayName;

const VariantSelectorItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    autoContrast?: boolean;
    color: string;
  }
>(({ autoContrast = true, children, className, color, ...props }, ref) => {
  const textColor = autoContrast ? getContrastYIQ(color) : undefined;

  console.log("textColor", textColor);

  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square size-6 rounded-full border border-primary text-primary ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      style={{ backgroundColor: color, borderColor: color, color: textColor }}
      {...props}
    >
      {children ? children : <VariantSelectorIndicator />}
    </RadioGroupPrimitive.Item>
  );
});
VariantSelectorItem.displayName = "VariantSelectorItem";

const VariantSelectorIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <RadioGroupPrimitive.Indicator
    ref={ref}
    className={cn("flex h-full items-center justify-center", className)}
    {...props}
  >
    {children ? (
      children
    ) : (
      <Circle className="h-2.5 w-2.5 fill-current text-current" />
    )}
  </RadioGroupPrimitive.Indicator>
));
VariantSelectorIndicator.displayName = "VariantSelectorIndicator";

const VariantSelectorLabel = React.forwardRef<
  HTMLLabelElement,
  React.HTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "relative flex cursor-pointer flex-row items-center gap-3",
      className
    )}
    htmlFor={props.id}
    {...props}
  />
));
VariantSelectorLabel.displayName = "VariantSelectorLabel";

const VariantGroupLegend = React.forwardRef<
  HTMLLegendElement,
  React.HTMLAttributes<HTMLLegendElement>
>(({ className, ...props }, ref) => (
  <legend
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none text-foreground",
      className
    )}
    {...props}
  />
));
VariantGroupLegend.displayName = "VariantGroupLegend";

export {
  VariantSelectorColor,
  VariantSelectorGroup,
  VariantSelectorItem,
  VariantSelectorIndicator,
  VariantSelectorLabel,
  VariantGroupLegend,
};

/**
 * Choose the best color for text based on the background color
 * Supports HEX and RGB colors
 * @param color
 * @returns
 */
function getContrastYIQ(color: string) {
  let r, g, b;

  if (color.startsWith("#")) {
    // HEX color
    color = color.replace("#", "");
    r = parseInt(color.substring(0, 2), 16);
    g = parseInt(color.substring(2, 4), 16);
    b = parseInt(color.substring(4, 6), 16);
  } else if (color.startsWith("rgb")) {
    // RGB color
    const rgbValues = color.match(/\d+/g);
    if (!rgbValues || rgbValues.length < 3) {
      throw new Error("Invalid RGB color format");
    }
    r = parseInt(rgbValues[0], 10);
    g = parseInt(rgbValues[1], 10);
    b = parseInt(rgbValues[2], 10);
  } else {
    throw new Error("Invalid color format");
  }

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}
