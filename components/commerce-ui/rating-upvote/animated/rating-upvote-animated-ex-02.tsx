"use client";

import { useState } from "react";
import RatingUpvote_Animated from "@/components/commerce-ui/rating-upvote/animated/rating-upvote-animated";

export default function RatingUpvote_Animated_Ex_02() {
  const [upvotes, setUpvotes] = useState(100);
  const [downvotes, setDownvotes] = useState(20);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <RatingUpvote_Animated
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
        upvoteIncrement={15}
        downvoteIncrement={15}
      />
    </div>
  );
}
