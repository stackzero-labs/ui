"use client";

import FaceRatingBasic from "@/components/commerce-ui/face-rating/basic/face-rating-basic";
import { useState } from "react";

export default function FaceRating_01_Ex_02() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <div>How do you feel about this product?</div>
      <FaceRatingBasic value={rating} onChange={setRating} iconSize={48} />
      <p>Rating: {rating}</p>
    </div>
  );
}
