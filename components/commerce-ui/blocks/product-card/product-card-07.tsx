"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DEFAULT_IMAGE_URL =
  "https://images.pexels.com/photos/6883802/pexels-photo-6883802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

interface Testimonial {
  name: string;
  role?: string;
  rating: number;
  text: string;
  date?: string;
}

interface ProductCard_07Props {
  imageUrl?: string;
  productName?: string;
  description?: string;
  price?: number;
  inStock?: boolean;
  features?: string[];
  testimonials?: Testimonial[];
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_07({
  currencyPrefix = "$",
  description = "Professional-grade mirrorless camera with 32MP sensor and 4K video recording capabilities",
  features = [
    "32 Megapixel Sensor",
    "4K Video Recording",
    "5-Axis Stabilization",
    "Weather-Sealed Body",
  ],
  imageUrl = DEFAULT_IMAGE_URL,
  inStock = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  price = 1299.99,
  productName = "ProCapture X3 Digital Camera",
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
}: ProductCard_07Props = {}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      {/* Main product card - similar to product-card-06 */}
      <div className="group flex flex-col sm:h-[220px] sm:flex-row">
        {/* Image section */}
        <div className="relative h-52 w-full bg-gradient-to-br from-gray-50 via-green-50 to-emerald-50 sm:h-full sm:w-2/5 dark:from-gray-900 dark:via-green-950/10 dark:to-emerald-950/10">
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

          {/* Image with hover effect */}
          <div className="flex h-full items-center justify-center p-4">
            <div className="transition-all duration-500 group-hover:scale-[1.05]">
              <ImageViewer
                imageUrl={imageUrl}
                classNameThumbnailViewer="rounded-lg h-full object-contain drop-shadow-lg max-h-[180px]"
              />
            </div>
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
                  value={price}
                  className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
                />
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                {description}
              </p>
            </div>

            {/* Features list */}
            <div className="mb-3">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="mr-1.5 h-4 w-4 text-emerald-500"
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
            <svg
              className="mr-2 h-4 w-4 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
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
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
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
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_07;
export type { ProductCard_07Props, Testimonial };
