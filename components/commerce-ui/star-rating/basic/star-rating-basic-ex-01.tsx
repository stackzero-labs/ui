"use client";

import StarRatingBasic from "@/components/commerce-ui/star-rating/basic/star-rating-basic";
import { useState } from "react";

export default function StarRating_Basic_Ex_01() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <StarRatingBasic value={rating} onChange={setRating} maxStars={5} />
      <p>Rating: {rating}</p>
    </div>
  );
}
