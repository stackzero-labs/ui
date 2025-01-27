"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const StarIcon = ({
  className,
  filled,
  fullColor,
  strokeFullColor,
  emptyColor,
  strokeEmptyColor,
  onClick,
}: {
  className?: string;
  filled: boolean;
  fullColor: string;
  strokeFullColor: string;
  emptyColor: string;
  strokeEmptyColor: string;
  onClick?: () => void;
}) => (
  <svg
    className={cn("w-4 h-4 me-1 cursor-pointer", className)}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: filled ? fullColor : emptyColor,
      stroke: filled ? strokeFullColor : strokeEmptyColor,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const QuarterStarIcon = ({
  id,
  fullColor,
  strokeFullColor,
  emptyColor,
  onClick,
}: {
  id: string;
  fullColor: string;
  strokeFullColor: string;
  emptyColor: string;
  onClick?: () => void;
}) => (
  <svg
    className="w-4 h-4 me-1 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: fullColor,
      stroke: strokeFullColor,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <defs>
      <linearGradient
        id={`quarter-fill-${id}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="25%" style={{ stopColor: fullColor, stopOpacity: 1 }} />
        <stop offset="25%" style={{ stopColor: emptyColor, stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill={`url(#quarter-fill-${id})`}
      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
    />
  </svg>
);

const HalfStarIcon = ({
  id,
  fullColor,
  strokeFullColor,
  emptyColor,
  onClick,
}: {
  id: string;
  fullColor: string;
  strokeFullColor: string;
  emptyColor: string;
  onClick?: () => void;
}) => (
  <svg
    className="w-4 h-4 me-1 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: fullColor,
      stroke: strokeFullColor,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <defs>
      <linearGradient id={`half-fill-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: fullColor, stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: emptyColor, stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill={`url(#half-fill-${id})`}
      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
    />
  </svg>
);

const ThreeQuarterStarIcon = ({
  id,
  fullColor,
  strokeFullColor,
  emptyColor,
  onClick,
}: {
  id: string;
  fullColor: string;
  strokeFullColor: string;
  emptyColor: string;
  onClick?: () => void;
}) => (
  <svg
    className="w-4 h-4 me-1 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: fullColor,
      stroke: strokeFullColor,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <defs>
      <linearGradient
        id={`three-quarter-fill-${id}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="75%" style={{ stopColor: fullColor, stopOpacity: 1 }} />
        <stop offset="75%" style={{ stopColor: emptyColor, stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill={`url(#three-quarter-fill-${id})`}
      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
    />
  </svg>
);

interface RatingProps {
  id?: string;
  rating?: number;
  defaultRating?: number;
  maxRating?: number;
  fullColor?: string;
  strokeFullColor?: string;
  emptyColor?: string;
  strokeEmptyColor?: string;
  /** Called when rating changes */
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating = ({
  defaultRating = 0,
  emptyColor = "#D1D5DB",
  fullColor = "#FFD700",
  id,
  maxRating = 5,
  onRatingChange,
  rating,
  readOnly = false,
  strokeEmptyColor = "#D1D5DB",
  strokeFullColor = "#FFD700",
}: RatingProps) => {
  const [internalRating, setInternalRating] = React.useState(defaultRating);

  const isControlled = rating !== undefined;
  const currentRating = isControlled ? rating : internalRating;

  const handleRatingChange = (newRating: number) => {
    console.log("handleRatingChange", newRating);
    if (!readOnly) {
      if (!isControlled) {
        setInternalRating(newRating);
      }
      onRatingChange?.(newRating);
    }
  };

  const fullStars = Math.floor(currentRating);
  const remainder = currentRating % 1;
  let quarterStars = Math.round(remainder * 4);
  if (quarterStars === 4) {
    quarterStars = 3; // Adjust for cases where quarterStars is 4/4 and too many starts would be reduced from the emptyStars calculation below
  }

  const emptyStars = maxRating - fullStars - (quarterStars > 0 ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon
          key={id ? `${id}-${index}` : index}
          filled={true}
          fullColor={fullColor}
          strokeFullColor={strokeFullColor}
          emptyColor={emptyColor}
          strokeEmptyColor={strokeEmptyColor}
          onClick={() => handleRatingChange(index + 1)}
          className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
        />
      ))}
      {quarterStars === 1 && (
        <QuarterStarIcon
          id={id ? `${id}-quarter` : `quarter`}
          fullColor={fullColor}
          strokeFullColor={strokeFullColor}
          emptyColor={emptyColor}
          onClick={() => handleRatingChange(fullStars + 0.25)}
        />
      )}
      {quarterStars === 2 && (
        <HalfStarIcon
          id={id ? `${id}-half` : `half`}
          fullColor={fullColor}
          strokeFullColor={strokeFullColor}
          emptyColor={emptyColor}
          onClick={() => handleRatingChange(fullStars + 0.5)}
        />
      )}
      {quarterStars === 3 && (
        <ThreeQuarterStarIcon
          id={id ? `${id}-three-quarter` : `three-quarter`}
          fullColor={fullColor}
          strokeFullColor={strokeFullColor}
          emptyColor={emptyColor}
          onClick={() => handleRatingChange(fullStars + 0.75)}
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon
          key={id ? `${id}-${index + fullStars + 1}` : index + fullStars + 1}
          filled={false}
          fullColor={fullColor}
          strokeFullColor={strokeFullColor}
          emptyColor={emptyColor}
          strokeEmptyColor={strokeEmptyColor}
          onClick={() =>
            handleRatingChange(fullStars + quarterStars / 4 + index + 1)
          }
          className={`transition-transform duration-200 ${readOnly ? "" : "hover:scale-110"}`}
        />
      ))}
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {currentRating.toFixed(2)}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {maxRating}
      </p>
    </div>
  );
};

export { StarRating };
