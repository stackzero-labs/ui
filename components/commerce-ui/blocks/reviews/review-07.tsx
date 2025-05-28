"use client";

import LikeRating from "@/components/commerce-ui/components/like-rating/basic/like-rating-basic";
import { Button } from "@/components/ui/button";
import {
  Building,
  Calendar,
  Clock,
  Frown,
  MapPin,
  Smile,
  Users,
} from "lucide-react";
import { useState } from "react";

type StayType = "Solo" | "Couple" | "Family" | "Friends" | "Business";

interface Review_07Props {
  reviewerName?: string;
  reviewerCountry?: string;
  reviewerAvatar?: string;
  roomType?: string;
  stayDuration?: number;
  stayType?: StayType;
  reviewTitle?: string;
  reviewScore?: number;
  positiveHighlight?: string;
  negativeHighlight?: string;
  reviewContent?: string;
  reviewDate?: string;
  initialLikes?: number;
  initialDislikes?: number;
  initialIsLiked?: boolean;
  initialIsDisliked?: boolean;
}

function Review_07({
  initialDislikes = 3,
  initialIsDisliked = false,
  initialIsLiked = false,
  initialLikes = 24,
  negativeHighlight = "Bathroom could use an update, shower pressure was weak",
  positiveHighlight = "Breathtaking ocean views and incredibly attentive staff",
  reviewContent = "We stayed for a week in the Deluxe Ocean View Suite and were blown away by the panoramic views. Waking up to the sound of waves every morning was therapeutic. The staff went above and beyond, especially the concierge who helped us book local experiences. The room was spacious and the bed comfortable, though the bathroom fixtures showed signs of age. The breakfast buffet offered excellent variety and the rooftop pool area was never too crowded. Would definitely return, but would request a recently renovated room next time.",
  reviewDate = "May 12, 2023",
  reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-02.jpg",
  reviewerCountry = "Spain",
  reviewerName = "Maria Lopez",
  reviewScore = 8.5,
  reviewTitle = "Amazing view, excellent service",
  roomType = "Deluxe Ocean View Suite",
  stayDuration = 7,
  stayType = "Couple",
}: Review_07Props = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isDisliked, setIsDisliked] = useState(initialIsDisliked);

  // Format score for display (ensure it has one decimal place)
  const formattedScore = reviewScore.toFixed(1);

  // Determine score color based on value
  const getScoreColor = () => {
    if (reviewScore >= 9) return "bg-emerald-300 dark:bg-emerald-500";
    if (reviewScore >= 7) return "bg-blue-300 dark:bg-blue-500";
    if (reviewScore >= 5) return "bg-amber-300 dark:bg-amber-500";
    return "bg-red-300 dark:bg-red-500";
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row">
        {/* Reviewer information */}
        <div className="flex-shrink-0 border-b border-gray-200 bg-gray-50 p-6 md:w-64 md:border-r md:border-b-0 dark:border-gray-800 dark:bg-gray-950">
          <div className="mb-4 flex items-center gap-4">
            <img
              src={reviewerAvatar}
              alt={reviewerName}
              className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
            />

            <div>
              <h3 className="mb-1 font-semibold text-gray-900 dark:text-gray-100">
                {reviewerName}
              </h3>
              <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="mr-1.5 h-4 w-4 text-gray-500" />
                {reviewerCountry}
              </div>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start">
              <Building className="mr-1.5 h-5 w-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">
                {roomType}
              </span>
            </div>

            <div className="flex items-start">
              <Calendar className="mr-1.5 h-5 w-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">
                {stayDuration} {stayDuration === 1 ? "night" : "nights"}
              </span>
            </div>

            <div className="flex items-start">
              <Users className="mr-1.5 h-5 w-5 text-gray-500" />
              <span className="text-gray-700 dark:text-gray-300">
                {stayType} traveler
              </span>
            </div>

            <div className="flex items-start">
              <Clock className="mr-1.5 h-5 w-5 text-gray-500" />
              <time className="text-gray-700 dark:text-gray-300">
                {reviewDate}
              </time>
            </div>
          </div>
        </div>

        {/* Review content */}
        <div className="flex-1 p-6">
          <div className="mb-4 flex items-start justify-between">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              {reviewTitle}
            </h2>
            <div
              className={`ml-4 flex h-9 w-fit shrink-0 items-center justify-center rounded-t-md rounded-br-md p-2 text-2xl font-semibold ${getScoreColor()}`}
            >
              {formattedScore}
            </div>
          </div>

          <div className="mb-5 space-y-3">
            <div className="flex items-start rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
              <Smile className="mr-3 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-800 dark:text-green-200">
                {positiveHighlight}
              </p>
            </div>

            <div className="flex items-start rounded-lg bg-red-50 p-3 dark:bg-red-900/20">
              <Frown className="mr-3 h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
              <p className="text-sm text-red-800 dark:text-red-200">
                {negativeHighlight}
              </p>
            </div>
          </div>

          <div className="mb-5">
            <p
              className={`text-gray-700 dark:text-gray-300 ${!isExpanded && "line-clamp-3"}`}
            >
              {reviewContent}
            </p>
            {reviewContent.length > 180 && (
              <Button
                variant="link"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 h-auto p-0 text-blue-600 dark:text-blue-400"
              >
                {isExpanded ? "Show less" : "Read more"}
              </Button>
            )}
          </div>

          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Was this review helpful?
              </p>
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
        </div>
      </div>
    </div>
  );
}

export default Review_07;
export type { Review_07Props, StayType };
