"use client";

import StarRating from "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface RatingLevelProps {
  level: number;
  value: number;
  total: number;
}

interface RatingData {
  level: number;
  value: number;
  total: number;
}

interface Review_02Props {
  productImageUrl?: string;
  productName?: string;
  badgeText?: string;
  averageRating?: number;
  totalReviews?: number;
  ratingLevels?: RatingData[];
  onReviewClick?: () => void;
  onSeeAllReviewsClick?: () => void;
}

function Review_02({
  averageRating = 4.5,
  badgeText = "Top rated",
  onReviewClick = () => {},
  onSeeAllReviewsClick = () => {},
  productImageUrl = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/backpack.jpg",
  productName = "Ultra Backpack PRO GEAR - 2025 edition",
  ratingLevels = [
    { level: 5, total: 75, value: 75 },
    { level: 4, total: 20, value: 20 },
    { level: 3, total: 5, value: 5 },
    { level: 2, total: 0, value: 0 },
    { level: 1, total: 0, value: 0 },
  ],
  totalReviews = 100,
}: Review_02Props = {}) {
  return (
    <>
      <div className="items-left flex max-w-lg flex-col gap-6 rounded-lg border px-6 py-4">
        <div className="flex w-full flex-row flex-wrap items-start justify-between gap-4">
          <img
            src={productImageUrl}
            alt="product-image"
            className="relative inline-block h-36 w-36 items-center rounded-sm object-cover"
          />

          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold">{productName}</p>
            {badgeText && (
              <div className="w-fit rounded-xl border border-teal-500/50 bg-teal-500/20 px-2 py-1 uppercase">
                <p className="text-xs font-semibold text-teal-500">
                  {badgeText}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-row flex-wrap items-center gap-4">
          <p className="text-5xl">{averageRating}</p>
          <div>
            <StarRating value={averageRating} readOnly />
            <p>{totalReviews} reviews</p>
          </div>
        </div>

        <div className="mb-4 flex flex-col gap-2">
          {ratingLevels.map((rating) => (
            <RatingLevel
              key={rating.level}
              level={rating.level}
              value={rating.value}
              total={rating.total}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={onReviewClick}>Review Now</Button>
          <Button variant="link" onClick={onSeeAllReviewsClick}>
            See all reviews
          </Button>
        </div>
      </div>
    </>
  );
}

export default Review_02;
export type { RatingData, RatingLevelProps, Review_02Props };

const RatingLevel = ({ level, total, value }: RatingLevelProps) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <Star size="16px" fill="gray" stroke="gray" />
          <p className="text-sm">{level}</p>
        </div>

        <div className="grow">
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="width: 45% h-2.5 rounded-full"
              style={{ backgroundColor: "#e4c616", width: `${value}%` }}
            ></div>
          </div>
        </div>
        <div className="min-w-[80px]">
          <p className="text-sm">
            {value}% <span className="text-muted-foreground">({total})</span>
          </p>
        </div>
      </div>
    </div>
  );
};
