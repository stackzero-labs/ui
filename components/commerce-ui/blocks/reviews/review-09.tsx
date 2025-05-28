"use client";

import StarRating from "@/components/commerce-ui/components/star-rating/fractions/star-rating-fractions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Check, Search, SlidersHorizontal, X } from "lucide-react";
import { useState } from "react";

interface Review_09Props {
  onFilterChange?: (filters: ReviewFilters) => void;
  totalReviews?: number;
  averageRating?: number;
  commonKeywords?: string[];
}

interface ReviewFilters {
  ratings: number[];
  sortBy: string;
  keywords: string[];
  searchTerm: string;
}

function Review_09({
  averageRating = 4.8,
  commonKeywords = [
    "Clean",
    "Comfortable",
    "Great location",
    "Spacious",
    "Value for money",
    "Friendly host",
    "Quiet",
    "Well equipped",
  ],
  onFilterChange,
  totalReviews = 214,
}: Review_09Props) {
  const [filters, setFilters] = useState<ReviewFilters>({
    keywords: ["Clean", "Comfortable"],
    ratings: [4, 5],
    searchTerm: "",
    sortBy: "Most recent",
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const sortOptions = [
    "Most recent",
    "Highest rated",
    "Lowest rated",
    "Most helpful",
  ];

  const handleFilterChange = (updatedFilters: Partial<ReviewFilters>) => {
    const newFilters = { ...filters, ...updatedFilters };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const toggleKeyword = (keyword: string) => {
    const newKeywords = filters.keywords.includes(keyword)
      ? filters.keywords.filter((k) => k !== keyword)
      : [...filters.keywords, keyword];

    handleFilterChange({ keywords: newKeywords });
  };

  const toggleRating = (rating: number) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];

    handleFilterChange({ ratings: newRatings });
  };

  return (
    <div className="space-y-4 rounded-md border p-4">
      <div className="flex flex-col justify-between gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:items-center dark:border-gray-800">
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Reviews ({totalReviews})
          </h3>
          <div className="flex items-center gap-2">
            <StarRating value={averageRating} readOnly iconSize={16} />
            <span className="font-medium">{averageRating}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 sm:max-w-[240px]">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search reviews"
              className="pl-9"
              value={filters.searchTerm}
              onChange={(e) =>
                handleFilterChange({ searchTerm: e.target.value })
              }
            />
            {filters.searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 h-full rounded-l-none"
                onClick={() => handleFilterChange({ searchTerm: "" })}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="sm:hidden"
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filter
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="hidden sm:flex">
                Sort: {filters.sortBy}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {sortOptions.map((option) => (
                <DropdownMenuItem
                  key={option}
                  className="flex items-center justify-between"
                  onClick={() => handleFilterChange({ sortBy: option })}
                >
                  {option}
                  {filters.sortBy === option && <Check className="h-4 w-4" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div
        className={`space-y-5 ${showMobileFilters ? "block" : "hidden sm:block"}`}
      >
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            Rating
          </h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div
                key={rating}
                className={`flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors ${
                  filters.ratings.includes(rating)
                    ? "bg-gray-100 dark:bg-gray-800"
                    : "hover:bg-gray-50 dark:hover:bg-gray-900"
                }`}
                onClick={() => toggleRating(rating)}
              >
                <input
                  type="checkbox"
                  checked={filters.ratings.includes(rating)}
                  onChange={() => toggleRating(rating)}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <StarRating
                  value={rating}
                  readOnly
                  iconSize={16}
                  maxStars={5}
                />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {rating} {rating === 1 ? "star" : "stars"} & above
                </span>
              </div>
            ))}
            <div
              className={`flex cursor-pointer items-center gap-2 rounded-md p-2 transition-colors ${
                filters.ratings.length === 0
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
              onClick={() => handleFilterChange({ ratings: [] })}
            >
              <input
                type="checkbox"
                checked={filters.ratings.length === 0}
                onChange={() => handleFilterChange({ ratings: [] })}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                All ratings
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white">
            Popular mentions
          </h4>
          <div className="flex flex-wrap gap-2">
            {commonKeywords.map((keyword) => (
              <Badge
                key={keyword}
                variant={
                  filters.keywords.includes(keyword) ? "default" : "outline"
                }
                className="cursor-pointer"
                onClick={() => toggleKeyword(keyword)}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-200 pt-4 sm:hidden dark:border-gray-800">
          <Button
            variant="outline"
            onClick={() => {
              setFilters({
                keywords: [],
                ratings: [],
                searchTerm: "",
                sortBy: "Most recent",
              });
              setShowMobileFilters(false);
            }}
          >
            Reset filters
          </Button>
          <Button onClick={() => setShowMobileFilters(false)}>
            Show {totalReviews} reviews
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Review_09;
export type { Review_09Props };
