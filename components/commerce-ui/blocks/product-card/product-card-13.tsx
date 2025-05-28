"use client";

import ImageViewer from "@/components/commerce-ui/components/image-viewer/basic/image-viewer-basic";
import PriceFormat_Sale from "@/components/commerce-ui/components/price-format/sale/price-format-sale";
import StarRating_Fractions from "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Calendar,
  Heart,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/family-01.jpg";

interface ProductCard_13Props {
  imageUrl?: string;
  featuredProperty?: boolean;
  hotelName?: string;
  description?: string;
  pricePerNight?: number;
  originalPricePerNight?: number;
  availableRooms?: number;
  location?: string;
  distanceFromCenter?: string;
  rating?: number;
  reviewCount?: number;
  amenities?: string[];
  specialOffers?: string[];
  onBookNow?: () => void;
  onViewDetails?: () => void;
  currencyPrefix?: string;
  limitedDeal?: boolean;
  roomsAtCurrentPrice?: number;
}

function ProductCard_13({
  amenities = [
    "Free Wi-Fi",
    "Breakfast included",
    "Swimming pool",
    "Fitness center",
  ],
  availableRooms = 5,
  currencyPrefix = "$",
  description = "Contemporary hotel featuring elegant rooms with city views, restaurant serving local cuisine, and a rooftop terrace with panoramic views. Located in the vibrant downtown area.",
  distanceFromCenter = "1.2 km from centre",
  featuredProperty = true,
  hotelName = "Grand Azure Hotel & Spa",
  imageUrl = DEFAULT_IMAGE_URL,
  limitedDeal = true,
  location = "Downtown, New York",
  onBookNow = () => {},
  onViewDetails = () => {},
  originalPricePerNight = 249,
  pricePerNight = 199,
  rating = 4.5,
  reviewCount = 386,
  roomsAtCurrentPrice = 2,
  specialOffers = ["Free cancellation", "Pay at the property"],
}: ProductCard_13Props = {}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const isLowAvailability = availableRooms <= 3;
  const hasDiscount = originalPricePerNight > pricePerNight;

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row dark:border-gray-800 dark:bg-gray-900">
      {/* Image section */}
      <div className="relative h-64 w-full bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 sm:h-auto sm:w-2/5 lg:w-1/3 dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
        {featuredProperty && (
          <div className="absolute top-3 left-3 z-10 flex items-center justify-center">
            <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md">
              Top-rated
            </div>
          </div>
        )}

        <button
          onClick={toggleFavorite}
          className="absolute top-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-md transition-all hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-800"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <Heart className="h-5 w-5 fill-rose-500 text-rose-500" />
          ) : (
            <Heart className="h-5 w-5 text-gray-600 transition-colors hover:text-rose-500 dark:text-gray-400" />
          )}
        </button>

        {/* Soft glow effect */}
        <div className="absolute inset-0">
          <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-sky-300/30 blur-2xl"></div>
          <div className="absolute right-0 -bottom-8 h-28 w-28 rounded-full bg-teal-400/20 blur-xl"></div>
        </div>

        {/* Image with hover effect */}
        <div className="absolute inset-0 flex h-full w-full items-center justify-center">
          <div className="h-full w-full transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-1">
            <ImageViewer
              imageUrl={imageUrl}
              classNameThumbnailViewer="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Hotel name, location and rating */}
          <div className="mb-4">
            <div className="mb-1.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {hotelName}
                </h3>
                {featuredProperty && (
                  <BadgeCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1.5">
                  <StarRating_Fractions
                    value={rating}
                    maxStars={5}
                    readOnly
                    iconSize={16}
                    color="#0ea5e9"
                    className="inline-flex"
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {rating}
                  </span>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {reviewCount} reviews
                </span>
              </div>
            </div>

            <div className="mb-2 flex items-center gap-3">
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="mr-1 h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>{location}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                • {distanceFromCenter}
              </div>
            </div>

            <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>

          {/* Limited deal banner */}
          {limitedDeal && (
            <div className="mb-4 overflow-hidden rounded-lg bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 p-0.5 shadow-sm dark:from-blue-900/40 dark:via-blue-800/40 dark:to-blue-900/40">
              <div className="relative overflow-hidden rounded-md bg-white px-3 py-2 dark:bg-gray-800">
                {/* Animated background */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/50 to-transparent dark:via-blue-700/20"
                  style={{ animation: "shimmer 3s infinite" }}
                ></div>

                <div className="relative flex items-center">
                  <div className="mr-2 rounded-full bg-blue-100 p-1 dark:bg-blue-800">
                    <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                      Limited deal!
                    </span>
                    <div className="flex items-center">
                      <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                      <span className="text-xs font-medium text-blue-700 dark:text-blue-400">
                        Only {roomsAtCurrentPrice} rooms at this price remaining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Amenities and special offers */}
          <div className="mb-5 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                AMENITIES
              </p>
              <ul className="space-y-0.5">
                {amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="mr-1.5 h-4 w-4 shrink-0 text-blue-600"
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
                      {amenity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold text-gray-700 dark:text-gray-300">
                SPECIAL OFFERS
              </p>
              <ul className="space-y-0.5">
                {specialOffers.map((offer, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className={`mr-1.5 h-4 w-4 shrink-0 ${
                        offer.toLowerCase().includes("free")
                          ? "text-teal-600"
                          : "text-teal-600"
                      }`}
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
                    <span
                      className={`${
                        offer.toLowerCase().includes("free")
                          ? "font-medium text-teal-700 dark:text-teal-400"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {offer}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with price, availability and buttons */}
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <div className="mb-1 flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="mr-1.5 h-4 w-4 text-blue-600" />
              <span>Check availability</span>
            </div>
            {isLowAvailability ? (
              <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
                <Users className="mr-1 inline h-3 w-3" />
                <span className="mr-1 inline-block h-2 w-2 animate-pulse rounded-full bg-amber-500"></span>
                Only {availableRooms} rooms left
              </p>
            ) : (
              <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
                <Users className="mr-1 inline h-3 w-3" />
                <span className="mr-1 inline-block h-2 w-2 rounded-full bg-teal-500"></span>
                {availableRooms} rooms available
              </p>
            )}
          </div>

          <div className="flex items-center justify-between sm:flex-col sm:items-end">
            {hasDiscount ? (
              <div>
                <p className="mb-0.5 text-xs text-gray-500 dark:text-gray-400">
                  Price per night
                </p>
                <PriceFormat_Sale
                  originalPrice={originalPricePerNight}
                  salePrice={pricePerNight}
                  prefix={currencyPrefix}
                  classNameOriginalPrice="text-sm text-gray-500 dark:text-gray-400"
                  classNameSalePrice="text-xl font-bold text-blue-700 dark:text-blue-400"
                  showSavePercentage={false}
                />
              </div>
            ) : (
              <div>
                <p className="mb-0.5 text-xs text-gray-500 dark:text-gray-400">
                  Price per night
                </p>
                <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
                  {currencyPrefix}
                  {pricePerNight.toFixed(2)}
                </span>
              </div>
            )}

            {/* Action buttons */}
            <div className="mt-3 flex space-x-2">
              <Button
                variant="outline"
                onClick={onViewDetails}
                className="border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-blue-600 dark:hover:bg-blue-950/30"
              >
                View details
              </Button>
              <Button
                onClick={onBookNow}
                className="bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Book now — {currencyPrefix}
                {pricePerNight}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Add animation for limited deal banner */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}

export default ProductCard_13;
export type { ProductCard_13Props };
