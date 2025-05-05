"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
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
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
  "model-sport":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
  "model-ultraquite":
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
};

const DEFAULT_MODEL_PRICES = {
  "model-extremesilence": 119.99,
  "model-prosound": 99.99,
  "model-sport": 109.99,
  "model-ultraquite": 89.99,
};

interface ProductVariant02Props {
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
}: ProductVariant02Props) {
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
          <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 p-6 dark:from-rose-950/30 dark:to-orange-950/30">
            {badge && (
              <span className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-rose-500 to-red-700 px-3 py-1.5 text-xs font-semibold text-white">
                {badge}
              </span>
            )}
            {/* Glow effect */}
            <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-rose-500/20 blur-3xl"></div>
            <div className="transition-transform duration-500 hover:scale-105">
              <ImageViewer
                imageUrl={currentImage}
                classNameThumbnailViewer="rounded-lg object-contain h-[300px] mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-gray-100">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Model
              </label>
              <VariantSelectorBasic
                value={selectedModel}
                onValueChange={setSelectedModel}
                variants={modelVariants}
                className="grid-cols-2 sm:grid-cols-2"
                itemClassName="bg-gray-50 border-gray-200 hover:border-rose-300 dark:bg-gray-800 dark:border-gray-700
                            data-[state=checked]:border-rose-500 data-[state=checked]:bg-rose-50 
                            data-[state=checked]:text-rose-700 dark:data-[state=checked]:bg-gray-700 
                            dark:data-[state=checked]:border-rose-500 dark:data-[state=checked]:text-rose-300
                            focus:ring-2 focus:ring-rose-500/50 focus:ring-offset-2 focus:border-rose-400
                            dark:focus:ring-rose-500/40 dark:focus:ring-offset-gray-900"
              />
            </div>
          </div>

          <div className="mt-2 md:mt-4">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Selected Configuration:
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {modelVariants.find((v) => v.value === selectedModel)?.label} - $
              {currentPrice}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="rounded-md outline outline-rose-500">
          <div className="rounded-md rounded-b-none bg-gradient-to-r from-rose-500 to-red-600 p-3">
            <p className="font-semibold text-white">
              Get Free Shipping and 1-day delivery!
            </p>
          </div>

          <div className="bg-rose-50/60 p-4 dark:bg-rose-900/20">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enjoy exclusive benefits and discounts. 30-day free trial.
            </p>
            <Button
              variant="link"
              className="mt-1 w-full text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
            >
              Join Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <PriceFormat_Sale
            prefix="$"
            originalPrice={currentPrice}
            salePrice={salePrice}
            showSavePercentage
            className="text-3xl font-semibold text-gray-600 dark:text-gray-300"
            classNameSalePrice="text-3xl font-bold text-rose-600 dark:text-rose-400"
            classNameSalePercentage="rounded-sm bg-green-500/50 p-1 text-xs font-medium text-white"
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

          <div className="flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Quantity:{" "}
            </label>
            <QuantityInputBasic
              quantity={quantity}
              onChange={setQuantity}
              max={10}
              className="border-gray-300 dark:border-gray-700"
            />
          </div>

          <div className="flex w-full flex-col gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="w-full border-gray-300 bg-white py-5 text-base text-gray-800 transition-all duration-200 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 sm:py-2 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-rose-500 dark:hover:bg-gray-700"
              onClick={onAddToCart}
            >
              Add to Cart
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-rose-600 to-red-600 py-5 text-base text-white transition-all hover:from-rose-700 hover:to-red-700 sm:py-2 sm:text-sm"
              onClick={onBuyNow}
            >
              Buy Now
            </Button>
          </div>

          <Separator className="my-4" />

          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm"></div>
          <div className="col-span-1 text-gray-600 dark:text-gray-400">
            Sold by:
          </div>
          <div className="col-span-2">
            <Link
              href="/"
              className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
            >
              Soundbeast Engineering
            </Link>
          </div>
          <div className="col-span-1 text-gray-600 dark:text-gray-400">
            Shipping:
          </div>
          <div className="col-span-2">
            <Link
              href="/"
              className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
            >
              Xeon Marketplace
            </Link>
          </div>
          <div className="col-span-1 text-gray-600 dark:text-gray-400">
            Return Policy:{" "}
          </div>
          <div className="col-span-2">
            <Link
              href="/"
              className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
            >
              View our Return Policy
            </Link>
          </div>
          <div className="col-span-1 text-gray-600 dark:text-gray-400">
            Payment:
          </div>
          <div className="col-span-2">Secure Payment</div>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_02;
export type { ProductVariant02Props };
