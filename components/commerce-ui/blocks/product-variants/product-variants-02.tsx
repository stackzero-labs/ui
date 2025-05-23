"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem as BaseVariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Clock } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface VariantItem extends BaseVariantItem {
  price: number;
  salePrice?: number;
  imageUrl?: string;
  isInStock?: boolean; // Added stock status per variant
  availableQuantity?: number | null; // Added quantity per variant
}

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

interface ProductVariant02Props {
  title?: string;
  description?: string;
  badge?: string | null;
  shippingInfo?: string;
  variants: VariantItem[];
  defaultImage?: string;
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
  sellerName?: string;
  marketplaceName?: string;
  returnPolicyUrl?: string;
}

function ProductVariant_02({
  badge = "New",
  defaultImage,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  errorMessage = null,
  initialVariant,
  isLoading = false,
  marketplaceName = "Lorem Marketplace",
  onAddToCart = () => {},
  onBuyNow = () => {},
  onQuantityChange,
  onVariantChange,
  quantity: controlledQuantity,
  returnPolicyUrl = "/",
  selectedVariant: controlledVariant,
  sellerName = "Seller Name",
  shippingInfo = "Free shipping",
  title = "Product Variant Title",
  variantLabel = "Variant",
  variants = [],
}: ProductVariant02Props) {
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

  const currentImage = selectedVariant?.imageUrl || defaultImage;
  const currentPrice = selectedVariant.price;
  const currentSalePrice = selectedVariant.salePrice;
  const isOnSale =
    currentSalePrice !== undefined && currentSalePrice < currentPrice;

  // Get stock status from the selected variant
  const isInStock =
    selectedVariant.isInStock !== undefined ? selectedVariant.isInStock : true; // Default to in stock if not specified

  const availableQuantity = selectedVariant.availableQuantity;

  const effectivePrice = isOnSale ? currentSalePrice : currentPrice;

  const handleAddToCart = () => {
    onAddToCart({
      isOnSale,
      originalPrice: isOnSale ? currentPrice : undefined,
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
      originalPrice: isOnSale ? currentPrice : undefined,
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
    <div className="grid max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
      <div className="col-span-1 md:col-span-2">
        <div>
          <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-rose-50 to-orange-50 p-6 dark:from-rose-950/30 dark:to-orange-950/30">
            {badge && (
              <span className="absolute top-4 left-4 z-10 rounded-full bg-gradient-to-r from-rose-500 to-red-700 px-3 py-1.5 text-xs font-semibold text-white">
                {badge}
              </span>
            )}
            <div className="transition-transform duration-500 hover:scale-105">
              {isLoading ? (
                <div className="flex h-[300px] items-center justify-center">
                  <div className="h-10 w-10 animate-spin rounded-full border-4 border-rose-200 border-t-rose-600"></div>
                </div>
              ) : (
                <ImageViewer
                  imageUrl={currentImage || ""}
                  classNameThumbnailViewer="rounded-lg object-contain h-[300px] mx-auto"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4 md:mt-6 md:gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-gray-100">
              {title}
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {variantLabel}
              </label>
              <VariantSelectorBasic
                value={selectedVariantId}
                onValueChange={handleVariantChange}
                variants={variantsWithStockIndicator}
                className="grid-cols-2 sm:grid-cols-2"
                itemClassName="bg-gray-50 border-gray-200 hover:border-rose-300 dark:bg-gray-800 dark:border-gray-700
                            data-[state=checked]:border-rose-500 data-[state=checked]:bg-rose-50 
                            data-[state=checked]:text-rose-700 dark:data-[state=checked]:bg-gray-700 
                            dark:data-[state=checked]:border-rose-500 dark:data-[state=checked]:text-rose-300
                            focus:ring-2 focus:ring-rose-500/50 focus:ring-offset-2 focus:border-rose-400
                            dark:focus:ring-rose-500/40 dark:focus:ring-offset-gray-900"
              />
            </div>
          </div>

          {isInStock ? (
            <div className="rounded-md bg-green-50 p-3 text-green-800 dark:bg-green-900/20 dark:text-green-300">
              <p className="text-sm font-bold">In Stock</p>
              {availableQuantity !== null &&
                availableQuantity !== undefined &&
                availableQuantity > 0 && (
                  <span className="mt-1 text-sm font-normal">
                    {availableQuantity} units available
                  </span>
                )}
            </div>
          ) : (
            <div className="rounded-md bg-amber-50 p-3 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
              <p className="text-sm font-bold">Currently out of stock</p>
            </div>
          )}

          <div className="mt-2 md:mt-4">
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              Selected Configuration:
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {selectedVariant.label} - ${effectivePrice.toFixed(2)}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {isInStock ? "In Stock" : "Out of Stock"}
              {isInStock &&
                availableQuantity !== null &&
                availableQuantity !== undefined &&
                ` (${availableQuantity} available)`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-2">
        <div className="rounded-md outline outline-rose-500">
          <div className="rounded-md rounded-b-none bg-gradient-to-r from-rose-500 to-red-600 p-3">
            <p className="font-semibold text-white">
              Get Free Shipping and 1-day delivery!
            </p>
          </div>

          <div className="bg-rose-50/60 p-4 dark:bg-rose-900/20">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enjoy exclusive benefits and discounts. 30-day free trial.
            </p>
            <Button
              variant="link"
              className="mt-1 w-full text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
            >
              Join Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-md border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <PriceFormat_Sale
            prefix="$"
            originalPrice={currentPrice}
            salePrice={isOnSale ? currentSalePrice : undefined}
            showSavePercentage
            className="text-3xl font-semibold text-gray-600 dark:text-gray-300"
            classNameSalePrice="text-3xl font-bold text-rose-600 dark:text-rose-400"
            classNameSalePercentage="rounded-sm bg-green-500/50 p-1 text-xs font-medium text-white"
          />
          {shippingInfo && (
            <p className="mt-1 inline-flex items-center text-sm text-green-600 dark:text-green-400">
              <Clock className="mr-1 h-4 w-4" />
              {shippingInfo}
            </p>
          )}

          <div className="flex items-center gap-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Quantity:{" "}
            </label>
            <QuantityInputBasic
              quantity={quantity}
              onChange={handleQuantityChange}
              max={
                availableQuantity !== null && availableQuantity !== undefined
                  ? availableQuantity
                  : undefined
              }
              min={1}
              className="border-gray-300 dark:border-gray-700"
              disabled={!isInStock}
            />
          </div>

          <div className="flex w-full flex-col gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="w-full border-gray-300 bg-white py-5 text-base text-gray-800 transition-all duration-200 hover:border-rose-500 hover:bg-rose-50 hover:text-rose-700 sm:py-2 sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-rose-500 dark:hover:bg-gray-700"
              onClick={handleAddToCart}
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Add to Cart"}
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-rose-600 to-red-600 py-5 text-base text-white transition-all hover:from-rose-700 hover:to-red-700 sm:py-2 sm:text-sm"
              onClick={handleBuyNow}
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Buy Now"}
            </Button>
          </div>

          <Separator className="my-4" />

          {/* Bottom section: Stock info and call-to-action buttons */}
          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
            <div className="col-span-1 text-gray-600 dark:text-gray-400">
              Sold by:
            </div>
            <div className="col-span-2">
              <Link
                href="/"
                className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
              >
                {sellerName}
              </Link>
            </div>
            <div className="col-span-1 text-gray-600 dark:text-gray-400">
              Shipping:
            </div>
            <div className="col-span-2">
              <Link
                href="/"
                className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
              >
                {marketplaceName}
              </Link>
            </div>
            <div className="col-span-1 text-gray-600 dark:text-gray-400">
              Return Policy:{" "}
            </div>
            <div className="col-span-2">
              <Link
                href={returnPolicyUrl}
                className="text-rose-600 hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-rose-300"
              >
                View our Return Policy
              </Link>
            </div>
            <div className="col-span-1 text-gray-600 dark:text-gray-400">
              Payment:
            </div>
            <div className="col-span-2">Secure Payment</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductVariant_02;
export type { ProductVariant02Props, VariantItem, VariantSelectionPayload };
