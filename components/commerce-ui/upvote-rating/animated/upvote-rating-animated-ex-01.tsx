"use client";

import { useState } from "react";
import UpvoteRating_Animated from "@/components/commerce-ui/upvote-rating/animated/upvote-rating-animated";

export default function UpvoteRating_Animated_Ex_01() {
  const [upvotes, setUpvotes] = useState(100);
  const [downvotes, setDownvotes] = useState(20);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
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
      />
    </div>
  );
}
