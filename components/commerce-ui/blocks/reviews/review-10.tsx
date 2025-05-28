"use client";

import UpvoteRating_Basic from "@/components/commerce-ui/components/upvote-rating/basic/upvote-rating-basic";
import { Button } from "@/components/ui/button";
import { Check, Clock, Flag, Share2 } from "lucide-react";
import { useState } from "react";

interface Review_10Props {
  hunterName?: string;
  hunterTitle?: string;
  hunterAvatar?: string;
  reviewDate?: string;
  reviewTitle?: string;
  reviewContent?: string;
  initialUpvotes?: number;
  initialDownvotes?: number;
  initialUpvoted?: boolean;
  initialDownvoted?: boolean;
  productIcon?: string;
  productName?: string;
  verified?: boolean;
}

function Review_10({
  hunterAvatar = "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-05.jpg",
  hunterName = "Ryan Hoover",
  hunterTitle = "Product Hunter",
  initialDownvoted = false,
  initialDownvotes = 7,
  initialUpvoted = false,
  initialUpvotes = 128,
  productIcon = "https://avatar.vercel.sh/rauchg?rounded=60",
  productName = "TaskMaster",
  reviewContent = "I've tried countless to-do apps over the years, but TaskMaster has quickly become my default. What sets it apart is its perfect balance of simplicity and functionality. The UI is clean, focused, and doesn't overwhelm you with unnecessary features.\n\nThe standout feature is the 'Priority Matrix' that helps you sort tasks based on importance and urgency - a simple implementation of the Eisenhower matrix. The daily focus view shows only what you need to accomplish today, which reduces anxiety and increases productivity.\n\nSync works flawlessly across devices, and the offline mode has saved me multiple times. The developers are responsive and push updates regularly based on user feedback. If you're looking for a to-do app that stays out of your way while actually helping you get things done, this is it.",
  reviewDate = "3 days ago",
  reviewTitle = "TaskMaster - The simplest to-do app that actually works",
  verified = true,
}: Review_10Props = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isReported, setIsReported] = useState(false);
  const [voteState, setVoteState] = useState({
    downvoted: initialDownvoted,
    downvotes: initialDownvotes,
    upvoted: initialUpvoted,
    upvotes: initialUpvotes,
  });

  // Handle sharing
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          text: `Check out this review of ${productName}`,
          title: reviewTitle,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Error sharing:", err);
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  // Format the content for display
  const paragraphs = reviewContent.split("\n\n");
  const previewContent = isExpanded ? paragraphs : [paragraphs[0]];

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={hunterAvatar}
            alt={hunterName}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {hunterName}
              </h3>
              {verified && (
                <span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                  <Check className="mr-1 h-3 w-3" />
                  Hunter
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {hunterTitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={productIcon}
            alt={productName}
            className="h-8 w-8 rounded-lg object-cover"
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {productName}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
          {reviewTitle}
        </h4>

        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          {previewContent.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {paragraphs.length > 1 && (
          <Button
            variant="link"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 h-auto p-0 text-orange-600 dark:text-orange-400"
          >
            {isExpanded ? "Show less" : "Read more"}
          </Button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-4 dark:border-gray-800">
        <div className="flex items-center gap-4">
          <UpvoteRating_Basic
            upvotes={voteState.upvotes}
            downvotes={voteState.downvotes}
            upvoted={voteState.upvoted}
            downvoted={voteState.downvoted}
            onVoteChange={setVoteState}
          />

          <button
            onClick={() => setIsReported(!isReported)}
            className={`flex items-center gap-1 text-xs font-medium transition-colors ${
              isReported
                ? "text-red-500 dark:text-red-400"
                : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
          >
            <Flag className="h-4 w-4" />
            {isReported ? "Reported" : "Report"}
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>

          <time className="text-xs text-gray-500 dark:text-gray-400">
            <Clock className="mr-1.5 inline h-4 w-4" />
            {reviewDate}
          </time>
        </div>
      </div>
    </div>
  );
}

export default Review_10;
export type { Review_10Props };
