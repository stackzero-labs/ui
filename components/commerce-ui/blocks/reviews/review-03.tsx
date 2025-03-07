"use client";

import LikeRating from "@/components/commerce-ui/like-rating/basic/like-rating-basic";
import StarRating from "@/components/commerce-ui/star-rating/basic/star-rating-basic";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

interface Review_03Props {
  defaultRating?: number;
  reviewerName?: string;
  reviewerTitle?: string;
  reviewerAvatar?: string;
  initialLikes?: number;
  initialDislikes?: number;
  initialIsLiked?: boolean;
  initialIsDisliked?: boolean;
  reviewTitle?: string;
  reviewContent?: string;
}

function Review_03({
  defaultRating = 5,
  reviewerName = "Adam Smith",
  reviewerTitle = "CEO ACME Inc.",
  reviewerAvatar = "https://docs.material-tailwind.com/img/face-2.jpg",
  initialLikes = 11,
  initialDislikes = 1,
  initialIsLiked = true,
  initialIsDisliked = false,
  reviewTitle = "Wished I bought this thing sooner!!",
  reviewContent = "I recently got my hands on this amazing bag, and after using it for a while, I can confidently say it is a solid choice for travelling. Verdict: If you are looking for an amazing backpack that balances comfort, organization, and durability, this is a great investment. Would definitely recommend it to anyone in need of a reliable bag! 🎒💼",
}: Review_03Props = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isDisliked, setIsDisliked] = useState(initialIsDisliked);
  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);

  // Check if content overflows when component mounts or content changes
  useEffect(() => {
    const checkOverflow = () => {
      if (contentRef.current) {
        // Check if scrollHeight is greater than clientHeight
        const isOverflowing =
          contentRef.current.scrollHeight > contentRef.current.clientHeight;
        setIsContentOverflowing(isOverflowing);
      }
    };

    // Run the check after render
    checkOverflow();

    // Also check on window resize in case layout changes
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [reviewContent]);
  return (
    <div className="items-left flex max-w-2xl flex-col gap-6 rounded-lg border px-6 py-4">
      <div className="flex flex-row flex-wrap items-end justify-between gap-4">
        <div className="flex flex-row items-end justify-between gap-4">
          <img
            src={reviewerAvatar}
            alt="avatar"
            className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
          />
          <div>
            <p className="text-sm font-semibold">{reviewerName}</p>
            <p className="font-base text-muted-foreground text-sm">
              {reviewerTitle}
            </p>
          </div>
        </div>

        <div className="text-muted-foreground max-w-[15ch] grow-0 text-sm">
          <span className="font-semibold">{likes} people </span>found this
          helpful
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <StarRating value={defaultRating} readOnly />
        <div>
          <h2 className="mb-2 text-xl font-semibold">{reviewTitle}</h2>
          <p
            ref={contentRef}
            className={`text-muted-foreground ${isExpanded ? "" : "line-clamp-3"} text-ellipsis`}
          >
            {reviewContent}
          </p>
        </div>
        {isContentOverflowing && (
          <Button
            className="px-0"
            variant="link"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        )}
      </div>

      <div>
        <LikeRating
          dislikes={dislikes}
          isDisliked={isDisliked}
          isLiked={isLiked}
          likes={likes}
          onRatingChange={(newState) => {
            setLikes(newState.likes);
            setDislikes(newState.dislikes);
            setIsLiked(newState.isLiked);
            setIsDisliked(newState.isDisliked);
          }}
        />
      </div>
    </div>
  );
}

export default Review_03;
export type { Review_03Props };
