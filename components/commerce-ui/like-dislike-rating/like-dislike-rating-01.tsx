import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import * as React from "react";

const LIKE_COLOR = "#009e42";
const DISLIKE_COLOR = "#a60021";

const LikeDislikeRating_01 = () => {
  // Using single state: 1 for like, -1 for dislike, 0 for neutral
  const [rating, setRating] = React.useState<number>(0);

  const handleLike = () => {
    setRating((current) => (current === 1 ? 0 : 1));
  };

  const handleDislike = () => {
    setRating((current) => (current === -1 ? 0 : -1));
  };

  return (
    <div className="inline-flex -space-x-px rounded-lg shadow-sm shadow-black/5 rtl:space-x-reverse">
      <Button
        className={cn(
          "rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10",
          rating === 1 && "text-[#009e42]"
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
          className={cn(rating === 1 && "fill-[#009e42]")}
        />
      </Button>
      <Button
        className={cn(
          "rounded-none shadow-none first:rounded-s-lg last:rounded-e-lg focus-visible:z-10",
          rating === -1 && "text-[#a60021]"
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
          className={cn(rating === -1 && "fill-[#a60021]")}
        />
      </Button>
    </div>
  );
};

export default LikeDislikeRating_01;
