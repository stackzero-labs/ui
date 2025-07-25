import { cn } from "@/lib/utils";
import { ThumbsDown, ThumbsUp } from "lucide-react";

interface LikeRatingBasicProps {
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
  likeIncrement?: number;
  dislikeIncrement?: number;
  onRatingChange: (newState: {
    likes: number;
    dislikes: number;
    isLiked: boolean;
    isDisliked: boolean;
  }) => void;
  className?: string;
}

const LikeRating_Basic = ({
  className,
  dislikeIncrement = 1,
  dislikes = 0,
  isDisliked,
  isLiked,
  likeIncrement = 1,
  likes = 0,
  onRatingChange,
}: LikeRatingBasicProps) => {
  const handleLike = () => {
    if (isLiked) {
      // Undo like
      onRatingChange({
        dislikes,
        isDisliked: false,
        isLiked: false,
        likes: likes - likeIncrement,
      });
    } else {
      // Add like and remove dislike if exists
      onRatingChange({
        dislikes: isDisliked ? dislikes - dislikeIncrement : dislikes,
        isDisliked: false,
        isLiked: true,
        likes: likes + likeIncrement,
      });
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      // Undo dislike
      onRatingChange({
        dislikes: dislikes - dislikeIncrement,
        isDisliked: false,
        isLiked: false,
        likes,
      });
    } else {
      // Add dislike and remove like if exists
      onRatingChange({
        dislikes: dislikes + dislikeIncrement,
        isDisliked: true,
        isLiked: false,
        likes: isLiked ? likes - likeIncrement : likes,
      });
    }
  };

  const formatCount = (count: number) =>
    count >= 1000 ? `${(count / 1000).toFixed(1)}K` : count.toLocaleString();

  return (
    <div
      className={cn(
        "inline-flex cursor-pointer -space-x-px rounded-lg shadow-xs shadow-black/5 rtl:space-x-reverse",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-[4rem] flex-row items-center justify-center rounded-none border px-2 py-1 font-mono shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-[#009e42]/20 focus-visible:z-10",
          isLiked && "bg-[#009e42]/20 text-[#009e42]"
        )}
        onClick={handleLike}
        aria-label="Like"
        aria-labelledby="like-count"
        title="Like"
      >
        <ThumbsUp
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className={cn("mr-2", isLiked && "text-[#009e42]")}
        />
        {formatCount(likes)}
      </div>
      <div
        className={cn(
          "flex min-w-[4rem] flex-row items-center justify-center rounded-none border px-2 py-1 font-mono shadow-none first:rounded-s-lg last:rounded-e-lg hover:bg-[#a60021]/20 focus-visible:z-10",
          isDisliked && "bg-[#a60021]/20 text-[#a60021]"
        )}
        aria-label="Dislike"
        aria-labelledby="dislike-count"
        title="Dislike"
        onClick={handleDislike}
      >
        <ThumbsDown
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className={cn("mr-2", isDisliked && "text-[#a60021]")}
        />
        {formatCount(dislikes)}
      </div>
    </div>
  );
};

export default LikeRating_Basic;
