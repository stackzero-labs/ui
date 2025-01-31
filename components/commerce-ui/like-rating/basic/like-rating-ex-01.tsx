"use client";

import { type Rating } from "@/components/commerce-ui/like-rating/basic/like-rating-basic";
import LikeRatingBasic from "@/components/commerce-ui/like-rating/basic/like-rating-basic";
import { useState } from "react";

export default function LikeRating_Basic_Ex_01() {
  const [rating, setRating] = useState<Rating>(null);
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <LikeRatingBasic value={rating} onChange={setRating} />
      <p>Rating: {rating ?? "none"}</p>
    </div>
  );
}
