"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

const DEFAULT_MODEL_PRICES = {
  "model-extremesilence": 119.99,
  "model-prosound": 99.99,
  "model-sport": 109.99,
  "model-ultraquite": 89.99,
};

export interface ProductVariant01Props {
  title?: string;
  description?: string;
  badge?: string | null;
  basePrice?: number;
  shippingInfo?: string;
  modelVariants?: VariantItem[];
  modelPrices?: Record<string, number>;
  initialModel?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

function ProductVariant_01({
  badge = "New Arrival",
  basePrice = 99.99,
  description = "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals.",
  initialModel = "model-sport",
  modelPrices = DEFAULT_MODEL_PRICES,
  modelVariants = DEFAULT_MODEL_VARIANTS,
  onAddToCart = () => {},
  onBuyNow = () => {},
  shippingInfo = "Free shipping on all orders",
  title = "Premium Wireless Headphones",
}: ProductVariant01Props) {
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [quantity, setQuantity] = useState(1);

  // Default image for all models
  const currentImage =
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

  // Get current price based on selected model
  const currentPrice =
    modelPrices[selectedModel as keyof typeof modelPrices] ||
    modelPrices[Object.keys(modelPrices)[0] || initialModel] ||
    basePrice;

  return (
    <div className="my-6 grid max-w-screen-lg grid-cols-1 gap-12 rounded-lg md:grid-cols-2">
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
            <label className="mb-2 block text-sm font-medium">Model</label>
            <VariantSelectorBasic
              value={selectedModel}
              onValueChange={setSelectedModel}
              variants={modelVariants}
              className="grid-cols-2 sm:grid-cols-2"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Quantity</label>
          <QuantityInputBasic
            quantity={quantity}
            onChange={setQuantity}
            max={10}
          />
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
            {modelVariants.find((v) => v.value === selectedModel)?.label} - $
            {currentPrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_01;
