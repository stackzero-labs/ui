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

  const selectedVariant = modelVariants.find((v) => v.value === selectedModel);

  return (
    <div className="my-6 grid max-w-screen-lg grid-cols-1 gap-12 rounded-lg md:grid-cols-2">
      <div className="relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-teal-50 to-cyan-50 p-5 dark:from-teal-950/30 dark:to-cyan-950/30">
        {badge && (
          <span className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-1.5 text-xs font-bold text-white">
            {badge}
          </span>
        )}
        {/* Glow effect */}
        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-teal-500/20 blur-3xl"></div>
        <div className="transition-transform duration-500 hover:scale-105">
          <ImageViewer
            imageUrl={currentImage}
            classNameThumbnailViewer="rounded-lg object-contain h-[300px] mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="flex items-center gap-2">
          <PriceFormat
            prefix="$"
            value={currentPrice}
            className="text-3xl font-bold text-teal-700 dark:text-teal-400"
          />
          {shippingInfo && (
            <p className="mt-1 inline-flex items-center text-sm text-green-600 dark:text-green-400">
              <svg
                className="mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              {shippingInfo}
            </p>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Model
            </label>
            <VariantSelectorBasic
              value={selectedModel}
              onValueChange={setSelectedModel}
              variants={modelVariants}
              className="grid-cols-2 sm:grid-cols-2"
              itemClassName="bg-gray-50 border-gray-200 hover:border-teal-300 dark:bg-gray-800 dark:border-gray-700
                          data-[state=checked]:border-teal-500 data-[state=checked]:bg-teal-50 
                          data-[state=checked]:text-teal-700 dark:data-[state=checked]:bg-gray-700 
                          dark:data-[state=checked]:border-teal-500 dark:data-[state=checked]:text-teal-300
                          focus:ring-2 focus:ring-teal-500/50 focus:ring-offset-2 focus:border-teal-400
                          dark:focus:ring-teal-500/40 dark:focus:ring-offset-gray-900"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
            Quantity
          </label>
          <QuantityInputBasic
            quantity={quantity}
            onChange={setQuantity}
            max={10}
            className="max-w-[150px] border-gray-300 dark:border-gray-700"
            // buttonClassName="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          />
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button
            variant="outline"
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-teal-500 dark:hover:bg-gray-700"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white transition-all hover:from-teal-700 hover:to-cyan-700"
            onClick={onBuyNow}
          >
            Buy Now
          </Button>
        </div>

        <div className="mt-4 rounded-lg border border-gray-200 p-4 dark:border-gray-800">
          <p className="font-medium text-gray-900 dark:text-gray-100">
            Selected Configuration:
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-teal-500"></div>
              <p className="text-gray-700 dark:text-gray-300">
                {selectedVariant?.label}
              </p>
            </div>
            <p className="font-medium text-teal-700 dark:text-teal-400">
              ${currentPrice}
            </p>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            {quantity} {quantity > 1 ? "units" : "unit"} × ${currentPrice} = $
            {(quantity * currentPrice).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_01;
