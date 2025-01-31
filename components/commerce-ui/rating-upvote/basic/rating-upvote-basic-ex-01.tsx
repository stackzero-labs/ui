"use client";

import { useState } from "react";
import RatingUpvote_Basic from "@/components/commerce-ui/rating-upvote/basic/rating-upvote-basic";

export default function RatingUpvote_Basic_Ex_01() {
  const [upvotes, setUpvotes] = useState(100);
  const [downvotes, setDownvotes] = useState(20);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <RatingUpvote_Basic
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
