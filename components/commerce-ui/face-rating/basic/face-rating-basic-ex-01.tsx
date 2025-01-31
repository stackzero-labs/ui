"use client";

import FaceRatingBasic from "@/components/commerce-ui/face-rating/basic/face-rating-basic";
import { useState } from "react";

export default function FaceRating_01_Ex_01() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <FaceRatingBasic value={rating} onChange={setRating} />
      <p>Rating: {rating}</p>
    </div>
  );
}
