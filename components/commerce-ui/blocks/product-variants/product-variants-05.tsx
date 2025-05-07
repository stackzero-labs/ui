"use client";

import ImageCarouselBasic, {
  CarouselImage,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import VariantSelectorMultiple, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/multiple/variant-selector-multiple";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { useState } from "react";

// Default accessory options
const DEFAULT_ACCESSORY_VARIANTS: VariantItem[] = [
  { id: "acc-pitcher", label: "Milk Pitcher", value: "acc-pitcher" },
  { id: "acc-descaler", label: "Descaling Kit", value: "acc-descaler" },
  { id: "acc-filter", label: "Water Filter Pack", value: "acc-filter" },
  { id: "acc-cups", label: "Espresso Cup Set", value: "acc-cups" },
  { id: "acc-tamper", label: "Premium Tamper", value: "acc-tamper" },
];

// Default service options
const DEFAULT_SERVICE_VARIANTS: VariantItem[] = [
  {
    id: "serv-extended",
    label: "Extended Warranty (+2 Years)",
    value: "serv-extended",
  },
  {
    id: "serv-installation",
    label: "Professional Installation",
    value: "serv-installation",
  },
  {
    id: "serv-maintenance",
    label: "Annual Maintenance Plan",
    value: "serv-maintenance",
  },
];

// Default product images for carousel
const DEFAULT_PRODUCT_IMAGES: CarouselImage[] = [
  {
    title: "Coffee Machine Front View",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-01.jpg",
  },
  {
    title: "Coffee Machine Side View",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg",
  },
  {
    title: "Coffee Machine Cups",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-cups-01.jpg",
  },

  {
    title: "Coffee Filters",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-filter-01.jpg",
  },
];

// Accessory pricing
const DEFAULT_ACCESSORY_PRICES: Record<string, number> = {
  "acc-cups": 39.99,
  "acc-descaler": 19.99,
  "acc-filter": 29.99,
  "acc-pitcher": 24.99,
  "acc-tamper": 44.99,
};

// Service pricing
const DEFAULT_SERVICE_PRICES: Record<string, number> = {
  "serv-extended": 99.99,
  "serv-installation": 79.99,
  "serv-maintenance": 149.99,
};

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturedReview {
  rating: number;
  reviewDate: string;
  reviewText: string;
  avatarUrl: string;
  reviewerName: string;
  reviewerTitle: string;
}

interface ProductVariant_05Props {
  imageUrl?: string;
  productImages?: CarouselImage[];
  productName?: string;
  description?: string;
  price?: number;
  rating?: number;
  reviewCount?: number;
  warranty?: string;
  benefits?: Benefit[];
  accessoryVariants?: VariantItem[];
  serviceVariants?: VariantItem[];
  accessoryPrices?: Record<string, number>;
  servicePrices?: Record<string, number>;
  initialAccessories?: string[];
  initialServices?: string[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
  featuredReview?: FeaturedReview;
}

function ProductVariant_05({
  accessoryPrices = DEFAULT_ACCESSORY_PRICES,
  accessoryVariants = DEFAULT_ACCESSORY_VARIANTS,
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
  rating = 4.8,
  featuredReview = {
    avatarUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-04.jpg",
    rating: 5,
    reviewDate: "Mar 15, 2024",
    reviewerName: "John Doe",
    reviewerTitle: "Coffee Enthusiast",
    reviewText:
      "This espresso machine changed my mornings completely. The milk frother creates the perfect foam for my lattes and the coffee quality is indistinguishable from my local café.",
  },
  initialAccessories = ["acc-descaler"],
  initialServices = [],
  onAddToCart = () => {},
  onBuyNow = () => {},
  price = 399.99,
  productImages = DEFAULT_PRODUCT_IMAGES,
  productName = "BrewMaster Pro Coffee Machine",
  reviewCount = 256,
  servicePrices = DEFAULT_SERVICE_PRICES,
  serviceVariants = DEFAULT_SERVICE_VARIANTS,
  warranty = "2 Year",
}: ProductVariant_05Props = {}) {
  const [selectedAccessories, setSelectedAccessories] =
    useState<string[]>(initialAccessories);
  const [selectedServices, setSelectedServices] =
    useState<string[]>(initialServices);
  const [quantity, setQuantity] = useState(1);

  // Calculate accessories price
  const accessoriesPrice = selectedAccessories.reduce(
    (total, acc) => total + (accessoryPrices[acc] || 0),
    0
  );

  // Calculate services price
  const servicesPrice = selectedServices.reduce(
    (total, serv) => total + (servicePrices[serv] || 0),
    0
  );

  // Calculate total item price
  const itemPrice = price + accessoriesPrice + servicesPrice;

  // Calculate total price including quantity
  const totalPrice = itemPrice * quantity;

  return (
    <div className="flex flex-col">
      {/* Main product card */}
      <div className="border-brown-200 dark:border-brown-800 relative flex flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-8 -left-8 h-32 w-32 animate-pulse rounded-full bg-amber-700/20"></div>
          <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-amber-900/10 blur-md"></div>
          <div className="absolute bottom-12 left-1/3 h-24 w-24 rounded-full bg-amber-600/10 blur-sm"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(146,64,14,0.08),transparent)]"></div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Image and review section - left column - MADE LARGER */}
          <div className="to-brown-50 relative flex w-full flex-col bg-gradient-to-br from-amber-50 via-amber-100/50 lg:h-auto lg:w-1/2 dark:from-gray-900 dark:via-amber-950/10 dark:to-gray-900">
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

            {/* Image Carousel replacing Image Viewer */}
            <div className="relative z-10 flex h-full items-center justify-center p-6">
              <div className="w-full transition-all duration-500">
                <ImageCarouselBasic
                  images={productImages}
                  //   imageFit="contain"
                  //   aspectRatio="wide"
                  showThumbs={true}
                  thumbPosition="bottom"
                  showCarouselControls={true}
                  className="mx-auto"
                />
              </div>
            </div>

            {/* Featured Review section - below image */}
            <div className="relative z-10 px-6 pb-6">
              <div className="rounded-lg bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:bg-gray-800/80">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-amber-700 dark:text-amber-500" />
                    <h4 className="text-sm font-medium text-amber-900 dark:text-amber-100">
                      1,000+ Happy Customers
                    </h4>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <StarRating_Fractions
                      value={featuredReview.rating}
                      readOnly={true}
                      iconSize={14}
                      color="#92400E"
                      className="flex-shrink-0"
                    />
                    <span className="text-xs">{featuredReview.reviewDate}</span>
                  </div>
                  <p className="text-sm italic">
                    &quot;{featuredReview.reviewText}&quot;
                  </p>
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredReview.avatarUrl}
                      alt={featuredReview.reviewerName}
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-medium text-amber-900 dark:text-amber-100">
                        {featuredReview.reviewerName}
                      </p>
                      <p className="text-xs text-amber-700 dark:text-amber-400">
                        {featuredReview.reviewerTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content section - right side - ADJUSTED WIDTH */}
          <div className="relative z-10 flex flex-1 flex-col justify-between p-5 lg:w-1/2">
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

                <p className="text-sm">{description}</p>
              </div>

              {/* Variants selection */}
              <div className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-amber-800 dark:text-amber-300">
                    Accessories
                  </label>
                  <VariantSelectorMultiple
                    values={selectedAccessories}
                    onValuesChange={setSelectedAccessories}
                    variants={accessoryVariants}
                    className="flex-wrap"
                    itemClassName="bg-amber-50 border-amber-200 hover:border-amber-400 dark:bg-gray-800 dark:border-amber-700/50
                                data-[state=on]:border-amber-600 data-[state=on]:bg-amber-100 
                                data-[state=on]:text-amber-800 dark:data-[state=on]:bg-gray-700 
                                dark:data-[state=on]:border-amber-500 dark:data-[state=on]:text-amber-300
                                focus:ring-2 focus:ring-amber-500/40 focus:ring-offset-1
                                dark:focus:ring-amber-500/30 dark:focus:ring-offset-gray-900"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-amber-800 dark:text-amber-300">
                    Service & Protection
                  </label>
                  <VariantSelectorMultiple
                    values={selectedServices}
                    onValuesChange={setSelectedServices}
                    variants={serviceVariants}
                    className="flex-wrap"
                    itemClassName="bg-amber-50 border-amber-200 hover:border-amber-400 dark:bg-gray-800 dark:border-amber-700/50
                                data-[state=on]:border-amber-600 data-[state=on]:bg-amber-100 
                                data-[state=on]:text-amber-800 dark:data-[state=on]:bg-gray-700 
                                dark:data-[state=on]:border-amber-500 dark:data-[state=on]:text-amber-300
                                focus:ring-2 focus:ring-amber-500/40 focus:ring-offset-1
                                dark:focus:ring-amber-500/30 dark:focus:ring-offset-gray-900"
                  />
                </div>
              </div>

              {/* Selections summary */}
              {(selectedAccessories.length > 0 ||
                selectedServices.length > 0) && (
                <div className="my-4 rounded-md bg-amber-50 p-3 dark:bg-amber-950/20">
                  {selectedAccessories.length > 0 && (
                    <div className="mb-2">
                      <h4 className="text-sm font-medium text-amber-800 dark:text-amber-200">
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
                              <span>{accessory?.label}</span>
                              <PriceFormat
                                prefix={currencyPrefix}
                                value={accessoryPrices[accId] || 0}
                                className="font-light"
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {selectedServices.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-amber-800 dark:text-amber-200">
                        Selected services:
                      </h4>
                      <ul className="space-y-1">
                        {selectedServices.map((servId) => {
                          const service = serviceVariants.find(
                            (s) => s.value === servId
                          );
                          return (
                            <li
                              key={servId}
                              className="flex items-center justify-between text-sm"
                            >
                              <span>{service?.label}</span>
                              <PriceFormat
                                prefix={currencyPrefix}
                                value={servicePrices[servId] || 0}
                                className="font-light"
                              />
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Quantity selection */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-amber-800 dark:text-amber-300">
                      Quantity
                    </label>
                    <QuantityInputBasic
                      quantity={quantity}
                      onChange={setQuantity}
                      max={10}
                      className="w-[120px] border-amber-200 dark:border-amber-700/50"
                    />
                  </div>
                  <div className="text-right">
                    <span className="block text-sm font-medium text-amber-800 dark:text-amber-300">
                      Total
                    </span>
                    <PriceFormat
                      prefix={currencyPrefix}
                      value={totalPrice}
                      className="text-lg font-bold text-amber-800 dark:text-amber-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-2 flex space-x-2">
              <Button
                variant="outline"
                onClick={onAddToCart}
                className="flex-1 border-amber-300 bg-white text-amber-800 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-900 dark:border-amber-700/50 dark:bg-gray-800 dark:text-amber-300 dark:hover:border-amber-600"
              >
                Add to cart
              </Button>
              <Button
                onClick={onBuyNow}
                className="flex-1 bg-gradient-to-r from-amber-700 to-amber-900 text-white hover:from-amber-800 hover:to-amber-950"
              >
                Buy now
              </Button>
            </div>

            {/* Warranty info */}
            <div className="mt-3">
              <p className="flex items-center text-xs font-medium text-amber-700 dark:text-amber-400">
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
                {warranty} Manufacturer Warranty Included
              </p>
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

export default ProductVariant_05;
export type { Benefit, FeaturedReview, ProductVariant_05Props };
