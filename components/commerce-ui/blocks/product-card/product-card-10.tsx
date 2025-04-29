"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/handcream-01.jpg";

interface ProductCard_10Props {
  imageUrl?: string;
  newProduct?: boolean;
  productName?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  availableStock?: number;
  volume?: string;
  skinType?: string;
  benefits?: string[];
  ingredients?: string[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  onLearnMore?: () => void;
  currencyPrefix?: string;
}

function ProductCard_10({
  availableStock = 42,
  benefits = [
    "24h Hydration",
    "Non-greasy formula",
    "Repairs damaged skin",
    "Dermatologist tested",
  ],
  currencyPrefix = "$",
  description = "Ultra-hydrating hand cream formulated with shea butter, aloe vera, and vitamin E. Absorbs quickly for immediate relief of dry skin, leaving hands soft and nourished without greasy residue. Perfect for daily use and harsh weather protection.",
  imageUrl = DEFAULT_IMAGE_URL,
  ingredients = ["Shea Butter", "Aloe Vera", "Vitamin E", "Jojoba Oil"],
  newProduct = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  onLearnMore = () => {},
  originalPrice = 29.99,
  price = 24.99,
  productName = "NatureSilk Intensive Hand Cream",
  skinType = "All skin types",
  volume = "75ml / 2.5 fl oz",
}: ProductCard_10Props = {}) {
  const isLowStock = availableStock <= 20;
  const hasDiscount = originalPrice > price;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row dark:border-gray-800 dark:bg-gray-900">
      {/* Image section */}
      <div className="relative h-52 w-full bg-gradient-to-br from-amber-50 via-lime-50 to-emerald-50 sm:h-auto sm:w-2/5 dark:from-gray-900 dark:via-emerald-950/20 dark:to-gray-900">
        {newProduct && (
          <div className="absolute top-3 left-3 z-10 flex items-center justify-center">
            <div className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
              New Formula
            </div>
          </div>
        )}

        {/* Soft glow effect */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-amber-300/30 blur-2xl"></div>
          <div className="absolute right-0 -bottom-8 h-28 w-28 rounded-full bg-emerald-400/20 blur-xl"></div>
        </div>

        {/* Image with hover effect */}
        <div className="flex h-full w-full items-center justify-center p-4">
          <div className="h-full w-full transition-all duration-500 group-hover:scale-[1.05] group-hover:rotate-1">
            <ImageViewer
              imageUrl={imageUrl}
              classNameThumbnailViewer="rounded-lg w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Product name, price, and description */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {productName}
              </h3>
              {hasDiscount ? (
                <PriceFormat_Sale
                  originalPrice={originalPrice}
                  salePrice={price}
                  prefix={currencyPrefix}
                  classNameOriginalPrice="text-sm text-gray-500 dark:text-gray-400"
                  classNameSalePrice="text-xl font-bold text-emerald-700 dark:text-emerald-400"
                  showSavePercentage={false}
                />
              ) : (
                <span className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                  {currencyPrefix}
                  {price.toFixed(2)}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {volume} • {skinType}
            </p>
            <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Benefits and ingredients */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                KEY BENEFITS
              </p>
              <ul className="space-y-0.5">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="mr-1.5 h-4 w-4 shrink-0 text-emerald-600"
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
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                INGREDIENTS
              </p>
              <ul className="space-y-0.5">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="mr-1.5 h-4 w-4 shrink-0 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with availability and buttons */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            {isLowStock ? (
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                Only {availableStock} units left
              </p>
            ) : (
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-emerald-500"></span>
                In Stock
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Free shipping on orders over {currencyPrefix}35
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={onLearnMore}
              className="border-gray-300 bg-white text-gray-700 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-amber-600 dark:hover:bg-amber-950/30"
            >
              Details
            </Button>
            <Button
              variant="outline"
              onClick={onAddToCart}
              className="border-emerald-200 bg-white text-emerald-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-900 dark:bg-gray-800 dark:text-emerald-200 dark:hover:border-emerald-700 dark:hover:bg-emerald-950/30"
            >
              Add to bag
            </Button>
            <Button
              onClick={onBuyNow}
              className="bg-emerald-700 text-white hover:bg-emerald-800 dark:bg-emerald-700 dark:hover:bg-emerald-600"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_10;
export type { ProductCard_10Props };
