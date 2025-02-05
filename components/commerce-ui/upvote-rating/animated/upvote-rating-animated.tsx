import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import * as React from "react";
import NumberFlow from "@number-flow/react";

interface UpvoteRatingAnimatedProps {
  upvotes: number;
  downvotes: number;
  upvoted: boolean;
  downvoted: boolean;
  upvoteIncrement?: number;
  downvoteIncrement?: number;
  onVoteChange: (newState: {
    upvotes: number;
    downvotes: number;
    upvoted: boolean;
    downvoted: boolean;
  }) => void;
}

const UpvoteRating_Animated = ({
  downvoted,
  downvoteIncrement = 1,
  downvotes,
  onVoteChange,
  upvoted,
  upvoteIncrement = 1,
  upvotes,
}: UpvoteRatingAnimatedProps) => {
  const handleUpvote = () => {
    if (upvoted) {
      // Undo upvote
      onVoteChange({
        downvoted: false,
        downvotes,
        upvoted: false,
        upvotes: upvotes - upvoteIncrement,
      });
    } else {
      // Add upvote and remove downvote if exists
      onVoteChange({
        downvoted: false,
        downvotes: downvoted ? downvotes - downvoteIncrement : downvotes,
        upvoted: true,
        upvotes: upvotes + upvoteIncrement,
      });
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      // Undo downvote
      onVoteChange({
        downvoted: false,
        downvotes: downvotes - downvoteIncrement,
        upvoted: false,
        upvotes,
      });
    } else {
      // Add downvote and remove upvote if exists
      onVoteChange({
        downvoted: true,
        downvotes: downvotes + downvoteIncrement,
        upvoted: false,
        upvotes: upvoted ? upvotes - upvoteIncrement : upvotes,
      });
    }
  };

  const totalVotes = upvotes - downvotes;

  return (
    <div
      className={cn(
        "flex w-fit flex-row items-center gap-0 rounded-full border",
        upvoted && "bg-[#009e42]",
        downvoted && "bg-[#a60021]"
      )}
    >
      <button
        onClick={handleUpvote}
        className="rounded-full p-1 hover:bg-zinc-800/30"
      >
        <ArrowBigUp
          size={24}
          className={cn("text-white", upvoted && "fill-white")}
        />
      </button>

      <span className="min-w-8 p-1 text-center text-white">
        <NumberFlow
          format={{ notation: "compact" }}
          value={totalVotes}
          className="font-mono"
        />
      </span>

      <button
        onClick={handleDownvote}
        className="rounded-full p-1 hover:bg-zinc-800/30"
      >
        <ArrowBigDown
          size={24}
          className={cn("text-white", downvoted && "fill-white")}
        />
      </button>
    </div>
  );
};

export default UpvoteRating_Animated;
