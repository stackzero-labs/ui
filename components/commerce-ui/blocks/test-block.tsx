"use client";

import FaceRating from "@/components/commerce-ui/face-rating/basic/face-rating-basic";
import StarRating from "@/components/commerce-ui/star-rating/star-rating-01";
import { useState } from "react";

export default function TestBlock() {
  const [starRatingValue, setStarRatingValue] = useState(0);
  return (
    <div>
      <p className="mb-4 text-lg font-bold">Test Block</p>
      <div className="flex flex-col gap-4">
        <FaceRating value={starRatingValue} onChange={setStarRatingValue} />
        <StarRating />
      </div>
    </div>
  );
}
