"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";

interface StarRatingBasicProps {
  value: number;
  onChange?: (value: number) => void;
  className?: string;
  iconSize?: number;
  maxStars?: number;
  readOnly?: boolean;
  color?: string;
}

const StarRating_Basic = ({
  className,
  color = "#FFD700",
  iconSize = 24,
  maxStars = 5,
  onChange,
  readOnly = false,
  value,
}: StarRatingBasicProps) => {
  const handleStarClick = (index: number) => {
    if (readOnly || !onChange) return;
    const newRating = index + 1;
    onChange(newRating);
  };

  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          size={iconSize}
          fill={value > index ? color : "transparent"}
          color={value > index ? color : "gray"}
          onClick={() => handleStarClick(index)}
          className={cn(
            "transition-transform duration-200",
            !readOnly && "cursor-pointer hover:scale-110"
          )}
        />
      ))}
    </div>
  );
};

export default StarRating_Basic;
