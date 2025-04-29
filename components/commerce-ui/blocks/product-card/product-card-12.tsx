"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import StarRating_Fractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/family-01.jpg";

interface ProductCard_12Props {
  imageUrl?: string;
  specialOffer?: boolean;
  packageName?: string;
  description?: string;
  pricePerPerson?: number;
  availableSpots?: number;
  departureDate?: string;
  duration?: string;
  features?: string[];
  testimonial?: {
    text: string;
    author: string;
    avatarUrl?: string;
    rating?: number;
  };
  onBookNow?: () => void;
  onLearnMore?: () => void;
  currencyPrefix?: string;
}

function ProductCard_12({
  availableSpots = 8,
  currencyPrefix = "$",
  departureDate = "June 15, 2025",
  description = "All-inclusive family vacation with activities for all ages, beachfront accommodations, and kids club access",
  duration = "7 days / 6 nights",
  features = [
    "Kids Stay Free",
    "Private Beach Access",
    "Daily Activities",
    "All Meals Included",
  ],
  imageUrl = DEFAULT_IMAGE_URL,
  onBookNow = () => {},
  onLearnMore = () => {},
  packageName = "Family Paradise Beach Resort",
  pricePerPerson = 799,
  specialOffer = true,
  testimonial = {
    author: "Sarah Johnson",
    avatarUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-03.jpg",
    rating: 5,
    text: "Our family had an amazing time! The kids club was fantastic and we actually got to relax. Best vacation we've had in years.",
  },
}: ProductCard_12Props = {}) {
  const isLimitedAvailability = availableSpots <= 10;

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
      {/* Image section */}
      <div className="relative h-52 w-full bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 sm:h-[220px] dark:from-gray-900 dark:via-orange-950/20 dark:to-gray-900">
        {specialOffer && (
          <div className="absolute top-3 left-3 z-10 flex items-center justify-center">
            <div className="animate-pulse-slow rounded-full bg-orange-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
              Special Offer
            </div>
          </div>
        )}

        {/* Highlight glow effect */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-orange-300/30 blur-2xl"></div>
          <div className="absolute right-0 -bottom-8 h-28 w-28 rounded-full bg-rose-400/30 blur-xl"></div>
        </div>

        {/* Image with hover effect */}
        <div className="absolute inset-0 -top-20 overflow-hidden">
          <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <ImageViewer
              imageUrl={imageUrl}
              classNameThumbnailViewer="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          {/* Package name and description */}
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {packageName}
              </h3>
              <div className="text-right">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  per person
                </p>
                <PriceFormat
                  prefix={currencyPrefix}
                  value={pricePerPerson}
                  className="text-xl font-bold text-orange-600 dark:text-orange-400"
                />
              </div>
            </div>

            <div className="mt-1 flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg
                className="mr-1.5 h-4 w-4 text-orange-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>
                {departureDate} • {duration}
              </span>
            </div>

            <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Features list */}
          <div className="mb-4">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm">
                  <svg
                    className="mr-1.5 h-4 w-4 text-amber-500"
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

        {/* Testimonial Section */}
        <div className="mb-4 rounded-lg bg-amber-50 p-3 dark:bg-amber-950/20">
          <div className="flex items-start gap-3">
            {testimonial.avatarUrl && (
              <div className="flex-shrink-0">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.author}
                  className="h-10 w-10 rounded-full border border-amber-200 object-cover dark:border-amber-800"
                />
              </div>
            )}
            <div className="flex-1">
              <div className="mb-1">
                <StarRating_Fractions
                  value={testimonial.rating || 5}
                  maxStars={5}
                  readOnly
                  iconSize={14}
                  color="#f59e0b"
                  className="inline-flex"
                />
              </div>
              <p className="line-clamp-2 text-xs text-gray-600 italic dark:text-gray-300">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="mt-1 text-xs font-medium text-gray-700 dark:text-gray-300">
                — {testimonial.author}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section with availability and buttons */}
        <div className="flex items-end justify-between">
          <div>
            {isLimitedAvailability ? (
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                Only {availableSpots} spots left
              </p>
            ) : (
              <p className="text-xs font-medium text-green-600 dark:text-green-400">
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500"></span>
                Available
              </p>
            )}
          </div>

          {/* Action buttons */}
          <div className="flex space-x-2">
            <Button
              variant="outline"
              onClick={onLearnMore}
              className="border-gray-300 bg-white text-gray-700 hover:border-amber-500 hover:bg-amber-50 hover:text-amber-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            >
              View details
            </Button>
            <Button
              onClick={onBookNow}
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700"
            >
              Book now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_12;
export type { ProductCard_12Props };
