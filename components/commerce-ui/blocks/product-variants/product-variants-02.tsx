"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useState } from "react";

// Default data
const DEFAULT_MODEL_VARIANTS: VariantItem[] = [
  { id: "model-sport", label: "Sport", value: "model-sport" },
  { id: "model-prosound", label: "ProSound", value: "model-prosound" },
  { id: "model-ultraquite", label: "UltraQuite™", value: "model-ultraquite" },
  {
    id: "model-extremesilence",
    label: "ExtremeSilence™",
    value: "model-extremesilence",
  },
];

const DEFAULT_MODEL_IMAGES = {
  "model-extremesilence":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  "model-prosound":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  "model-sport":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  "model-ultraquite":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
};

const DEFAULT_MODEL_PRICES = {
  "model-extremesilence": 119.99,
  "model-prosound": 99.99,
  "model-sport": 109.99,
  "model-ultraquite": 89.99,
};

export interface ProductVariant01Props {
  badge?: string | null;
  basePrice?: number;
  modelImages?: Record<string, string>;
  modelVariants?: VariantItem[];
  description?: string;
  initialModel?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  salePrice?: number;
  shippingInfo?: string;
  modelPrices?: Record<string, number>;
  title?: string;
}

function ProductVariant_02({
  badge = "New Arrival",
  basePrice = 99.99,
  description = "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals.",
  initialModel = "model-sport",
  modelImages = DEFAULT_MODEL_IMAGES,
  modelPrices = DEFAULT_MODEL_PRICES,
  modelVariants = DEFAULT_MODEL_VARIANTS,
  onAddToCart = () => {},
  onBuyNow = () => {},
  salePrice = 89.99,
  shippingInfo = "Eligible for free shipping",
  title = "Premium Wireless Headphones",
}: ProductVariant01Props) {
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [quantity, setQuantity] = useState(1);

  // Get current image based on selected model
  const currentImage =
    modelImages[selectedModel as keyof typeof modelImages] ||
    modelImages[Object.keys(modelImages)[0] || initialModel];

  // Get current price based on selected model
  const currentPrice =
    modelPrices[selectedModel as keyof typeof modelPrices] ||
    modelPrices[Object.keys(modelPrices)[0] || initialModel] ||
    basePrice;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      <div className="col-span-1 md:col-span-2">
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
        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
              {title}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium">Model</label>
              <VariantSelectorBasic
                value={selectedModel}
                onValueChange={setSelectedModel}
                variants={modelVariants}
                className="grid-cols-2 sm:grid-cols-2"
              />
            </div>
          </div>

          <div className="mt-2 md:mt-4">
            <p className="text-sm font-medium">Selected Configuration:</p>
            <p className="text-muted-foreground text-sm">
              {modelVariants.find((v) => v.value === selectedModel)?.label} - $
              {currentPrice}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="rounded-md text-sm outline outline-lime-500">
          <div className="rounded-md rounded-b-none bg-lime-500/50 p-3">
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

          <div className="flex items-center gap-2">
            <label className="mb-2 block text-sm font-medium">Quantity: </label>
            <QuantityInputBasic
              quantity={quantity}
              onChange={setQuantity}
              max={10}
            />
          </div>

          <div className="flex w-full flex-col gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="w-full py-5 text-base sm:py-2 sm:text-sm"
              onClick={onAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              className="w-full py-5 text-base sm:py-2 sm:text-sm"
              onClick={onBuyNow}
            >
              Buy Now
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
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
