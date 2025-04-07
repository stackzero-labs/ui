"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";
import PriceFormat_Sale from "../../price-format/sale/price-format-sale";

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
  badge?: string | null;
  basePrice?: number;
  colorImages?: Record<string, string>;
  colorVariants?: VariantItem[];
  description?: string;
  initialColor?: string;
  initialSize?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  salePrice?: number;
  shippingInfo?: string;
  sizePrices?: Record<string, number>;
  sizeVariants?: VariantItem[];
  title?: string;
}

function ProductVariant_02({
  badge = "New Arrival",
  basePrice = 99.99,
  colorImages = DEFAULT_COLOR_IMAGES,
  colorVariants = DEFAULT_COLOR_VARIANTS,
  description = "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals.",
  initialColor = "color-black",
  initialSize = "size-m",
  onAddToCart = () => {},
  onBuyNow = () => {},
  salePrice = 89.99,
  shippingInfo = "Eligible for free shipping",
  sizePrices = DEFAULT_SIZE_PRICES,
  sizeVariants = DEFAULT_SIZE_VARIANTS,
  title = "Premium Wireless Headphones",
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
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        <div>
          <div className="relative w-full">
            {badge && (
              <Badge className="bg-primary absolute top-4 left-4 z-10">
                {badge}
              </Badge>
            )}
            <ImageViewer imageUrl={currentImage} />
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-2">{description}</p>
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
      <div className="flex flex-col gap-2">
        <div className="rounded-md text-sm outline outline-lime-500">
          <div className="rounded-md rounded-b-none bg-lime-500/50 p-2">
            <p className="font-semibold">
              Get Free Shipping and 1-day delivery!
            </p>
          </div>

          <div className="p-2">
            <p className="text-muted-foreground">
              Enjoy exclusive benefits and discounts. 30-day free trial.
            </p>
            <Button variant="link" className="mt-1 w-full text-lime-500">
              Join Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-md border p-2">
          <PriceFormat_Sale
            prefix="$"
            originalPrice={currentPrice}
            salePrice={salePrice} // Example sale price
            showSavePercentage
            className="text-3xl font-semibold"
          />
          {shippingInfo && (
            <p className="text-muted-foreground mt-1 text-sm">{shippingInfo}</p>
          )}

          <div className="mt-2 flex w-full flex-col gap-4">
            <Button variant="outline" className="w-full" onClick={onAddToCart}>
              Add to Cart
            </Button>
            <Button className="w-full" onClick={onBuyNow}>
              Buy Now
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="col-span-1">Sold by:</div>
            <div className="col-span-2">
              <Link href="/" className="text-primary hover:underline">
                Soundbeast Engineering
              </Link>
            </div>
            <div className="col-span-1">Shipping:</div>
            <div className="col-span-2">
              <Link href="/" className="text-primary hover:underline">
                Xeon Marketplace
              </Link>
            </div>
            <div className="col-span-1">Return Policy: </div>
            <div className="col-span-2">
              <Link href="/" className="text-primary hover:underline">
                View our Return Policy
              </Link>
            </div>
            <div className="col-span-1">Payment:</div>
            <div className="col-span-2">Secure Payment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_02;
