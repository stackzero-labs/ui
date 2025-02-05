"use client";

import { useState } from "react";
import UpvoteRating_Basic from "@/components/commerce-ui/upvote-rating/basic/upvote-rating-basic";

export default function UpvoteRating_Basic_Ex_02() {
  const [upvotes, setUpvotes] = useState(100);
  const [downvotes, setDownvotes] = useState(20);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <UpvoteRating_Basic
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
