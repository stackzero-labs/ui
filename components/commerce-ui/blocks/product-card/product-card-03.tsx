"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormatSale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCard_03Props {
  imageUrl?: string;
  tagText?: string;
  productName?: string;
  originalPrice?: number;
  salePrice?: number;
  freeShipping?: boolean;
  reviewCount?: number;
  rating?: number;
  maxRating?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_03({
  currencyPrefix = "$",
  freeShipping = true,
  imageUrl = DEFAULT_IMAGE_URL,
  maxRating = 5,
  onAddToCart = () => {},
  onBuyNow = () => {},
  originalPrice = 199,
  productName = "Wireless headset",
  rating = 4.2,
  reviewCount = 87,
  salePrice = 179,
  tagText = "NEW COLLECTION",
}: ProductCard_03Props = {}) {
  return (
    <div className="group relative flex w-[250px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Badge */}
      {tagText && (
        <div className="absolute top-3 left-3 z-10">
          <span className="relative inline-block rounded-full bg-gradient-to-r from-rose-500 to-red-700 px-3 py-1.5 text-xs font-semibold text-white">
            {tagText}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500"></span>
            </span>
          </span>
        </div>
      )}

      {/* Image container with background glow effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-orange-50 p-6 dark:from-rose-950/30 dark:to-orange-950/30">
        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-rose-500/20 blur-3xl"></div>
        <div className="transition-transform duration-500 group-hover:scale-105">
          <ImageViewer
            imageUrl={imageUrl}
            classNameThumbnailViewer="rounded-lg object-contain h-[160px] mx-auto"
          />
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="mb-1 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {productName}
          </h3>

          <div className="mb-2 flex items-center">
            <StarRating_Fractions
              value={rating}
              maxStars={maxRating}
              readOnly
              iconSize={16}
              color="#f59e0b"
            />
            <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">
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
            className="text-xl font-semibold text-gray-600 dark:text-gray-300"
            classNameSalePrice="text-3xl font-bold text-rose-600 dark:text-rose-400"
            classNameSalePercentage="rounded-sm bg-green-500/50 p-1 text-xs font-medium text-white"
          />
          {freeShipping && (
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
              Free Shipping
            </p>
          )}
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={onAddToCart}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-rose-500 dark:hover:bg-gray-700"
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

export default ProductCard_03;
export type { ProductCard_03Props };
