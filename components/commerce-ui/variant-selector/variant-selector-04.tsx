"use client";

import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";

interface VariantItem {
  id: string;
  value: string;
  label: string;
}

const variants: VariantItem[] = [
  {
    id: "damage-protection",
    value: "damage-protection",
    label: "Damage Protection",
  },
  {
    id: "extended-warranty",
    value: "extended-warranty",
    label: "Extended Warranty",
  },
  {
    id: "theft-protection",
    value: "theft-protection",
    label: "Theft Protection",
  },
];

const VariantSelector_04 = ({ className }: { className?: string }) => {
  const handleSelect = (values: string[]) => {
    console.log("Selected variants:", values);
  };

  return (
    <fieldset className={cn("space-y-4", className)}>
      <legend>Pick extra perks:</legend>
      <ToggleGroup
        type="multiple"
        className="grid grid-cols-3 gap-2"
        defaultValue={["extended-warranty", "theft-protection"]}
        onValueChange={handleSelect}
      >
        {variants.map((variant) => (
          <ToggleGroupItem
            key={variant.id}
            value={variant.value}
            className="relative flex cursor-pointer flex-col items-center gap-3 rounded-lg border border-input px-2 py-3 text-center shadow-sm shadow-black/5 outline-offset-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:cursor-not-allowed disabled:opacity-50 data-[state=on]:border-ring data-[state=on]:bg-accent"
          >
            <p className="text-sm font-medium leading-none text-foreground">
              {variant.label}
            </p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </fieldset>
  );
};

export default VariantSelector_04;
