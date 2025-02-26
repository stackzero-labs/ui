"use client";

import LikeRatingBasic from "@/components/commerce-ui/like-rating/basic/like-rating-basic";
import { useState } from "react";

export default function LikeRating_Basic_Ex_01() {
  const [likes, setLikes] = useState(1100);
  const [dislikes, setDislikes] = useState(260);
  const [isLiked, setIsLiked] = useState(true);
  const [isDisliked, setIsDisliked] = useState(false);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <LikeRatingBasic
        dislikes={dislikes}
        isDisliked={isDisliked}
        isLiked={isLiked}
        likes={likes}
        onRatingChange={(newState) => {
          setLikes(newState.likes);
          setDislikes(newState.dislikes);
          setIsLiked(newState.isLiked);
          setIsDisliked(newState.isDisliked);
        }}
      />
    </div>
  );
}
