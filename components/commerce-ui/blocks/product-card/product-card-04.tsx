"use client";

import ImageViewer from "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic";
import PriceFormatSale from "@/components/commerce-ui/components/price-format/sale/price-format-sale";
import StarRating_Fractions from "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/smartwatch-01.jpg";

interface ProductCard_04Props {
  imageUrl?: string;
  tagText?: string;
  productName?: string;
  originalPrice?: number;
  salePrice?: number;
  rating?: number;
  maxRating?: number;
  reviewCount?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_04({
  currencyPrefix = "$",
  imageUrl = DEFAULT_IMAGE_URL,
  maxRating = 5,
  onAddToCart = () => {},
  onBuyNow = () => {},
  originalPrice = 299,
  productName = "Smart Watch Pro",
  rating = 4.5,
  reviewCount = 128,
  salePrice = 249,
  tagText = "LIMITED EDITION",
}: ProductCard_04Props = {}) {
  return (
    <div className="group relative flex w-[320px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Gradient badge  */}
      {tagText && (
        <div className="absolute top-3 left-3 z-10">
          <span className="relative inline-block rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 px-3 py-1.5 text-xs font-semibold text-white">
            {tagText}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-indigo-500"></span>
            </span>
          </span>
        </div>
      )}

      {/* Image container with background glow effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50 p-6 dark:from-indigo-950/30 dark:to-purple-950/30">
        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ImageViewer
            imageUrl={imageUrl}
            classNameThumbnailViewer="rounded-lg object-contain h-[180px] mx-auto"
          />
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="mb-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {productName}
          </h3>

          {/* Star rating component */}
          <div className="mb-2 flex items-center">
            <StarRating_Fractions
              value={rating}
              maxStars={maxRating}
              readOnly
              iconSize={16}
              color="#f59e0b"
            />
            <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
              {rating} ({reviewCount} reviews)
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-1">
          <PriceFormatSale
            prefix={currencyPrefix}
            originalPrice={originalPrice}
            salePrice={salePrice}
            showSavePercentage
            className="text-lg font-semibold text-gray-600 dark:text-gray-300"
            classNameSalePrice="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
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

        <div className="mt-2 flex flex-col gap-3">
          <Button
            variant="outline"
            onClick={onAddToCart}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-indigo-500 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-indigo-500 dark:hover:bg-gray-700"
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

export default ProductCard_04;
export type { ProductCard_04Props };
