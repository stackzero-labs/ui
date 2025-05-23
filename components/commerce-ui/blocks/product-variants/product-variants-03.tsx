"use client";

import ImageCarousel_Basic, {
  CarouselImage,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem as BaseVariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, ShieldCheck } from "lucide-react";
import { useState } from "react";

interface VariantItem extends BaseVariantItem {
  price: number;
  salePrice?: number;
  images?: CarouselImage[];
  isInStock?: boolean;
  availableQuantity?: number | null;
  features?: string[];
}

interface VariantSelectionPayload {
  variantId: string;
  variantLabel: string;
  quantity: number;
  price: number;
  salePrice?: number;
  totalPrice: number;
  isOnSale: boolean;
}

interface ProductVariant03Props {
  title?: string;
  description?: string;
  badge?: string | null;
  variants: VariantItem[];
  defaultImages?: CarouselImage[];
  initialVariant?: string;
  variantLabel?: string;
  onAddToCart?: (payload: VariantSelectionPayload) => void;
  onBuyNow?: (payload: VariantSelectionPayload) => void;
  selectedVariant?: string;
  onVariantChange?: (variant: string) => void;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  isLoading?: boolean;
  errorMessage?: string | null;
  currencyPrefix?: string;
  releaseDate?: string;
}

function ProductVariant_03({
  badge = "Just Released",
  currencyPrefix = "$",
  defaultImages = [],
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  errorMessage = null,
  initialVariant,
  isLoading = false,
  onAddToCart = () => {},
  onBuyNow = () => {},
  onQuantityChange,
  onVariantChange,
  quantity: controlledQuantity,
  releaseDate = "August 15, 2023",
  selectedVariant: controlledVariant,
  title = "Product Variant Title",
  variantLabel = "Model",
  variants = [],
}: ProductVariant03Props) {
  // Ensure variants array is not empty
  if (!variants.length) {
    throw new Error("At least one variant must be provided");
  }

  const defaultInitialVariant = initialVariant || variants[0].value;

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

      // Reset quantity if changing to a variant with less available quantity
      const newSelectedVariant = variants.find((v) => v.value === newVariant);
      if (
        newSelectedVariant?.isInStock &&
        newSelectedVariant.availableQuantity !== null &&
        newSelectedVariant.availableQuantity !== undefined &&
        quantity > newSelectedVariant.availableQuantity
      ) {
        handleQuantityChange(newSelectedVariant.availableQuantity);
      }
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (isQuantityControlled) {
      onQuantityChange?.(newQuantity);
    } else {
      setInternalQuantity(newQuantity);
    }
  };

  const selectedVariant =
    variants.find((v) => v.value === selectedVariantId) || variants[0];

  const currentImages = selectedVariant?.images || defaultImages;
  const currentPrice = selectedVariant.price;
  const currentSalePrice = selectedVariant.salePrice;
  const isOnSale =
    currentSalePrice !== undefined && currentSalePrice < currentPrice;
  const effectivePrice = isOnSale ? currentSalePrice : currentPrice;

  // Get stock status from the selected variant
  const isInStock =
    selectedVariant.isInStock !== undefined ? selectedVariant.isInStock : true;
  const availableStock = selectedVariant.availableQuantity;
  const isLowStock =
    isInStock &&
    availableStock !== null &&
    availableStock !== undefined &&
    availableStock <= 25;

  // Get features for the selected variant
  const features = selectedVariant.features || [];

  const handleAddToCart = () => {
    onAddToCart({
      isOnSale,
      price: currentPrice,
      quantity,
      salePrice: isOnSale ? currentSalePrice : undefined,
      totalPrice: quantity * effectivePrice,
      variantId: selectedVariantId,
      variantLabel: selectedVariant?.label || "",
    });
  };

  const handleBuyNow = () => {
    onBuyNow({
      isOnSale,
      price: currentPrice,
      quantity,
      salePrice: isOnSale ? currentSalePrice : undefined,
      totalPrice: quantity * effectivePrice,
      variantId: selectedVariantId,
      variantLabel: selectedVariant?.label || "",
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

  // Add visual indicator for out of stock items in variant selector
  const variantsWithStockIndicator = variants.map((variant) => {
    const isVariantInStock =
      variant.isInStock !== undefined ? variant.isInStock : true;
    return {
      ...variant,
      disabled: !isVariantInStock,
      label: variant.label + (isVariantInStock ? "" : " (Out of Stock)"),
    };
  });

  return (
    <div className="flex max-w-screen-xl flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md lg:flex-row dark:border-gray-800 dark:bg-gray-900">
      <div className="relative flex w-full flex-col bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-6 lg:w-2/5 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
        {badge && (
          <div className="absolute top-3 left-3 z-10 flex items-center justify-center">
            <div className="animate-pulse-slow rounded-full bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
              {badge}
            </div>
          </div>
        )}

        {/* Highlight glow effect */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-blue-300/30 blur-2xl"></div>
          <div className="absolute right-0 -bottom-8 h-28 w-28 rounded-full bg-indigo-400/20 blur-xl"></div>
        </div>

        <div className="z-10 mt-4 mb-auto flex w-full justify-center">
          {isLoading ? (
            <div className="flex h-[300px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
            </div>
          ) : (
            <ImageCarousel_Basic
              images={currentImages}
              aspectRatio="square"
              imageFit="contain"
              showThumbs={currentImages.length > 1}
              thumbPosition="bottom"
              className="mx-auto max-w-full"
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <PriceFormat
              prefix={currencyPrefix}
              value={effectivePrice}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            />
          </div>

          <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left column: Variants and quantity */}
          <div className="flex flex-col space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {variantLabel}
              </label>
              <VariantSelectorBasic
                value={selectedVariantId}
                onValueChange={handleVariantChange}
                variants={variantsWithStockIndicator}
                itemClassName="bg-gray-50 border-gray-200 hover:border-blue-300 dark:bg-gray-800 dark:border-gray-700
                            data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-50 
                            data-[state=checked]:text-blue-700 dark:data-[state=checked]:bg-gray-700 
                            dark:data-[state=checked]:border-blue-500 dark:data-[state=checked]:text-blue-300
                            focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:border-blue-400
                            dark:focus:ring-blue-500/40 dark:focus:ring-offset-gray-900"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Quantity
              </label>
              <QuantityInputBasic
                quantity={quantity}
                onChange={handleQuantityChange}
                max={
                  availableStock !== null && availableStock !== undefined
                    ? availableStock
                    : 10
                }
                className="max-w-[150px] border-gray-300 dark:border-gray-700"
                disabled={!isInStock}
              />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Features
            </h3>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
          <div>
            {!isInStock ? (
              <p className="flex items-center text-sm font-medium text-red-600 dark:text-red-400">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-red-500"></span>
                Out of Stock
              </p>
            ) : isLowStock ? (
              <p className="flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                Only {availableStock} units left
              </p>
            ) : (
              <p className="flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                In Stock
              </p>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Released on {releaseDate}
            </p>
            <p className="mt-2 text-sm font-medium">
              Total: {currencyPrefix}
              {(quantity * effectivePrice).toFixed(2)}
            </p>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={handleAddToCart}
              className="border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Add to cart"}
            </Button>
            <Button
              onClick={handleBuyNow}
              className="bg-blue-600 text-white hover:bg-blue-700"
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Buy now"}
            </Button>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-blue-50/50 p-4 dark:bg-blue-950/20">
          <div className="flex items-center">
            <ShieldCheck className="mr-2 h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Free 2-day shipping & 30-day money-back guarantee
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_03;
export type { ProductVariant03Props, VariantItem, VariantSelectionPayload };
