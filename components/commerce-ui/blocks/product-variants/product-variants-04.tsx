"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import VariantSelectorBasic from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import VariantSelectorMultiple, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
} from "lucide-react";
import { useState } from "react";

// Default storage variants
const DEFAULT_STORAGE_VARIANTS: VariantItem[] = [
  { id: "storage-64", label: "64GB", value: "storage-64" },
  { id: "storage-128", label: "128GB", value: "storage-128" },
  { id: "storage-256", label: "256GB", value: "storage-256" },
];

// Default accessory options
const DEFAULT_ACCESSORY_VARIANTS: VariantItem[] = [
  { id: "acc-sd", label: "SD Card (64GB)", value: "acc-sd" },
  { id: "acc-tripod", label: "Mini Tripod", value: "acc-tripod" },
  { id: "acc-bag", label: "Camera Bag", value: "acc-bag" },
  { id: "acc-lens", label: "Extra Lens", value: "acc-lens" },
  { id: "acc-batt", label: "Battery Pack", value: "acc-batt" },
];

// Default image
const DEFAULT_PRODUCT_IMAGE =
  "https://images.pexels.com/photos/6883802/pexels-photo-6883802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

// Storage pricing
const DEFAULT_STORAGE_PRICES: Record<string, number> = {
  "storage-128": 1399.99,
  "storage-256": 1499.99,
  "storage-64": 1299.99,
};

// Accessory pricing
const DEFAULT_ACCESSORY_PRICES: Record<string, number> = {
  "acc-bag": 79.99,
  "acc-batt": 59.99,
  "acc-lens": 249.99,
  "acc-sd": 29.99,
  "acc-tripod": 49.99,
};

interface Testimonial {
  name: string;
  role?: string;
  rating: number;
  text: string;
  date?: string;
}

interface ProductVariant_04Props {
  imageUrl?: string;
  productName?: string;
  description?: string;
  basePrice?: number;
  storagePrices?: Record<string, number>;
  accessoryPrices?: Record<string, number>;
  inStock?: boolean;
  features?: string[];
  storageVariants?: VariantItem[];
  accessoryVariants?: VariantItem[];
  testimonials?: Testimonial[];
  initialStorage?: string;
  initialAccessories?: string[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductVariant_04({
  accessoryPrices = DEFAULT_ACCESSORY_PRICES,
  accessoryVariants = DEFAULT_ACCESSORY_VARIANTS,
  basePrice = 1299.99,
  currencyPrefix = "$",
  description = "Professional-grade mirrorless camera with 32MP sensor and 4K video recording capabilities",
  features = [
    "32 Megapixel Sensor",
    "4K Video Recording",
    "5-Axis Stabilization",
    "Weather-Sealed Body",
  ],
  imageUrl = DEFAULT_PRODUCT_IMAGE,
  initialAccessories = ["acc-sd", "acc-tripod"],
  initialStorage = "storage-128",
  inStock = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  productName = "ProCapture X3 Digital Camera",
  storagePrices = DEFAULT_STORAGE_PRICES,
  storageVariants = DEFAULT_STORAGE_VARIANTS,
  testimonials = [
    {
      date: "3 weeks ago",
      name: "Michael Roberts",
      rating: 5,
      role: "Professional Photographer",
      text: "The image quality is exceptional. I've switched from my DSLR and haven't looked back.",
    },
    {
      date: "1 month ago",
      name: "Sarah Chen",
      rating: 4,
      role: "Content Creator",
      text: "Perfect for my YouTube videos. The autofocus is lightning fast!",
    },
    {
      date: "2 months ago",
      name: "Alex Johnson",
      rating: 5,
      text: "Worth every penny. The low light performance is incredible.",
    },
  ],
}: ProductVariant_04Props = {}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(initialStorage);
  const [selectedAccessories, setSelectedAccessories] =
    useState<string[]>(initialAccessories);
  const [quantity, setQuantity] = useState(1);

  // Get current price based on selected storage
  const baseStoragePrice = storagePrices[selectedStorage] || basePrice;

  // Calculate accessories price
  const accessoriesPrice = selectedAccessories.reduce(
    (total, acc) => total + (accessoryPrices[acc] || 0),
    0
  );

  // Calculate total item price
  const itemPrice = baseStoragePrice + accessoriesPrice;

  // Calculate total price including quantity
  const totalPrice = itemPrice * quantity;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Main product card */}
      <div className="group align-start flex flex-col sm:h-auto sm:flex-row">
        {/* Image section */}
        <div className="relative h-52 w-full bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 sm:h-[350px] sm:w-2/5 dark:from-gray-900 dark:via-green-950/10 dark:to-emerald-950/10">
          <div className="absolute inset-0">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-2xl"></div>
            <div className="absolute -bottom-8 left-0 h-28 w-28 rounded-full bg-green-400/20 blur-xl"></div>
          </div>

          {/* Product label */}
          {inStock ? (
            <div className="absolute top-3 left-3 z-10">
              <div className="rounded-md bg-green-500 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                In Stock
              </div>
            </div>
          ) : (
            <div className="absolute top-3 left-3 z-10">
              <div className="rounded-md bg-amber-500 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                Pre-order
              </div>
            </div>
          )}

          {/* Image */}
          <div className="flex h-full items-center justify-center p-4">
            <ImageViewer
              imageUrl={imageUrl}
              classNameThumbnailViewer="rounded-lg h-full object-contain drop-shadow-lg max-h-[300px]"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="flex flex-1 flex-col justify-between p-5">
          <div>
            {/* Product name, price and description */}
            <div className="mb-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {productName}
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
                  value={selectedStorage}
                  onValueChange={setSelectedStorage}
                  variants={storageVariants}
                  itemClassName="bg-gray-50 border-gray-200 hover:border-emerald-300 dark:bg-gray-800 dark:border-gray-700
                              data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-50 
                              data-[state=checked]:text-emerald-700 dark:data-[state=checked]:bg-gray-700 
                              dark:data-[state=checked]:border-emerald-500 dark:data-[state=checked]:text-emerald-300
                              focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:border-emerald-400
                              dark:focus:ring-emerald-500/40 dark:focus:ring-offset-gray-900"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Accessories
                </label>
                <VariantSelectorMultiple
                  values={selectedAccessories}
                  onValuesChange={setSelectedAccessories}
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
            </div>

            {/* Accessories details if selected */}
            {selectedAccessories.length > 0 && (
              <div className="mb-4 rounded-md bg-emerald-50 p-3 dark:bg-emerald-950/20">
                <h4 className="mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                  Selected accessories:
                </h4>
                <ul className="space-y-1">
                  {selectedAccessories.map((accId) => {
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
                          value={accessoryPrices[accId] || 0}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                      </li>
                    );
                  })}
                </ul>
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
                  onChange={setQuantity}
                  max={10}
                  className="w-[120px] border-gray-300 dark:border-gray-700"
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
              onClick={onAddToCart}
              className="flex-1 border-gray-300 bg-white text-gray-700 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              Add to cart
            </Button>
            <Button
              onClick={onBuyNow}
              className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>

      {/* Compact horizontal testimonials section */}
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
    </div>
  );
}

export default ProductVariant_04;
export type { ProductVariant_04Props, Testimonial };
