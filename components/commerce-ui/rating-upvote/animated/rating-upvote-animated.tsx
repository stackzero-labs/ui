import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import * as React from "react";
import NumberFlow from "@number-flow/react";

interface RatingUpvoteAnimatedProps {
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

const RatingUpvote_Animated = ({
  upvotes,
  downvotes,
  upvoted,
  downvoted,
  upvoteIncrement = 1,
  downvoteIncrement = 1,
  onVoteChange,
}: RatingUpvoteAnimatedProps) => {
  const handleUpvote = () => {
    if (upvoted) {
      // Undo upvote
      onVoteChange({
        upvotes: upvotes - upvoteIncrement,
        downvotes,
        upvoted: false,
        downvoted: false,
      });
    } else {
      // Add upvote and remove downvote if exists
      onVoteChange({
        upvotes: upvotes + upvoteIncrement,
        downvotes: downvoted ? downvotes - downvoteIncrement : downvotes,
        upvoted: true,
        downvoted: false,
      });
    }
  };

  const handleDownvote = () => {
    if (downvoted) {
      // Undo downvote
      onVoteChange({
        upvotes,
        downvotes: downvotes - downvoteIncrement,
        upvoted: false,
        downvoted: false,
      });
    } else {
      // Add downvote and remove upvote if exists
      onVoteChange({
        upvotes: upvoted ? upvotes - upvoteIncrement : upvotes,
        downvotes: downvotes + downvoteIncrement,
        upvoted: false,
        downvoted: true,
      });
    }
  };

  const totalVotes = upvotes - downvotes;

  return (
    <div
      className={cn(
        "flex flex-row items-center gap-0 rounded-full border",
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

export default RatingUpvote_Animated;
