"use client";

import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface Review_08Props {
  reviewerName?: string;
  reviewerAvatar?: string;
  yearsMember?: number;
  reviewDate?: string;
  reviewContent?: string;
  rating?: number;
  isTranslated?: boolean;
  originalLanguage?: string;
  helpfulCount?: number;
  responseFromHost?: string;
  responseFromHostDate?: string;
}

function Review_08({
  helpfulCount = 3,
  isTranslated = true,
  originalLanguage = "French",
  rating = 4.5,
  responseFromHost = "Thank you so much for your kind words, Sarah! It was a pleasure hosting you and I'm thrilled you enjoyed the apartment and location. The patio is my favorite spot too! I hope to welcome you back soon.",
  responseFromHostDate = "August 2023",
  reviewContent = "This place was absolutely perfect for our weekend getaway. The location is ideal - just a short walk to great restaurants and shops. The apartment was spotlessly clean, beautifully decorated, and had all the amenities we needed. The bed was incredibly comfortable and the neighborhood was quiet at night. Our host was responsive and provided excellent recommendations for local activities. We especially loved the private patio for morning coffee. Would definitely stay here again!",
  reviewDate = "August 2023",
  reviewerAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-03.jpg",
  reviewerName = "Nicole Arnaud",
  yearsMember = 5,
}: Review_08Props = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [helpful, setHelpful] = useState(helpfulCount);
  const [hasMarkedHelpful, setHasMarkedHelpful] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);

  // Truncate content for preview
  const previewContent =
    reviewContent.length > 250 && !isExpanded
      ? reviewContent.substring(0, 250) + "..."
      : reviewContent;

  return (
    <div className="space-y-4 rounded-lg border p-5">
      <div className="flex items-center gap-4">
        <img
          src={reviewerAvatar}
          alt={reviewerName}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <h3 className="font-medium">{reviewerName}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span>·</span>
              <span className="ml-2">
                {yearsMember} {yearsMember === 1 ? "year" : "years"} on Lightbnb
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <time className="text-sm text-gray-500">{reviewDate}</time>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <StarRating value={rating} readOnly iconSize={16} />
        </div>

        {isTranslated && (
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Globe className="h-3 w-3" />
            <span>
              Translated from {originalLanguage}
              <Button
                variant="link"
                size="sm"
                className="h-auto p-0 px-1 text-xs font-normal text-gray-600"
                onClick={() => setShowOriginal(!showOriginal)}
              >
                {showOriginal ? "Show translation" : "Show original"}
              </Button>
            </span>
          </div>
        )}

        <p className="">{previewContent}</p>

        {reviewContent.length > 250 && (
          <Button
            variant="link"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="h-auto p-0 text-gray-600"
          >
            {isExpanded ? "Show less" : "Show more"}
          </Button>
        )}

        <div className="flex items-center pt-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() => {
              if (!hasMarkedHelpful) {
                setHelpful(helpful + 1);
                setHasMarkedHelpful(true);
              } else {
                setHelpful(helpful - 1);
                setHasMarkedHelpful(false);
              }
            }}
          >
            <ThumbsUp
              className={`h-3.5 w-3.5 ${
                hasMarkedHelpful ? "fill-current" : ""
              }`}
            />
            Helpful{" "}
            {helpful > 0 && <span className="text-gray-500">({helpful})</span>}
          </Button>
        </div>
      </div>

      {responseFromHost && (
        <div className="mt-4 ml-6 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <h4 className="mb-1 text-sm font-medium">Response from host</h4>
          <time className="mb-2 block text-xs text-gray-500">
            {responseFromHostDate}
          </time>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            {responseFromHost}
          </p>
        </div>
      )}

      <Separator />
    </div>
  );
}

export default Review_08;
export type { Review_08Props };
