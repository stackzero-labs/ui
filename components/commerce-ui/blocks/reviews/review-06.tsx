"use client";

import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

interface Review_06Props {
  reviewerName?: string;
  reviewerTitle?: string;
  reviewerAvatar?: string;
  reviewDate?: string;
  reviewTitle?: string;
  reviewContent?: string;
  rating?: number;
  initialUsefulCount?: number;
  initialHelpfulCount?: number;
  initialInsightfulCount?: number;
  verified?: boolean;
}

function FeedbackButton({
  active,
  children,
  count,
  onClick,
}: {
  children: React.ReactNode;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      variant={active ? "secondary" : "outline"}
      size="sm"
      onClick={onClick}
      className={`rounded-full text-xs ${
        active
          ? "bg-blue-100 text-blue-700 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-400"
          : ""
      }`}
    >
      {children}
      <span className="ml-1 font-normal">({count})</span>
    </Button>
  );
}

function Review_06({
  initialHelpfulCount = 17,
  initialInsightfulCount = 9,
  initialUsefulCount = 24,
  rating = 5,
  reviewContent = "I've been using this product daily for about a month now, and I can honestly say it has transformed my routine. The quality is exceptional compared to similar items I've tried before. It's durable, well-designed, and the attention to detail is evident. The customer service experience was also outstanding when I had a question about maintenance. Highly recommend to anyone looking for a reliable solution that actually delivers on its promises.",
  reviewDate = "August 15, 2023",
  reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-01.jpg",
  reviewerName = "Adam Smith",
  reviewerTitle = "Verified Customer",
  reviewTitle = "Exceeded my expectations in every way",
  verified = true,
}: Review_06Props = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [usefulCount, setUsefulCount] = useState(initialUsefulCount);
  const [helpfulCount, setHelpfulCount] = useState(initialHelpfulCount);
  const [insightfulCount, setInsightfulCount] = useState(
    initialInsightfulCount
  );
  const [isUsefulActive, setIsUsefulActive] = useState(false);
  const [isHelpfulActive, setIsHelpfulActive] = useState(false);
  const [isInsightfulActive, setIsInsightfulActive] = useState(false);
  const [isReported, setIsReported] = useState(false);

  // Truncate content for preview with a reasonable length
  const previewContent =
    reviewContent.length > 280 && !isExpanded
      ? reviewContent.substring(0, 280) + "..."
      : reviewContent;

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={reviewerAvatar}
            alt={reviewerName}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {reviewerName}
              </h3>
              {verified && (
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                  <Check className="mr-1 h-4 w-4" />
                  Verified
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {reviewerTitle}
            </p>
          </div>
        </div>
        <time className="text-xs text-gray-500 dark:text-gray-400">
          {reviewDate}
        </time>
      </div>

      <div>
        <div className="mb-2 flex items-center gap-2">
          <StarRating value={rating} readOnly iconSize={18} />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {rating}/5
          </span>
        </div>
        <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
          {reviewTitle}
        </h4>
        <p className="text-gray-700 dark:text-gray-300">{previewContent}</p>

        {reviewContent.length > 280 && (
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

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
        <div className="flex flex-wrap gap-2">
          <FeedbackButton
            count={usefulCount}
            active={isUsefulActive}
            onClick={() => {
              setIsUsefulActive(!isUsefulActive);
              setUsefulCount(
                isUsefulActive ? usefulCount - 1 : usefulCount + 1
              );
            }}
          >
            Useful
          </FeedbackButton>
          <FeedbackButton
            count={helpfulCount}
            active={isHelpfulActive}
            onClick={() => {
              setIsHelpfulActive(!isHelpfulActive);
              setHelpfulCount(
                isHelpfulActive ? helpfulCount - 1 : helpfulCount + 1
              );
            }}
          >
            Helpful
          </FeedbackButton>
          <FeedbackButton
            count={insightfulCount}
            active={isInsightfulActive}
            onClick={() => {
              setIsInsightfulActive(!isInsightfulActive);
              setInsightfulCount(
                isInsightfulActive ? insightfulCount - 1 : insightfulCount + 1
              );
            }}
          >
            Insightful
          </FeedbackButton>
        </div>

        <button
          onClick={() => setIsReported(!isReported)}
          className={`text-xs font-medium ${
            isReported
              ? "text-red-500 dark:text-red-400"
              : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          }`}
        >
          {isReported ? "Reported" : "Report"}
        </button>
      </div>
    </div>
  );
}

export default Review_06;
export type { Review_06Props };
