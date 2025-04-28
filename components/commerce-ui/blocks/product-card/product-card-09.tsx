"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProductCard_09Props {
  imageUrl?: string;
  productName?: string;
  description?: string;
  price?: number;
  rating?: number;
  reviewCount?: number;
  warranty?: string;
  benefits?: Benefit[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_09({
  description = "Premium espresso machine with 15-bar pressure, built-in grinder and milk frother for café-quality coffee at home",
  benefits = [
    {
      description: "Ready in under 30 seconds",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Fast Brewing",
    },
    {
      description: "Self-cleaning function",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Easy Cleaning",
    },
    {
      description: "Multiple brewing options",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      title: "Customizable",
    },
  ],
  currencyPrefix = "$",
  imageUrl = DEFAULT_IMAGE_URL,
  onAddToCart = () => {},
  onBuyNow = () => {},
  price = 399.99,
  productName = "BrewMaster Pro Coffee Machine",
  rating = 4.8,
  reviewCount = 256,
  warranty = "2 Year",
}: ProductCard_09Props = {}) {
  return (
    <div className="flex flex-col">
      {/* Main product card */}
      <div className="group border-brown-200 dark:border-brown-800 relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:h-[220px] sm:flex-row dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -left-8 h-32 w-32 animate-pulse rounded-full bg-amber-700/20"></div>
          <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-amber-900/10 blur-md"></div>
          <div className="absolute bottom-12 left-1/3 h-24 w-24 rounded-full bg-amber-600/10 blur-sm"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(146,64,14,0.08),transparent)]"></div>
        </div>

        {/* Image section */}
        <div className="to-brown-50 relative h-52 w-full bg-gradient-to-br from-amber-50 via-amber-100/50 p-6 sm:h-full sm:w-2/5 dark:from-gray-900 dark:via-amber-950/10 dark:to-gray-900">
          {/* Premium badge */}
          <div className="absolute top-3 left-3 z-20 flex items-center justify-center">
            <div className="rounded-md bg-gradient-to-r from-amber-700 to-amber-900 px-3 py-1 text-xs font-bold tracking-wider text-amber-50 uppercase shadow-md">
              Barista Choice
            </div>
          </div>

          {/* Coffee-themed decoration */}
          <div className="absolute inset-0 z-10">
            {/* Steam-like swirls */}
            <div className="absolute top-1/3 left-1/2 h-12 w-8 -translate-x-1/2 rounded-full border-t border-l border-amber-700/20 opacity-30"></div>
            <div className="absolute top-1/4 left-1/3 h-8 w-12 -translate-x-1/2 rounded-full border-t border-r border-amber-700/20 opacity-30"></div>
          </div>

          {/* Image with hover effect */}
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="transition-all duration-500 group-hover:scale-[1.05]">
              <ImageViewer
                imageUrl={imageUrl}
                classNameThumbnailViewer="rounded-lg h-full object-contain drop-shadow-lg max-h-[180px]"
              />
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="relative z-10 flex flex-1 flex-col justify-between p-5">
          <div>
            {/* Product name and description */}
            <div className="mb-3">
              <div className="mb-1 flex items-center justify-between">
                <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100">
                  {productName}
                </h3>
                <PriceFormat
                  prefix={currencyPrefix}
                  value={price}
                  className="text-xl font-bold text-amber-800 dark:text-amber-300"
                />
              </div>

              {/* Rating section */}
              <div className="mb-2 flex items-center">
                <StarRating_Fractions
                  value={rating}
                  readOnly={true}
                  iconSize={16}
                  color="#92400E"
                  className="flex-shrink-0"
                />
                <span className="ml-2 text-sm text-amber-700 dark:text-amber-400">
                  ({reviewCount} reviews)
                </span>
              </div>

              <p className="line-clamp-2 text-sm text-amber-800/80 dark:text-amber-200/80">
                {description}
              </p>
            </div>
          </div>

          {/* Bottom section with warranty and buttons */}
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-0">
            <div>
              <p className="flex items-center text-xs font-medium text-amber-700 dark:text-amber-300">
                <svg
                  className="mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {warranty} Warranty Included
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex space-x-2">
              <Button
                variant="outline"
                onClick={onAddToCart}
                className="border-amber-300 bg-white text-amber-800 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-900 dark:border-amber-700/50 dark:bg-gray-800 dark:text-amber-300 dark:hover:border-amber-600"
              >
                Add to cart
              </Button>
              <Button
                onClick={onBuyNow}
                className="bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950"
              >
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal benefits list */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 overflow-hidden rounded-lg border border-amber-200 bg-gradient-to-br from-white to-amber-50 p-4 shadow-sm transition-all hover:border-amber-300 hover:shadow-md dark:border-amber-900/50 dark:from-gray-900 dark:to-amber-950/20"
          >
            {/* Decorations */}
            <div className="absolute right-0 bottom-0 h-16 w-16 rounded-tl-full bg-amber-800/5"></div>

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-amber-200 text-amber-800 dark:from-amber-900/40 dark:to-amber-800/40 dark:text-amber-300">
              {benefit.icon}
            </div>
            <div className="relative z-10">
              <h4 className="font-medium text-amber-900 dark:text-amber-100">
                {benefit.title}
              </h4>
              <p className="text-sm text-amber-700/80 dark:text-amber-300/80">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard_09;
export type { ProductCard_09Props, Benefit };
