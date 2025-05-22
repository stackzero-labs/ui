"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem as BaseVariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Extended VariantItem with price and image
interface VariantItem extends BaseVariantItem {
  price: number; // Changed to required
  salePrice?: number; // Added salePrice
  imageUrl?: string;
}

// Default data
const DEFAULT_IMAGE =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

const DEFAULT_VARIANTS: VariantItem[] = [
  {
    id: "variant-sport",
    label: "Sport",
    value: "variant-sport",
    price: 109.99,
    imageUrl: DEFAULT_IMAGE,
  },
  {
    id: "variant-prosound",
    label: "ProSound",
    value: "variant-prosound",
    price: 99.99,
    salePrice: 89.99,
    imageUrl: DEFAULT_IMAGE,
  },
  {
    id: "variant-ultraquite",
    label: "UltraQuite™",
    value: "variant-ultraquite",
    price: 89.99,
    imageUrl: DEFAULT_IMAGE,
  },
  {
    id: "variant-extremesilence",
    label: "ExtremeSilence™",
    value: "variant-extremesilence",
    price: 119.99,
    salePrice: 99.99,
    imageUrl: DEFAULT_IMAGE,
  },
];

// Define the payload type for callbacks
interface VariantSelectionPayload {
  variantId: string;
  variantLabel: string;
  quantity: number;
  price: number;
  originalPrice?: number;
  salePrice?: number;
  totalPrice: number;
  isOnSale: boolean;
}

interface ProductVariant01Props {
  title?: string;
  description?: string;
  badge?: string | null;
  shippingInfo?: string;
  variants: VariantItem[]; // Changed from optional to required
  defaultImage?: string;
  initialVariant?: string;
  variantLabel?: string;

  // Updated callback types with consolidated parameter
  onAddToCart?: (payload: VariantSelectionPayload) => void;
  onBuyNow?: (payload: VariantSelectionPayload) => void;

  // Controlled mode props
  selectedVariant?: string;
  onVariantChange?: (variant: string) => void;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;

  // Loading and error states
  isLoading?: boolean;
  errorMessage?: string | null;

  // Availability
  isInStock?: boolean;
  availableQuantity?: number;
}

function ProductVariant_01({
  badge = "New",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  variants,
  defaultImage,
  onAddToCart = () => {},
  onBuyNow = () => {},
  shippingInfo,
  title = "Product Variant Title",
  variantLabel = "Variant",
  // Initialize initialVariant to the first variant's value if not provided
  initialVariant,
  // Controlled mode props with default to uncontrolled
  selectedVariant: controlledVariant,
  onVariantChange,
  quantity: controlledQuantity,
  onQuantityChange,
  // Loading and error states
  isLoading = false,
  errorMessage = null,
  // Availability
  isInStock = true,
  availableQuantity = 0,
}: ProductVariant01Props) {
  // Ensure variants array is not empty
  if (!variants.length) {
    throw new Error("At least one variant must be provided");
  }

  // Use the first variant's value as default if initialVariant is not provided
  const defaultInitialVariant = initialVariant || variants[0].value;

  // Internal state for uncontrolled mode
  const [internalSelectedVariant, setInternalSelectedVariant] = useState(
    defaultInitialVariant
  );
  const [internalQuantity, setInternalQuantity] = useState(1);

  // Determine if we're in controlled or uncontrolled mode
  const isVariantControlled = controlledVariant !== undefined;
  const isQuantityControlled = controlledQuantity !== undefined;
  const selectedVariantId = isVariantControlled
    ? controlledVariant
    : internalSelectedVariant;
  const quantity = isQuantityControlled ? controlledQuantity : internalQuantity;

  const handleVariantChange = (newVariant: string) => {
    if (isVariantControlled) {
      onVariantChange?.(newVariant);
    } else {
      setInternalSelectedVariant(newVariant);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (isQuantityControlled) {
      onQuantityChange?.(newQuantity);
    } else {
      setInternalQuantity(newQuantity);
    }
  };

  // Find the selected variant
  const selectedVariant =
    variants.find((v) => v.value === selectedVariantId) || variants[0];

  // Get image, price and sale price from the selected variant
  const currentImage = selectedVariant?.imageUrl || defaultImage;
  const currentPrice = selectedVariant.price;
  const currentSalePrice = selectedVariant.salePrice;
  const isOnSale =
    currentSalePrice !== undefined && currentSalePrice < currentPrice;

  // The actual price to use for calculations
  const effectivePrice = isOnSale ? currentSalePrice : currentPrice;

  const handleAddToCart = () => {
    onAddToCart({
      variantId: selectedVariantId,
      variantLabel: selectedVariant?.label || "",
      quantity: quantity,
      price: currentPrice,
      originalPrice: isOnSale ? currentPrice : undefined,
      salePrice: isOnSale ? currentSalePrice : undefined,
      totalPrice: quantity * effectivePrice,
      isOnSale: isOnSale,
    });
  };

  const handleBuyNow = () => {
    onBuyNow({
      variantId: selectedVariantId,
      variantLabel: selectedVariant?.label || "",
      quantity: quantity,
      price: currentPrice,
      originalPrice: isOnSale ? currentPrice : undefined,
      salePrice: isOnSale ? currentSalePrice : undefined,
      totalPrice: quantity * effectivePrice,
      isOnSale: isOnSale,
    });
  };

  if (errorMessage) {
    return (
      <div className="my-6 rounded-lg border border-red-200 bg-red-50 p-6 text-red-600 dark:border-red-900 dark:bg-red-900/20 dark:text-red-400">
        <p className="font-medium">Error loading product</p>
        <p className="text-sm">{errorMessage}</p>
      </div>
    );
  }

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
          {isLoading ? (
            <div className="flex h-[300px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600"></div>
            </div>
          ) : (
            <ImageViewer
              imageUrl={currentImage || ""}
              classNameThumbnailViewer="rounded-lg object-contain h-[300px] mx-auto"
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="h-8 w-3/4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-16 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
            <div className="h-8 w-1/3 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700"></div>
          </div>
        ) : (
          <>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              {isOnSale ? (
                <PriceFormat_Sale
                  originalPrice={currentPrice}
                  salePrice={currentSalePrice!}
                  showSavePercentage
                  className="items-baseline"
                  classNameOriginalPrice="text-lg text-gray-500 line-through"
                  classNameSalePrice="text-3xl font-bold text-teal-700 dark:text-teal-400"
                  classNameSalePercentage="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5 rounded-md"
                />
              ) : (
                <PriceFormat
                  prefix="$"
                  value={currentPrice}
                  className="text-3xl font-bold text-teal-700 dark:text-teal-400"
                />
              )}

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

            {!isInStock && (
              <div className="rounded-md bg-amber-50 p-3 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                <p className="text-sm font-medium">Currently out of stock</p>
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {variantLabel}
                </label>
                <VariantSelectorBasic
                  value={selectedVariantId}
                  onValueChange={handleVariantChange}
                  variants={variants}
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
                onChange={handleQuantityChange}
                max={isInStock ? availableQuantity || 10 : 0}
                min={1}
                className="max-w-[150px] border-gray-300 dark:border-gray-700"
                disabled={!isInStock}
              />
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="outline"
                className="w-full border-gray-300 bg-white text-gray-800 transition-all duration-200 hover:border-teal-500 hover:bg-teal-50 hover:text-teal-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-teal-500 dark:hover:bg-gray-700"
                onClick={handleAddToCart}
                disabled={!isInStock || isLoading}
              >
                {isLoading ? "Loading..." : "Add to Cart"}
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white transition-all hover:from-teal-700 hover:to-cyan-700 disabled:from-gray-400 disabled:to-gray-500"
                onClick={handleBuyNow}
                disabled={!isInStock || isLoading}
              >
                {isLoading ? "Loading..." : "Buy Now"}
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
                  {isOnSale ? (
                    <span>
                      <span className="mr-2 line-through opacity-70">
                        ${currentPrice}
                      </span>
                      ${currentSalePrice}
                    </span>
                  ) : (
                    `$${currentPrice}`
                  )}
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                {quantity} {quantity > 1 ? "units" : "unit"} × $
                {effectivePrice.toFixed(2)} = $
                {(quantity * effectivePrice).toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductVariant_01;
export type { ProductVariant01Props, VariantItem, VariantSelectionPayload };
