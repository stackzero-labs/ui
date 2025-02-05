"use client";

import { useState } from "react";
import StarRatingFractions from "../commerce-ui/star-rating/fractions/star-rating-fractions";

import { motion } from "motion/react";
import FaceRating_Basic from "../commerce-ui/face-rating/basic/face-rating-basic";
import UpvoteRating_Animated from "../commerce-ui/upvote-rating/animated/upvote-rating-animated";
import ImageCarousel_Horizontal_Ex_01 from "../commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-01";
import ImageCarousel_Horizontal_Ex_02 from "../commerce-ui/image-carousel/horizontal/image-carousel-horizontal-ex-02";

function ComponentsShowcase() {
  const [faceRatingValue, setFaceRatingValue] = useState(4);
  const [starRatingValue, setStarRatingValue] = useState(4.8);
  const [upvotes, setUpvotes] = useState(550);
  const [downvotes, setDownvotes] = useState(5);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  return (
    <div className="flex w-full flex-row gap-4">
      <div className="flex flex-col gap-4">
        <UpvoteRating_Animated
          upvotes={upvotes}
          downvotes={downvotes}
          upvoted={upvoted}
          downvoted={downvoted}
          onVoteChange={(newState) => {
            setUpvotes(newState.upvotes);
            setDownvotes(newState.downvotes);
            setUpvoted(newState.upvoted);
            setDownvoted(newState.downvoted);
          }}
          downvoteIncrement={15}
          upvoteIncrement={15}
        />
        <FaceRating_Basic
          value={faceRatingValue}
          onChange={setFaceRatingValue}
        />
        <StarRatingFractions
          value={starRatingValue}
          onChange={setStarRatingValue}
        />
      </div>

      <div className="flex w-[350px] flex-col gap-4">
        <ImageCarousel_Horizontal_Ex_02 />
      </div>
    </div>
  );
}

export default ComponentsShowcase;
