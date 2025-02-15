"use client";

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarRating from "@/components/commerce-ui/star-rating/basic/star-rating-basic";
import { useState } from "react";
import LikeRating, {
  Rating,
} from "@/components/commerce-ui/like-rating/basic/like-rating-basic";

function Review_03() {
  const rating = 5;
  const [isExpanded, setIsExpanded] = useState(false);
  const [likeRating, setLikeRating] = useState<Rating>("like");

  return (
    <div className="items-left flex w-full flex-col gap-6 rounded-lg border px-6 py-4">
      <div className="flex flex-row flex-wrap items-end justify-between gap-4">
        <div className="flex flex-row items-end justify-between gap-4">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
          />
          <div>
            <p className="text-sm font-semibold">Adam Smith</p>
            <p className="font-base text-muted-foreground text-sm">
              CEO ACME Inc.
            </p>
          </div>
        </div>

        <div className="text-muted-foreground max-w-[15ch] grow-0 text-sm">
          <span className="font-semibold">11 people </span>found this helpful
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <StarRating value={rating} readOnly />
        <div>
          <h2 className="mb-2 text-xl font-semibold">
            Wished I bought this thing sooner!!
          </h2>
          <p
            className={`text-muted-foreground ${isExpanded ? "" : "line-clamp-3"} text-ellipsis`}
          >
            I recently got my hands on the [Backpack Name], and after using it
            for a while, I can confidently say it is a solid choice for
            travelling. Verdict: If you are looking for an amazing backpack that
            balances comfort, organization, and durability, this is a great
            investment. Would definitely recommend it to anyone in need of a
            reliable bag! 🎒💼
          </p>
        </div>
        <Button
          className="px-0"
          variant="link"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Show more"}
        </Button>
      </div>

      <div>
        <LikeRating
          value={likeRating}
          onChange={(rating) => setLikeRating(rating)}
        />
      </div>
    </div>
  );
}

export default Review_03;

interface RatingLevelProps {
  level: number;
  value: number;
  total: number;
}

const RatingLevel = ({ level, value, total }: RatingLevelProps) => {
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
              style={{ width: `${value}%`, backgroundColor: "#e4c616" }}
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
