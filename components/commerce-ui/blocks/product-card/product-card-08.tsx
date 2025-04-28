"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/tablet-01.jpg";

interface Review {
  name: string;
  rating: number;
  text: string;
  verified?: boolean;
}

interface ProductCard_08Props {
  imageUrl?: string;
  productName?: string;
  description?: string;
  price?: number;
  inStock?: boolean;
  stockCount?: number;
  isNew?: boolean;
  reviews?: Review[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_08({
  currencyPrefix = "$",
  description = "Powerful tablet with stunning display, long battery life, and a lightweight design",
  imageUrl = DEFAULT_IMAGE_URL,
  inStock = true,
  isNew = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  price = 499.99,
  productName = "Ultra Tablet Pro",
  reviews = [
    {
      name: "David K.",
      rating: 5,
      text: "Perfect for my work and entertainment needs. Fast processor!",
      verified: true,
    },
    {
      name: "Maria L.",
      rating: 4,
      text: "Great device, impressive screen quality.",
    },
    {
      name: "Jason R.",
      rating: 5,
      text: "Amazing battery life, lasts all day easily.",
      verified: true,
    },
  ],
  stockCount = 24,
}: ProductCard_08Props = {}) {
  // Calculate average rating
  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl">
      {/* Main product card */}
      <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md sm:h-[220px] sm:flex-row dark:border-gray-800 dark:bg-gray-900">
        {/* Image section */}
        <div className="relative h-52 w-full bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50 p-6 sm:h-full sm:w-2/5 dark:from-gray-900 dark:via-purple-950/10 dark:to-gray-900">
          {/* New badge */}
          {isNew && (
            <div className="absolute top-3 left-3 z-10">
              <div className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-bold text-white shadow-sm">
                NEW
              </div>
            </div>
          )}

          {/* Background glow effect */}
          <div className="absolute inset-0">
            <div className="absolute -bottom-10 left-1/2 h-40 w-40 -translate-x-1/2 transform rounded-full bg-purple-500/20 blur-2xl"></div>
          </div>

          {/* Image with hover effect */}
          <div className="flex h-full items-center justify-center">
            <div className="transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
              <ImageViewer
                imageUrl={imageUrl}
                classNameThumbnailViewer="rounded-lg object-contain h-[180px] max-h-full mx-auto drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            {/* Product name and description */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {productName}
                </h3>
                <PriceFormat
                  prefix={currencyPrefix}
                  value={price}
                  className="text-xl font-bold text-blue-600 dark:text-blue-400"
                />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            {/* Rating summary */}
            <div className="mb-4 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(avgRating)
                        ? "text-amber-400"
                        : i < avgRating && i + 1 > avgRating
                          ? "text-amber-400"
                          : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {i < avgRating && i + 1 > avgRating ? (
                      // Half star
                      <defs>
                        <linearGradient id="halfStarGradient">
                          <stop offset="50%" stopColor="currentColor" />
                          <stop offset="50%" stopColor="#D1D5DB" />
                        </linearGradient>
                      </defs>
                    ) : null}
                    <path
                      fill={
                        i < avgRating && i + 1 > avgRating
                          ? "url(#halfStarGradient)"
                          : "currentColor"
                      }
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {avgRating.toFixed(1)} ({reviews.length} reviews)
              </span>
            </div>
          </div>

          {/* Bottom section with availability and buttons */}
          <div className="flex items-center justify-between">
            <div>
              {inStock ? (
                stockCount <= 10 ? (
                  <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                    <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                    Only {stockCount} left in stock
                  </p>
                ) : (
                  <p className="text-xs font-medium text-green-600 dark:text-green-400">
                    <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                    In Stock
                  </p>
                )
              ) : (
                <p className="text-xs font-medium text-red-600 dark:text-red-400">
                  <span className="mr-1 inline-block h-2 w-2 rounded-full bg-red-500"></span>
                  Out of Stock
                </p>
              )}
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={onAddToCart}
                disabled={!inStock}
                className="border-gray-300 bg-white text-gray-700 transition-all hover:border-purple-500 hover:bg-purple-50 hover:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-purple-500"
              >
                Add to cart
              </Button>
              <Button
                onClick={onBuyNow}
                disabled={!inStock}
                className="bg-purple-600 text-white transition-all hover:bg-purple-700"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compact customer reviews section */}
      {reviews.length > 0 && (
        <div className="mt-3 space-y-2 rounded-xl bg-gray-50 p-3 dark:bg-gray-800/50">
          <div className="mb-2 flex items-center justify-between border-b border-gray-200 pb-2 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white">
              Recent Customer Reviews
            </h4>
            <span className="text-xs text-blue-600 hover:underline dark:text-blue-400">
              View all
            </span>
          </div>

          <div className="space-y-1.5">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {review.name}
                  </span>
                  {review.verified && (
                    <span className="inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      <svg
                        className="mr-0.5 h-3 w-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Verified
                    </span>
                  )}
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4 pl-2">
                  <span className="line-clamp-1 flex-1 text-right text-xs text-gray-600 dark:text-gray-400">
                    {review.text}
                  </span>

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-3 w-3 ${i < review.rating ? "text-amber-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 border-t border-gray-200 pt-2 text-center dark:border-gray-700">
            <button className="text-xs font-medium text-purple-600 hover:text-purple-700 dark:text-purple-400">
              Write a review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCard_08;
export type { ProductCard_08Props, Review };
