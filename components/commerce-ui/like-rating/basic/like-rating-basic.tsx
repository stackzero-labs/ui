import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import * as React from "react";

export type Rating = "like" | "dislike" | null;

interface LikeRatingBasicProps {
  /**
   * Current rating value
   */
  value: Rating;
  /**
   * Callback fired when the rating changes
   */
  onChange?: (value: Rating) => void;
  /**
   * Optional CSS class to add to the container
   */
  className?: string;
  /**
   * If true, the rating cannot be changed
   */
  readOnly?: boolean;
}

const LikeRating_Basic = ({
  className,
  onChange,
  value,
  readOnly = false,
}: LikeRatingBasicProps) => {
  const handleLike = () => {
    if (!readOnly) {
      onChange?.(value === "like" ? null : "like");
    }
  };

  const handleDislike = () => {
    if (!readOnly) {
      onChange?.(value === "dislike" ? null : "dislike");
    }
  };

  return (
    <div
      className={cn(
        "inline-flex -space-x-px rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse",
        className
      )}
    >
      <Button
        className={cn(
          "rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10",
          value === "like" && "text-[#009e42]",
          readOnly && "cursor-default"
        )}
        variant="outline"
        size="icon"
        aria-label="Like"
        onClick={handleLike}
        disabled={readOnly}
      >
        <ThumbsUp
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className={cn(value === "like" && "fill-[#009e42]")}
        />
      </Button>
      <Button
        className={cn(
          "rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10",
          value === "dislike" && "text-[#a60021]",
          readOnly && "cursor-default"
        )}
        variant="outline"
        size="icon"
        aria-label="Dislike"
        onClick={handleDislike}
        disabled={readOnly}
      >
        <ThumbsDown
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className={cn(value === "dislike" && "fill-[#a60021]")}
        />
      </Button>
    </div>
  );
};

export default LikeRating_Basic;
