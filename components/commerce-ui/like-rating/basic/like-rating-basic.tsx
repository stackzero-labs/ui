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
  onChange: (value: Rating) => void;
  /**
   * Optional CSS class to add to the container
   */
  className?: string;
}

const LikeRating_Basic = ({
  className,
  onChange,
  value,
}: LikeRatingBasicProps) => {
  const handleLike = () => {
    onChange(value === "like" ? null : "like");
  };

  const handleDislike = () => {
    onChange(value === "dislike" ? null : "dislike");
  };

  return (
    <div
      className={cn(
        "inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse",
        className
      )}
    >
      <Button
        className={cn(
          "rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10",
          value === "like" && "text-[#009e42]"
        )}
        variant="outline"
        size="icon"
        aria-label="Like"
        onClick={handleLike}
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
          value === "dislike" && "text-[#a60021]"
        )}
        variant="outline"
        size="icon"
        aria-label="Dislike"
        onClick={handleDislike}
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
