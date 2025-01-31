"use client";

import FaceRatingGradient from "@/components/commerce-ui/face-rating/gradient/face-rating-gradient";
import { useState } from "react";

export default function FaceRating_Gradient_Ex_01() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <FaceRatingGradient value={rating} onChange={setRating} />
      <p>Rating: {rating}</p>
    </div>
  );
}
