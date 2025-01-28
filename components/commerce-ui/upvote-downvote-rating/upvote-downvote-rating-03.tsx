import { cn } from "@/lib/utils";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import * as React from "react";

const UPVOTE_COLOR = "#f93003";
const DOWNVOTE_COLOR = "#5817fb";
const UPVOTE_POINTS = 1;
const DOWNVOTE_POINTS = 1;

const UpvoteDownvoteRating_01 = () => {
  const [upvotes, setUpvotes] = React.useState(257);
  const [downvotes, setDownvotes] = React.useState(31);
  const [upvoted, setUpvoted] = React.useState(false);
  const [downvoted, setDownvoted] = React.useState(true);

  const handleVote = (type: "upvote" | "downvote") => {
    if (type === "upvote") {
      setUpvoted(!upvoted);
      setUpvotes((prev) => prev + (upvoted ? -UPVOTE_POINTS : UPVOTE_POINTS));
      if (downvoted) {
        setDownvoted(false);
        setDownvotes((prev) => prev - DOWNVOTE_POINTS);
      }
    } else {
      setDownvoted(!downvoted);
      setDownvotes(
        (prev) => prev + (downvoted ? -DOWNVOTE_POINTS : DOWNVOTE_POINTS)
      );
      if (upvoted) {
        setUpvoted(false);
        setUpvotes((prev) => prev - UPVOTE_POINTS);
      }
    }
  };

  const formatNumber = (number: number) => {
    return number >= 1000
      ? (number / 1000).toFixed(1) + "K"
      : number.toLocaleString();
  };

  const totalVotes = formatNumber(upvotes - downvotes);

  return (
    <div
      className={cn(
        "items-middle flex flex-row items-center justify-between gap-0 rounded-full border"
      )}
      style={{
        backgroundColor: upvoted
          ? UPVOTE_COLOR
          : downvoted
            ? DOWNVOTE_COLOR
            : "transparent",
      }}
    >
      <div
        className="cursor-pointer rounded-full px-2 py-2 hover:motion-preset-shake"
        onClick={() => handleVote("upvote")}
      >
        <ThumbsUp
          size={20}
          color="white"
          fill={upvoted ? "white" : "transparent"}
        />
      </div>
      <div className="min-w-8 px-2 py-1 text-center text-white">
        <span>{totalVotes}</span>
      </div>
      <div
        className="cursor-pointer rounded-full px-2 py-2 hover:motion-preset-shake"
        onClick={() => handleVote("downvote")}
      >
        <ThumbsDown
          size={20}
          color="white"
          fill={downvoted ? "white" : "transparent"}
        />
      </div>
    </div>
  );
};

export default UpvoteDownvoteRating_01;
