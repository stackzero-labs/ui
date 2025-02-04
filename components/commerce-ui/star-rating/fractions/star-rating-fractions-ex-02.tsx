"use client";

import StarRatingFractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";

export default function StarRating_Fractions_Ex_02() {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-2">
        <StarRatingFractions value={4.65} readOnly maxStars={5} />
        <p>(4.65)</p>
      </div>

      <div className="flex items-center gap-2">
        <StarRatingFractions value={3.5} readOnly maxStars={5} />
        <p>(3.5)</p>
      </div>

      <div className="flex items-center gap-2">
        <StarRatingFractions value={2.35} readOnly maxStars={5} />
        <p>(2.35)</p>
      </div>
    </div>
  );
}
