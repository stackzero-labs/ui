"use client";

import StarRatingFractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { useState } from "react";

export default function StarRating_Fractions_Ex_01() {
  const [rating, setRating] = useState(4.3);
  return (
    <div className="flex flex-row items-center gap-4">
      <StarRatingFractions value={rating} onChange={setRating} maxStars={5} />
      <p>({rating})</p>
    </div>
  );
}
