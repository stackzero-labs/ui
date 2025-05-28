"use client";

import ImageViewer from "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/components/price-format/sale/price-format-sale";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/essential-oil-01.jpg";

interface ProductCard_11Props {
  imageUrl?: string;
  organic?: boolean;
  productName?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  volume?: string;
  aromaType?: string;
  benefits?: string[];
  ingredients?: string[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_11({
  aromaType = "Floral, Herbaceous",
  benefits = [
    "Promotes relaxation",
    "Reduces stress",
    "Improves sleep",
    "Soothes skin",
  ],
  currencyPrefix = "$",
  description = "100% pure essential oil extracted through steam distillation from organic lavender flowers. Provides calming aromatherapy benefits to promote relaxation and better sleep.",
  imageUrl = DEFAULT_IMAGE_URL,
  ingredients = ["Pure Lavender Oil", "Lavandula angustifolia"],
  onAddToCart = () => {},
  onBuyNow = () => {},
  organic = true,
  originalPrice = 24.99,
  price = 18.99,
  productName = "Lavender Serenity Essential Oil",
  volume = "15ml / 0.5 fl oz",
}: ProductCard_11Props = {}) {
  return (
    <div className="group relative flex w-[320px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Organic badge */}
      {organic && (
        <div className="absolute top-3 left-3 z-10">
          <span className="relative inline-block rounded-full bg-gradient-to-r from-purple-500 to-indigo-700 px-3 py-1.5 text-xs font-semibold text-white">
            100% ORGANIC
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500"></span>
            </span>
          </span>
        </div>
      )}

      {/* Image container with background glow effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 p-6 dark:from-indigo-950/30 dark:via-purple-950/20 dark:to-violet-950/30">
        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
          <ImageViewer
            imageUrl={imageUrl}
            classNameThumbnailViewer="rounded-lg object-contain h-[180px] mx-auto drop-shadow-lg"
          />
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {productName}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {volume} • {aromaType}
          </p>
        </div>

        {/* Description - truncated to 2 lines */}
        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>

        {/* Features grid */}
        <div className="mb-1">
          <p className="mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
            Key Benefits
          </p>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-xs">
                <svg
                  className="mr-1.5 h-3.5 w-3.5 shrink-0 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700 dark:text-gray-300">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Ingredients tags */}
        <div className="mb-1">
          <p className="mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
            Ingredients
          </p>
          <div className="flex flex-wrap gap-1">
            {ingredients.map((ingredient, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>

        {/* Price with shipping info */}
        <div className="mt-auto">
          <PriceFormat_Sale
            prefix={currencyPrefix}
            originalPrice={originalPrice}
            salePrice={price}
            showSavePercentage={false}
            className="text-lg font-semibold text-gray-600 dark:text-gray-300"
            classNameSalePrice="text-2xl font-bold text-purple-600 dark:text-purple-400"
          />

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
            Ships within 24 hours
          </p>
        </div>

        {/* Action buttons */}
        <div className="mt-3 flex flex-col gap-3">
          <Button
            variant="outline"
            onClick={onAddToCart}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-purple-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-purple-500 dark:hover:bg-gray-700"
          >
            Add to cart
          </Button>
          <Button
            onClick={onBuyNow}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white transition-all hover:from-indigo-700 hover:to-purple-700"
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_11;
export type { ProductCard_11Props };
