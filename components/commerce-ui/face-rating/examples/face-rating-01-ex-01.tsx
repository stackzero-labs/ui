"use client";

import FaceRating_01 from "@/components/commerce-ui/face-rating/face-rating-01";
import { useState } from "react";

export default function FaceRating_01_Ex_01() {
  const [rating, setRating] = useState(3);
  return (
    <div className="flex flex-col items-center gap-4">
      <FaceRating_01 value={rating} onChange={setRating} />
      <p>Rating: {rating}</p>
    </div>
  );
}
