"use client";

import ImageCarousel_Basic, {
  CarouselImage,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const DEFAULT_MODEL_VARIANTS: VariantItem[] = [
  { id: "model-standard", label: "Standard", value: "model-standard" },
  { id: "model-pro", label: "Pro", value: "model-pro" },
  { id: "model-ultra", label: "Ultra", value: "model-ultra" },
  { id: "model-limited", label: "Limited Edition", value: "model-limited" },
];

const DEFAULT_PRODUCT_IMAGES: Record<string, CarouselImage[]> = {
  "model-limited": [
    {
      title: "Limited Edition Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
    {
      title: "Limited Edition Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
    {
      title: "Limited Edition Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
  ],
  "model-pro": [
    {
      title: "Pro Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
    {
      title: "Pro Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
  ],
  "model-standard": [
    {
      title: "Standard Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
    {
      title: "Standard Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
  ],
  "model-ultra": [
    {
      title: "Ultra Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
    {
      title: "Ultra Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
  ],
};

const DEFAULT_MODEL_PRICES = {
  "model-limited": 349.99,
  "model-pro": 249.99,
  "model-standard": 199.99,
  "model-ultra": 299.99,
};

const DEFAULT_MODEL_FEATURES: Record<string, string[]> = {
  "model-limited": [
    "360° Immersive Sound",
    "Waterproof Design",
    "24-hour Battery Life",
    "Bluetooth 5.2",
    "Voice Assistant",
    "Multi-room Sync",
    "Exclusive Design",
  ],
  "model-pro": [
    "360° Immersive Sound",
    "Waterproof Design",
    "15-hour Battery Life",
    "Bluetooth 5.1",
    "Voice Assistant",
  ],
  "model-standard": [
    "360° Immersive Sound",
    "Waterproof Design",
    "10-hour Battery Life",
    "Bluetooth 5.0",
  ],
  "model-ultra": [
    "360° Immersive Sound",
    "Waterproof Design",
    "20-hour Battery Life",
    "Bluetooth 5.2",
    "Voice Assistant",
    "Multi-room Sync",
  ],
};

interface ProductVariant03Props {
  title?: string;
  description?: string;
  badge?: string | null;
  basePrice?: number;
  availableStock?: number;
  releaseDate?: string;
  modelVariants?: VariantItem[];
  modelPrices?: Record<string, number>;
  productImages?: Record<string, CarouselImage[]>;
  modelFeatures?: Record<string, string[]>;
  initialModel?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductVariant_03({
  availableStock = 24,
  badge = "Just Released",
  basePrice = 199.99,
  currencyPrefix = "$",
  description = "Next-generation portable speaker with 360° spatial audio and 24-hour battery life. Perfect for home, travel, and outdoor adventures.",
  initialModel = "model-standard",
  modelFeatures = DEFAULT_MODEL_FEATURES,
  modelPrices = DEFAULT_MODEL_PRICES,
  modelVariants = DEFAULT_MODEL_VARIANTS,
  onAddToCart = () => {},
  onBuyNow = () => {},
  productImages = DEFAULT_PRODUCT_IMAGES,
  releaseDate = "August 15, 2023",
  title = "SoundSphere Ultra Wireless Speaker",
}: ProductVariant03Props) {
  const [selectedModel, setSelectedModel] = useState(initialModel);
  const [quantity, setQuantity] = useState(1);

  // Get current images based on selected model
  const currentImages = productImages[selectedModel] || [
    {
      title: "Standard Speaker",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    },
  ];

  // Get current price based on selected model
  const currentPrice = modelPrices[selectedModel] || basePrice;

  // Get features for the selected model
  const features = modelFeatures[selectedModel] || [];

  const isLowStock = availableStock <= 25;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md lg:flex-row dark:border-gray-800 dark:bg-gray-900">
      {/* Left section: Product Image */}
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

        {/* Image carousel - now positioned at the top of its container */}
        <div className="z-10 mt-4 mb-auto flex w-full justify-center">
          <ImageCarousel_Basic
            images={currentImages}
            aspectRatio="square"
            imageFit="contain"
            showThumbs={currentImages.length > 1}
            thumbPosition="bottom"
            className="mx-auto max-w-full"
          />
        </div>
      </div>

      {/* Right section: Product Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <div className="flex flex-col justify-between space-y-2 sm:flex-row sm:items-center sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h2>
            <PriceFormat
              prefix={currencyPrefix}
              value={currentPrice}
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
                Model
              </label>
              <VariantSelectorBasic
                value={selectedModel}
                onValueChange={setSelectedModel}
                variants={modelVariants}
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
                onChange={setQuantity}
                max={10}
                className="max-w-[150px] border-gray-300 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Right column: Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Features
            </h3>
            <ul className="grid grid-cols-1 gap-x-4 gap-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="mr-2 h-5 w-5 text-blue-500"
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
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Bottom section: Stock info and call-to-action buttons */}
        <div className="flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
          <div>
            {isLowStock ? (
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
              {(quantity * currentPrice).toFixed(2)}
            </p>
          </div>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onAddToCart}
              className="border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              Add to cart
            </Button>
            <Button
              onClick={onBuyNow}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Buy now
            </Button>
          </div>
        </div>

        <div className="mt-4 rounded-md bg-blue-50/50 p-4 dark:bg-blue-950/20">
          <div className="flex items-center">
            <svg
              className="mr-2 h-5 w-5 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
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
export type { ProductVariant03Props };
