"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";

interface StarRatingBasicProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  iconSize?: number;
  maxStars?: number;
}

const StarRating_Basic = ({
  value,
  onChange,
  className,
  iconSize = 24,
  maxStars = 5,
}: StarRatingBasicProps) => {
  const handleStarClick = (index: number) => {
    const newRating = index + 1;
    onChange(newRating);
  };

  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          size={iconSize}
          fill={value > index ? "gold" : "transparent"}
          color={value > index ? "gold" : "gray"}
          onClick={() => handleStarClick(index)}
          className="transition-transform duration-200 hover:scale-110"
          style={{ cursor: "pointer" }}
        />
      ))}
    </div>
  );
};

export default StarRating_Basic;
