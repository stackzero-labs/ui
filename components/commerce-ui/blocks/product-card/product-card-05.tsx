"use client";

import ImageViewer from "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic";
import PriceFormatSale from "@/components/commerce-ui/components/price-format/sale/price-format-sale";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/shoes-02.jpg";

interface ProductCard_05Props {
  imageUrl?: string;
  promoText?: string;
  productName?: string;
  description?: string;
  originalPrice?: number;
  salePrice?: number;
  discountPercentage?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  isBestseller?: boolean;
  currencyPrefix?: string;
}

function ProductCard_05({
  currencyPrefix = "$",
  description = "Lightweight, responsive running shoes with breathable mesh and enhanced cushioning for maximum comfort.",
  discountPercentage = 33,
  imageUrl = DEFAULT_IMAGE_URL,
  isBestseller = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  originalPrice = 150,
  productName = "AeroStride Performance Runner",
  promoText = "FLASH SALE",
  salePrice = 99.95,
}: ProductCard_05Props = {}) {
  return (
    <div className="group relative flex w-[330px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900">
      {/* Sale tag */}
      {promoText && (
        <div className="absolute top-5 left-0 z-10">
          <div className="relative overflow-hidden">
            <div className="flex h-9 items-center bg-gradient-to-r from-rose-600 to-red-500 px-4 py-1.5 shadow-lg">
              <span className="animate-pulse text-sm font-bold tracking-wider text-white">
                {promoText}
              </span>
              <div className="ml-2 flex items-center justify-center rounded-full bg-white px-1.5 py-0.5 text-xs font-bold text-rose-600">
                {discountPercentage}%
              </div>
            </div>
            <div className="absolute top-0 -right-4 h-0 w-0 border-t-9 border-r-8 border-b-8 border-l-0 border-t-red-500 border-r-transparent border-b-transparent"></div>
          </div>
        </div>
      )}

      {/* Bestseller badge */}
      {isBestseller && (
        <div className="absolute top-3 right-3 z-10 overflow-hidden rounded-full bg-amber-500 px-3 py-0.5 text-xs font-bold text-white shadow-md">
          BESTSELLER
        </div>
      )}

      {/* Image container with gradient background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-rose-50 to-slate-50 p-6 dark:from-gray-900 dark:via-rose-950/30 dark:to-gray-900">
        {/* Background blur effect */}
        <div className="absolute -bottom-8 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-rose-400/20 blur-3xl"></div>
        <div className="transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
          <ImageViewer
            imageUrl={imageUrl}
            classNameThumbnailViewer="rounded-lg object-contain h-[200px] mx-auto drop-shadow-lg"
          />
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {productName}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="my-2 rounded-lg bg-rose-50 p-3 dark:bg-rose-900/20">
          <PriceFormatSale
            prefix={currencyPrefix}
            originalPrice={originalPrice}
            salePrice={salePrice}
            showSavePercentage
            className="text-base font-medium text-gray-600 line-through dark:text-gray-400"
            classNameSalePrice="text-2xl font-extrabold text-rose-600 dark:text-rose-400"
            classNameSalePercentage="ml-2 inline-flex items-center justify-center rounded-md bg-rose-100 px-2 py-0.5 text-xs font-semibold text-rose-700 dark:bg-rose-800/40 dark:text-rose-300"
          />
          <div className="mt-1 flex items-center">
            <svg
              className="mr-1 h-4 w-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              Sale ends in 2 days
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-col gap-3">
          <Button
            variant="outline"
            onClick={onAddToCart}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-rose-500 dark:hover:bg-gray-700"
          >
            Add to cart
          </Button>
          <Button
            onClick={onBuyNow}
            className="w-full bg-gradient-to-r from-rose-600 to-red-600 text-white transition-all hover:from-rose-700 hover:to-red-700"
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_05;
export type { ProductCard_05Props };
