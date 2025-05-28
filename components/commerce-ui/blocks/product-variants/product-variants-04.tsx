"use client";

import ImageViewer from "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/components/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/components/quantity-input/basic/quantity-input-basic";
import StarRating_Fractions from "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions";
import VariantSelectorBasic, {
  VariantItem as BaseVariantItem,
} from "@/components/commerce-ui/components/variant-selector/basic/variant-selector-basic";
import VariantSelectorMultiple from "@/components/commerce-ui/components/variant-selector/multiple/variant-selector-multiple";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
} from "lucide-react";
import { useState } from "react";

interface StorageVariant extends BaseVariantItem {
  price: number;
  salePrice?: number;
  isInStock?: boolean;
  availableQuantity?: number | null;
}

interface AccessoryVariant extends BaseVariantItem {
  price: number;
  salePrice?: number;
}

interface Testimonial {
  name: string;
  role?: string;
  rating: number;
  text: string;
  date?: string;
}

interface VariantSelectionPayload {
  storageVariantId: string;
  storageVariantLabel: string;
  storagePrice: number;
  accessoryIds: string[];
  accessoryLabels: string[];
  accessoriesPrice: number;
  quantity: number;
  totalPrice: number;
}

interface ProductVariant04Props {
  imageUrl?: string;
  title?: string;
  description?: string;
  badge?: string | null;
  features?: string[];
  storageVariants: StorageVariant[];
  accessoryVariants?: AccessoryVariant[];
  testimonials?: Testimonial[];
  initialStorage?: string;
  initialAccessories?: string[];
  defaultImage?: string;
  onAddToCart?: (payload: VariantSelectionPayload) => void;
  onBuyNow?: (payload: VariantSelectionPayload) => void;
  selectedStorage?: string;
  onStorageChange?: (storage: string) => void;
  selectedAccessories?: string[];
  onAccessoriesChange?: (accessories: string[]) => void;
  quantity?: number;
  onQuantityChange?: (quantity: number) => void;
  isLoading?: boolean;
  errorMessage?: string | null;
  currencyPrefix?: string;
}

function ProductVariant_04({
  accessoryVariants = [],
  badge = "In Stock",
  currencyPrefix = "$",
  defaultImage,
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  errorMessage = null,
  features = ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  imageUrl = defaultImage,
  initialAccessories = [],
  initialStorage,
  isLoading = false,
  onAccessoriesChange,
  onAddToCart = () => {},
  onBuyNow = () => {},
  onQuantityChange,
  onStorageChange,
  quantity: controlledQuantity,
  selectedAccessories: controlledAccessories,
  selectedStorage: controlledStorage,
  storageVariants = [],
  testimonials = [
    {
      date: "3 weeks ago",
      name: "John Doe",
      rating: 5,
      role: "Role",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "2 weeks ago",
      name: "John Doe",
      rating: 4,
      role: "Role",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      date: "1 week ago",
      name: "John Doe",
      rating: 4.5,
      role: "Role",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  title = "Product Title",
}: ProductVariant04Props) {
  // Ensure storage variants array is not empty
  if (!storageVariants.length) {
    throw new Error("At least one storage variant must be provided");
  }

  const defaultInitialStorage = initialStorage || storageVariants[0].value;

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [internalSelectedStorage, setInternalSelectedStorage] = useState(
    defaultInitialStorage
  );
  const [internalSelectedAccessories, setInternalSelectedAccessories] =
    useState<string[]>(initialAccessories);
  const [internalQuantity, setInternalQuantity] = useState(1);

  // Determine if we're in controlled or uncontrolled mode
  const isStorageControlled = controlledStorage !== undefined;
  const isAccessoriesControlled = controlledAccessories !== undefined;
  const isQuantityControlled = controlledQuantity !== undefined;

  const selectedStorageId = isStorageControlled
    ? controlledStorage
    : internalSelectedStorage;
  const selectedAccessoryIds = isAccessoriesControlled
    ? controlledAccessories
    : internalSelectedAccessories;
  const quantity = isQuantityControlled ? controlledQuantity : internalQuantity;

  const handleStorageChange = (newStorage: string) => {
    if (isStorageControlled) {
      onStorageChange?.(newStorage);
    } else {
      setInternalSelectedStorage(newStorage);
    }
  };

  const handleAccessoriesChange = (newAccessories: string[]) => {
    if (isAccessoriesControlled) {
      onAccessoriesChange?.(newAccessories);
    } else {
      setInternalSelectedAccessories(newAccessories);
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (isQuantityControlled) {
      onQuantityChange?.(newQuantity);
    } else {
      setInternalQuantity(newQuantity);
    }
  };

  const selectedStorage =
    storageVariants.find((v) => v.value === selectedStorageId) ||
    storageVariants[0];

  const isInStock =
    selectedStorage.isInStock !== undefined ? selectedStorage.isInStock : true;
  const availableQuantity = selectedStorage.availableQuantity;
  const storagePrice = selectedStorage.price;
  const accessoriesPrice = selectedAccessoryIds.reduce((total, accId) => {
    const accessory = accessoryVariants.find((a) => a.value === accId);
    return total + (accessory?.price || 0);
  }, 0);

  const itemPrice = storagePrice + accessoriesPrice;
  const totalPrice = itemPrice * quantity;

  const handleAddToCart = () => {
    onAddToCart({
      accessoriesPrice,
      accessoryIds: selectedAccessoryIds,
      accessoryLabels: selectedAccessoryIds.map((id) => {
        const accessory = accessoryVariants.find((a) => a.value === id);
        return accessory?.label || "";
      }),
      quantity,
      storagePrice,
      storageVariantId: selectedStorageId,
      storageVariantLabel: selectedStorage?.label || "",
      totalPrice,
    });
  };

  const handleBuyNow = () => {
    onBuyNow({
      accessoriesPrice,
      accessoryIds: selectedAccessoryIds,
      accessoryLabels: selectedAccessoryIds.map((id) => {
        const accessory = accessoryVariants.find((a) => a.value === id);
        return accessory?.label || "";
      }),
      quantity,
      storagePrice,
      storageVariantId: selectedStorageId,
      storageVariantLabel: selectedStorage?.label || "",
      totalPrice,
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

  // Add visual indicator for out of stock items in storage selector
  const storageVariantsWithStockIndicator = storageVariants.map((variant) => {
    const isVariantInStock =
      variant.isInStock !== undefined ? variant.isInStock : true;
    return {
      ...variant,
      disabled: !isVariantInStock,
      label: variant.label + (isVariantInStock ? "" : " (Out of Stock)"),
    };
  });

  return (
    <div className="flex max-w-screen-xl flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Main product card */}
      <div className="group align-start flex flex-col sm:h-auto sm:flex-row">
        <div className="relative h-52 w-full bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 sm:h-[350px] sm:w-2/5 dark:from-gray-900 dark:via-green-950/10 dark:to-emerald-950/10">
          <div className="absolute inset-0">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl"></div>
            <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-green-400/20 blur-xl"></div>
          </div>

          {/* Product label */}
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <div className="rounded-md bg-emerald-500 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                {badge}
              </div>
            </div>
          )}

          {/* Image */}
          <div className="flex h-full items-center justify-center p-4">
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600"></div>
              </div>
            ) : (
              <ImageViewer
                imageUrl={imageUrl || ""}
                classNameThumbnailViewer="rounded-lg h-full object-contain drop-shadow-lg max-h-[300px]"
              />
            )}
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            {/* Product name, price and description */}
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <PriceFormat
                  prefix={currencyPrefix}
                  value={itemPrice}
                  className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            {/* Variants selection */}
            <div className="mb-4 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Storage
                </label>
                <VariantSelectorBasic
                  value={selectedStorageId}
                  onValueChange={handleStorageChange}
                  variants={storageVariantsWithStockIndicator}
                  itemClassName="bg-gray-50 border-gray-200 hover:border-emerald-300 dark:bg-gray-800 dark:border-gray-700
                              data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-50 
                              data-[state=checked]:text-emerald-700 dark:data-[state=checked]:bg-gray-700 
                              dark:data-[state=checked]:border-emerald-500 dark:data-[state=checked]:text-emerald-300
                              focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:border-emerald-400
                              dark:focus:ring-emerald-500/40 dark:focus:ring-offset-gray-900"
                />
              </div>

              {accessoryVariants.length > 0 && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Accessories
                  </label>
                  <VariantSelectorMultiple
                    values={selectedAccessoryIds}
                    onValuesChange={handleAccessoriesChange}
                    variants={accessoryVariants}
                    className="flex-wrap"
                    itemClassName="bg-gray-50 border-gray-200 hover:border-emerald-300 dark:bg-gray-800 dark:border-gray-700
                                data-[state=on]:border-emerald-500 data-[state=on]:bg-emerald-50 
                                data-[state=on]:text-emerald-700 dark:data-[state=on]:bg-gray-700 
                                dark:data-[state=on]:border-emerald-500 dark:data-[state=on]:text-emerald-300
                                focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2
                                dark:focus:ring-emerald-500/40 dark:focus:ring-offset-gray-900"
                  />
                </div>
              )}
            </div>

            {/* Accessories details if selected */}
            {selectedAccessoryIds.length > 0 && (
              <div className="mb-4 rounded-md bg-emerald-50 p-3 dark:bg-emerald-950/20">
                <h4 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  Selected accessories:
                </h4>
                <ul className="space-y-1">
                  {selectedAccessoryIds.map((accId) => {
                    const accessory = accessoryVariants.find(
                      (a) => a.value === accId
                    );
                    return (
                      <li
                        key={accId}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-700 dark:text-gray-300">
                          {accessory?.label}
                        </span>
                        <PriceFormat
                          prefix={currencyPrefix}
                          value={accessory?.price || 0}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Stock status */}
            {isInStock ? (
              availableQuantity !== null &&
              availableQuantity !== undefined && (
                <div className="mb-3 rounded-md bg-green-50 p-2 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                  <p className="text-sm font-bold">
                    In Stock: {availableQuantity} available
                  </p>
                </div>
              )
            ) : (
              <div className="mb-3 rounded-md bg-amber-50 p-2 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                <p className="text-sm font-bold">Currently out of stock</p>
              </div>
            )}

            {/* Quantity selection */}
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                Quantity
              </label>
              <div className="flex items-center justify-between">
                <QuantityInputBasic
                  quantity={quantity}
                  onChange={handleQuantityChange}
                  max={
                    availableQuantity !== null &&
                    availableQuantity !== undefined
                      ? availableQuantity
                      : 10
                  }
                  className="w-[120px] border-gray-300 dark:border-gray-700"
                  disabled={!isInStock}
                />
                <div className="text-sm font-medium">
                  Total:{" "}
                  <PriceFormat prefix={currencyPrefix} value={totalPrice} />
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="mb-3">
              <h4 className="mb-2 font-medium text-gray-800 dark:text-gray-200">
                Key Features
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <Check className="mr-1.5 h-4 w-4 text-emerald-500" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={handleAddToCart}
              className="flex-1 border-gray-300 bg-white text-gray-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Add to cart"}
            </Button>
            <Button
              onClick={handleBuyNow}
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
              disabled={!isInStock || isLoading}
            >
              {isLoading ? "Loading..." : "Buy now"}
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonials section */}
      {testimonials.length > 0 && (
        <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900/50">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center text-base font-medium text-gray-900 dark:text-white">
              <MessageSquareText className="mr-2 h-5 w-5 text-emerald-500 dark:text-emerald-400" />
              Customer Reviews
            </h4>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {testimonials.length} reviews
            </div>
          </div>

          {/* Current testimonial */}
          <div className="mb-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-green-500 text-center font-medium text-white">
                  {testimonials[activeTestimonial].name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    {testimonials[activeTestimonial].name}
                  </p>
                  {testimonials[activeTestimonial].role && (
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonials[activeTestimonial].role}
                    </p>
                  )}
                </div>
              </div>

              <StarRating_Fractions
                value={testimonials[activeTestimonial].rating}
                readOnly={true}
                iconSize={16}
                color="#F59E0B" // amber-400 color
                className="flex-shrink-0"
              />
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              {testimonials[activeTestimonial].text}
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {testimonials[activeTestimonial].date}
            </p>
          </div>

          {/* Testimonial navigation */}
          <div className="flex items-center justify-between">
            <div className="flex space-x-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2 w-6 rounded-full transition-colors ${
                    activeTestimonial === index
                      ? "bg-emerald-500"
                      : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`View review ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-1">
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                className="rounded p-1 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Previous review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === testimonials.length - 1 ? 0 : prev + 1
                  )
                }
                className="rounded p-1 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700"
                aria-label="Next review"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductVariant_04;
export type {
  AccessoryVariant,
  ProductVariant04Props,
  StorageVariant,
  Testimonial,
  VariantSelectionPayload,
};
