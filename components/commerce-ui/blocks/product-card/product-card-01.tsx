"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCardProps {
  imageUrl?: string;
  discount?: string | null;
  title?: string;
  description?: string;
  price?: number;
  prefix?: string;
  rating?: number;
  reviewCount?: number;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  freeShipping?: boolean;
}

function ProductCard_01({
  description = "Premium noise-cancelling headphones with surround sound technology and high comfort",
  discount = "20% OFF",
  freeShipping = true,
  imageUrl = DEFAULT_IMAGE_URL,
  onAddToCart = () => {},
  onBuyNow = () => {},
  prefix = "$",
  price = 98.96,
  rating = 4.7,
  reviewCount = 65,
  title = "Wireless headset",
}: ProductCardProps = {}) {
  return (
    <div className="group relative flex w-[350px] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Image section with background and dynamic glow effect */}
      <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-cyan-50 p-5 dark:from-teal-950/30 dark:to-cyan-950/30">
        {discount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="relative inline-block rounded-full bg-gradient-to-r from-teal-500 to-cyan-600 px-3 py-1.5 text-xs font-bold text-white">
              {discount}
            </span>
          </div>
        )}

        {/* Glow effect */}
        <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-teal-500/20 blur-3xl"></div>

        <div className="transition-transform duration-500 group-hover:scale-105">
          <ImageViewer
            imageUrl={imageUrl}
            classNameThumbnailViewer="rounded-lg object-contain h-[200px] mx-auto"
          />
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="mb-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {title}
          </h3>

          {/* Rating */}
          <div className="mb-2 flex items-center">
            <StarRating_Fractions
              value={rating}
              maxStars={5}
              readOnly
              iconSize={16}
              color="#0d9488"
            />
            <span className="ml-2 text-xs text-gray-600 dark:text-gray-400">
              {rating} ({reviewCount} reviews)
            </span>
          </div>

          <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        {/* Price and shipping info */}
        <div className="mt-auto flex flex-col">
          <PriceFormat
            prefix={prefix}
            value={price}
            className="text-2xl font-bold text-teal-700 dark:text-teal-400"
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

        {/* Action buttons */}
        <div className="mt-3 flex flex-col gap-2">
          <Button
            variant="outline"
            onClick={onAddToCart}
            className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-teal-500 dark:hover:bg-gray-700"
          >
            Add to cart
          </Button>
          <Button
            onClick={onBuyNow}
            className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white transition-all hover:from-teal-700 hover:to-cyan-700"
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_01;
export type { ProductCardProps };
