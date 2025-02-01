import { cn } from "@/lib/utils";
import { ArrowBigDown, ArrowBigUp } from "lucide-react";
import * as React from "react";

interface UpvoteDownvoteRatingProps {
  className?: string;
  initialUpvotes?: number;
  initialDownvotes?: number;
  upvotes?: number;
  downvotes?: number;
  upvoted?: boolean;
  downvoted?: boolean;
  upvoteColor?: string;
  downvoteColor?: string;
  readOnly?: boolean;
  abbreviation?: boolean;
  abbreviationLetter?: string;
  useLocalString?: boolean;
  defaultUpvoted?: boolean;
  defaultDownvoted?: boolean;
  upvotePoints?: number;
  downvotePoints?: number;
  onUpvoteChange?: (upvoted: boolean) => void;
  onDownvoteChange?: (downvoted: boolean) => void;
  onVotesChange?: (upvotes: number, downvotes: number) => void;
}

const UpvoteDownvoteRating: React.FC<UpvoteDownvoteRatingProps> = ({
  abbreviation = false,
  abbreviationLetter = "K",
  className,
  defaultDownvoted = false,
  defaultUpvoted = false,
  downvoteColor = "#a60021",
  downvoted,
  downvotePoints = 1,
  downvotes,
  initialDownvotes = 0,
  initialUpvotes = 1500,
  onDownvoteChange,
  onUpvoteChange,
  onVotesChange,
  readOnly = false,
  upvoteColor = "#009e42",
  upvoted,
  upvotePoints = 1,
  upvotes,
  useLocalString = true,
}) => {
  const [internalUpvoted, setInternalUpvoted] = React.useState(defaultUpvoted);
  const [internalDownvoted, setInternalDownvoted] =
    React.useState(defaultDownvoted);
  const [internalUpvotes, setInternalUpvotes] = React.useState(
    Math.round(initialUpvotes)
  );
  const [internalDownvotes, setInternalDownvotes] = React.useState(
    Math.round(initialDownvotes)
  );

  const isControlled =
    upvotes !== undefined &&
    downvotes !== undefined &&
    upvoted !== undefined &&
    downvoted !== undefined;

  const currentUpvotes = isControlled ? upvotes : internalUpvotes;
  const currentDownvotes = isControlled ? downvotes : internalDownvotes;
  const currentUpvoted = isControlled ? upvoted : internalUpvoted;
  const currentDownvoted = isControlled ? downvoted : internalDownvoted;

  const handleUpvote = () => {
    if (!readOnly) {
      if (currentUpvoted) {
        if (isControlled) {
          onUpvoteChange?.(false);
          onVotesChange?.(currentUpvotes - upvotePoints, currentDownvotes);
        } else {
          setInternalUpvoted(false);
          setInternalUpvotes((prev) => prev - upvotePoints);
        }
      } else {
        if (isControlled) {
          onUpvoteChange?.(true);
          onVotesChange?.(currentUpvotes + upvotePoints, currentDownvotes);
          if (currentDownvoted) {
            onDownvoteChange?.(false);
            onVotesChange?.(
              currentUpvotes + upvotePoints,
              currentDownvotes - downvotePoints
            );
          }
        } else {
          setInternalUpvoted(true);
          setInternalUpvotes((prev) => prev + upvotePoints);
          if (currentDownvoted) {
            setInternalDownvoted(false);
            setInternalDownvotes((prev) => prev - downvotePoints);
          }
        }
      }
    }
  };

  const handleDownvote = () => {
    if (!readOnly) {
      if (currentDownvoted) {
        if (isControlled) {
          onDownvoteChange?.(false);
          onVotesChange?.(currentUpvotes, currentDownvotes - downvotePoints);
        } else {
          setInternalDownvoted(false);
          setInternalDownvotes((prev) => prev - downvotePoints);
        }
      } else {
        if (isControlled) {
          onDownvoteChange?.(true);
          onVotesChange?.(currentUpvotes, currentDownvotes + downvotePoints);
          if (currentUpvoted) {
            onUpvoteChange?.(false);
            onVotesChange?.(
              currentUpvotes - upvotePoints,
              currentDownvotes + downvotePoints
            );
          }
        } else {
          setInternalDownvoted(true);
          setInternalDownvotes((prev) => prev + downvotePoints);
          if (currentUpvoted) {
            setInternalUpvoted(false);
            setInternalUpvotes((prev) => prev - upvotePoints);
          }
        }
      }
    }
  };

  const formatNumber = (number: number) => {
    if (abbreviation && number >= 1000) {
      return (number / 1000).toFixed(1) + abbreviationLetter;
    }
    return useLocalString ? number.toLocaleString() : number;
  };

  const totalVotes = formatNumber(currentUpvotes - currentDownvotes);

  return (
    <div
      className={cn(
        "items-middle flex flex-row justify-between gap-0 rounded-full border",
        className
      )}
      style={{
        backgroundColor: currentUpvoted
          ? upvoteColor
          : currentDownvoted
            ? downvoteColor
            : "transparent",
      }}
    >
      <div
        className={`rounded-full p-1 ${
          currentUpvoted && !readOnly
            ? "hover:bg-zinc-800/30"
            : "hover:bg-zinc-800/30"
        } ${readOnly ? "cursor-auto" : "cursor-pointer"}`}
        onClick={handleUpvote}
      >
        <ArrowBigUp
          size={24}
          color="white"
          fill={currentUpvoted ? "white" : "transparent"}
        />
      </div>

      <div className="min-w-8 p-1 text-center">
        <span>{totalVotes}</span>
      </div>
      <div
        className={`rounded-full p-1 ${
          currentDownvoted && !readOnly
            ? "hover:bg-zinc-800/30"
            : "hover:bg-zinc-800/30"
        } ${readOnly ? "cursor-auto" : "cursor-pointer"} `}
        onClick={handleDownvote}
      >
        <ArrowBigDown
          size={24}
          color="white"
          fill={currentDownvoted ? "white" : "transparent"}
        />
      </div>
    </div>
  );
};

export default UpvoteDownvoteRating;
