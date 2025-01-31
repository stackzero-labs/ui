import * as React from "react";
import VariantColorSelectorBasic, {
  ColorVariantItem,
} from "./variant-color-selector-basic";

const variants: ColorVariantItem[] = [
  { id: "color-black", value: "black", color: "#000000", label: "Black" },
  { id: "color-white", value: "white", color: "#FFFFFF", label: "White" },
  { id: "color-red", value: "red", color: "#FF0000", label: "Red" },
  { id: "color-blue", value: "blue", color: "#0000FF", label: "Blue" },
  { id: "color-green", value: "green", color: "#00FF00", label: "Green" },
  { id: "color-yellow", value: "yellow", color: "#FFFF00", label: "Yellow" },
  { id: "color-purple", value: "purple", color: "#800080", label: "Purple" },
];

export default function VariantColorSelectorBasicExample() {
  const [selectedColor, setSelectedColor] = React.useState("black");

  return (
    <div className="space-y-8">
      <fieldset className="space-y-4">
        <legend className="mb-2 text-sm font-medium">Select color:</legend>
        <VariantColorSelectorBasic
          value={selectedColor}
          onValueChange={setSelectedColor}
          variants={variants}
        />
      </fieldset>
    </div>
  );
}
