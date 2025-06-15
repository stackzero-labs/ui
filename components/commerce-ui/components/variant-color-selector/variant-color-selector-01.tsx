"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "@/lib/utils";

interface VariantItem {
  id: string;
  value: string;
  color: string;
  label: string;
}

const variants: VariantItem[] = [
  { color: "#000000", id: "color-black", label: "Black", value: "black" },
  { color: "#FFFFFF", id: "color-white", label: "White", value: "white" },
  { color: "#FF0000", id: "color-red", label: "Red", value: "red" },
  { color: "#0000FF", id: "color-blue", label: "Blue", value: "blue" },
  { color: "#00FF00", id: "color-green", label: "Green", value: "green" },
  { color: "#FFFF00", id: "color-yellow", label: "Yellow", value: "yellow" },
  { color: "#800080", id: "color-purple", label: "Purple", value: "purple" },
];

function VariantColorSelector_01({ className }: { className?: string }) {
  return (
    <fieldset className={cn("space-y-4", className)}>
      <legend className="sr-only">Select a color</legend>
      <RadioGroupPrimitive.Root
        className="flex flex-wrap gap-3"
        defaultValue="black"
      >
        {variants.map((variant) => (
          <label
            key={variant.id}
            className="relative flex cursor-pointer flex-col items-center gap-2"
          >
            <RadioGroupPrimitive.Item
              value={variant.value}
              className={cn(
                "ring-offset-background focus-visible:ring-ring aspect-square size-6 rounded-full border-2 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                "has-data-[state=checked]:ring-4",
                "has-data-[state=checked]:border-0"
              )}
              style={{
                backgroundColor: variant.color,
                color: getContrastYIQ(variant.color),
              }}
            >
              <RadioGroupPrimitive.Indicator className="flex h-full items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-current text-current" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <span className="text-foreground text-sm leading-none font-medium">
              {variant.label}
            </span>
          </label>
        ))}
      </RadioGroupPrimitive.Root>
    </fieldset>
  );
}

export default VariantColorSelector_01;

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
