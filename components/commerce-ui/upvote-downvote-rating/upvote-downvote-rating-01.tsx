import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import * as React from "react";

const UPVOTE_COLOR = "#009e42";
const DOWNVOTE_COLOR = "#a60021";
const UPVOTE_POINTS = 1;
const DOWNVOTE_POINTS = 1;

const UpvoteDownvoteRating_01 = () => {
  const [upvotes, setUpvotes] = React.useState(40);
  const [downvotes, setDownvotes] = React.useState(10);
  const [upvoted, setUpvoted] = React.useState(true);
  const [downvoted, setDownvoted] = React.useState(false);

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
        "items-middle flex flex-row justify-between gap-0 rounded-full border"
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
        className="cursor-pointer rounded-full p-1 hover:bg-zinc-800/30"
        onClick={() => handleVote("upvote")}
      >
        <ArrowBigUp
          size={24}
          color="white"
          fill={upvoted ? "white" : "transparent"}
        />
      </div>
      <div className="min-w-8 p-1 text-center text-white">
        <span>{totalVotes}</span>
      </div>
      <div
        className="cursor-pointer rounded-full p-1 hover:bg-zinc-800/30"
        onClick={() => handleVote("downvote")}
      >
        <ArrowBigDown
          size={24}
          color="white"
          fill={downvoted ? "white" : "transparent"}
        />
      </div>
    </div>
  );
};

export default UpvoteDownvoteRating_01;
