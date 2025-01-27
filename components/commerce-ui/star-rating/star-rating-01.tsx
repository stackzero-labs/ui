"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

const StarIcon = ({
  className,
  filled,
  FULL_COLOR,
  STROKE_FULL_COLOR,
  EMPTY_COLOR,
  STROKE_EMPTY_COLOR,
  onClick,
}: {
  className?: string;
  filled: boolean;
  FULL_COLOR: string;
  STROKE_FULL_COLOR: string;
  EMPTY_COLOR: string;
  STROKE_EMPTY_COLOR: string;
  onClick?: () => void;
}) => (
  <svg
    className={cn("me-1 h-4 w-4 cursor-pointer", className)}
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: filled ? FULL_COLOR : EMPTY_COLOR,
      stroke: filled ? STROKE_FULL_COLOR : STROKE_EMPTY_COLOR,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const QuarterStarIcon = ({
  id,
  FULL_COLOR,
  STROKE_FULL_COLOR,
  EMPTY_COLOR,
  onClick,
}: {
  id: string;
  FULL_COLOR: string;
  STROKE_FULL_COLOR: string;
  EMPTY_COLOR: string;
  onClick?: () => void;
}) => (
  <svg
    className="me-1 h-4 w-4 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: FULL_COLOR,
      stroke: STROKE_FULL_COLOR,
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
        <stop offset="25%" style={{ stopColor: FULL_COLOR, stopOpacity: 1 }} />
        <stop offset="25%" style={{ stopColor: EMPTY_COLOR, stopOpacity: 1 }} />
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
  FULL_COLOR,
  STROKE_FULL_COLOR,
  EMPTY_COLOR,
  onClick,
}: {
  id: string;
  FULL_COLOR: string;
  STROKE_FULL_COLOR: string;
  EMPTY_COLOR: string;
  onClick?: () => void;
}) => (
  <svg
    className="me-1 h-4 w-4 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: FULL_COLOR,
      stroke: STROKE_FULL_COLOR,
      strokeWidth: "1px",
    }}
    onClick={onClick}
  >
    <defs>
      <linearGradient id={`half-fill-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: FULL_COLOR, stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: EMPTY_COLOR, stopOpacity: 1 }} />
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
  FULL_COLOR,
  STROKE_FULL_COLOR,
  EMPTY_COLOR,
  onClick,
}: {
  id: string;
  FULL_COLOR: string;
  STROKE_FULL_COLOR: string;
  EMPTY_COLOR: string;
  onClick?: () => void;
}) => (
  <svg
    className="me-1 h-4 w-4 cursor-pointer"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 22 20"
    style={{
      fill: FULL_COLOR,
      stroke: STROKE_FULL_COLOR,
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
        <stop offset="75%" style={{ stopColor: FULL_COLOR, stopOpacity: 1 }} />
        <stop offset="75%" style={{ stopColor: EMPTY_COLOR, stopOpacity: 1 }} />
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
  MAX_RATING?: number;
  FULL_COLOR?: string;
  STROKE_FULL_COLOR?: string;
  EMPTY_COLOR?: string;
  STROKE_EMPTY_COLOR?: string;
  /** Called when rating changes */
  onRatingChange?: (rating: number) => void;
  readOnly?: boolean;
}

const MAX_RATING = 5;
const EMPTY_COLOR = "#D1D5DB";
const FULL_COLOR = "#FFD700";
const STROKE_EMPTY_COLOR = "#D1D5DB";
const STROKE_FULL_COLOR = "#FFD700";

const StarRating = () => {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const fullStars = Math.floor(rating);
  const remainder = rating % 1;
  let quarterStars = Math.round(remainder * 4);
  if (quarterStars === 4) {
    quarterStars = 3; // Adjust for cases where quarterStars is 4/4 and too many starts would be reduced from the emptyStars calculation below
  }

  const emptyStars = MAX_RATING - fullStars - (quarterStars > 0 ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <StarIcon
          key={index}
          filled={true}
          FULL_COLOR={FULL_COLOR}
          STROKE_FULL_COLOR={STROKE_FULL_COLOR}
          EMPTY_COLOR={EMPTY_COLOR}
          STROKE_EMPTY_COLOR={STROKE_EMPTY_COLOR}
          onClick={() => handleRatingChange(index + 1)}
          className="transition-transform duration-200 hover:scale-110"
        />
      ))}
      {quarterStars === 1 && (
        <QuarterStarIcon
          id={`quarter`}
          FULL_COLOR={FULL_COLOR}
          STROKE_FULL_COLOR={STROKE_FULL_COLOR}
          EMPTY_COLOR={EMPTY_COLOR}
          onClick={() => handleRatingChange(fullStars + 0.25)}
        />
      )}
      {quarterStars === 2 && (
        <HalfStarIcon
          id={`half`}
          FULL_COLOR={FULL_COLOR}
          STROKE_FULL_COLOR={STROKE_FULL_COLOR}
          EMPTY_COLOR={EMPTY_COLOR}
          onClick={() => handleRatingChange(fullStars + 0.5)}
        />
      )}
      {quarterStars === 3 && (
        <ThreeQuarterStarIcon
          id={`three-quarter`}
          FULL_COLOR={FULL_COLOR}
          STROKE_FULL_COLOR={STROKE_FULL_COLOR}
          EMPTY_COLOR={EMPTY_COLOR}
          onClick={() => handleRatingChange(fullStars + 0.75)}
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <StarIcon
          key={index + fullStars + 1}
          filled={false}
          FULL_COLOR={FULL_COLOR}
          STROKE_FULL_COLOR={STROKE_FULL_COLOR}
          EMPTY_COLOR={EMPTY_COLOR}
          STROKE_EMPTY_COLOR={STROKE_EMPTY_COLOR}
          onClick={() =>
            handleRatingChange(fullStars + quarterStars / 4 + index + 1)
          }
          className="transition-transform duration-200 hover:scale-110"
        />
      ))}
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating.toFixed(2)}
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        out of
      </p>
      <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        {MAX_RATING}
      </p>
    </div>
  );
};

export default StarRating;
