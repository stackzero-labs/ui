"use client";

import { useState } from "react";
import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Default data
const DEFAULT_COLOR_VARIANTS: VariantItem[] = [
  { id: "color-black", value: "color-black", label: "Black" },
  { id: "color-white", value: "color-white", label: "White" },
  { id: "color-pink", value: "color-pink", label: "Pink" },
];

const DEFAULT_SIZE_VARIANTS: VariantItem[] = [
  { id: "size-s", value: "size-s", label: "S" },
  { id: "size-m", value: "size-m", label: "M" },
  { id: "size-l", value: "size-l", label: "L" },
  { id: "size-xl", value: "size-xl", label: "XL" },
];

const DEFAULT_COLOR_IMAGES = {
  "color-black":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  "color-white":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  "color-pink":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
};

const DEFAULT_SIZE_PRICES = {
  "size-s": 89.99,
  "size-m": 99.99,
  "size-l": 109.99,
  "size-xl": 119.99,
};

export interface ProductVariant01Props {
  title?: string;
  description?: string;
  badge?: string | null;
  basePrice?: number;
  shippingInfo?: string;
  colorVariants?: VariantItem[];
  sizeVariants?: VariantItem[];
  colorImages?: Record<string, string>;
  sizePrices?: Record<string, number>;
  initialColor?: string;
  initialSize?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

function ProductVariant_01({
  title = "Premium Wireless Headphones",
  description = "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals.",
  badge = "New Arrival",
  basePrice = 99.99,
  shippingInfo = "Free shipping on all orders",
  colorVariants = DEFAULT_COLOR_VARIANTS,
  sizeVariants = DEFAULT_SIZE_VARIANTS,
  colorImages = DEFAULT_COLOR_IMAGES,
  sizePrices = DEFAULT_SIZE_PRICES,
  initialColor = "color-black",
  initialSize = "size-m",
  onAddToCart = () => {},
  onBuyNow = () => {},
}: ProductVariant01Props) {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedSize, setSelectedSize] = useState(initialSize);

  // Get current image based on selected color
  const currentImage =
    colorImages[selectedColor as keyof typeof colorImages] ||
    colorImages[Object.keys(colorImages)[0] || initialColor];

  // Get current price based on selected size
  const currentPrice =
    sizePrices[selectedSize as keyof typeof sizePrices] ||
    sizePrices[Object.keys(sizePrices)[0] || initialSize] ||
    basePrice;

  return (
    <div className="bg-card grid max-w-screen-lg grid-cols-1 gap-12 rounded-lg border p-6 md:grid-cols-2">
      <div className="relative w-full">
        {badge && (
          <Badge className="bg-primary absolute top-4 left-4 z-10">
            {badge}
          </Badge>
        )}
        <ImageViewer imageUrl={currentImage} />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        <div>
          <PriceFormat
            prefix="$"
            value={currentPrice}
            className="text-3xl font-semibold"
          />
          {shippingInfo && (
            <p className="text-muted-foreground mt-1 text-sm">{shippingInfo}</p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Color</label>
            <VariantSelectorBasic
              value={selectedColor}
              onValueChange={setSelectedColor}
              variants={colorVariants}
              className="grid-cols-3 sm:grid-cols-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Size</label>
            <VariantSelectorBasic
              value={selectedSize}
              onValueChange={setSelectedSize}
              variants={sizeVariants}
              className="grid-cols-4 sm:grid-cols-4"
            />
          </div>
        </div>

        <div className="mt-2 flex flex-row gap-4">
          <Button variant="outline" className="w-1/2" onClick={onAddToCart}>
            Add to Cart
          </Button>
          <Button className="w-1/2" onClick={onBuyNow}>
            Buy Now
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium">Selected Configuration:</p>
          <p className="text-muted-foreground text-sm">
            {colorVariants.find((v) => v.value === selectedColor)?.label} /{" "}
            {sizeVariants.find((v) => v.value === selectedSize)?.label} - $
            {currentPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_01;
