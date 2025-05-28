"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import * as React from "react";

// Add ID generator outside component to maintain counter
let nextId = 0;
const generateStarIds = (count: number) =>
  Array.from({ length: count }, () => `star-${nextId++}`);

interface StarRatingBasicProps {
  value: number;
  onChange?: (value: number) => void;
  className?: string;
  iconSize?: number;
  maxStars?: number;
  readOnly?: boolean;
  color?: string;
}

const StarIcon = React.memo(
  ({
    iconSize,
    index,
    isInteractive,
    onClick,
    onMouseMove,
    style,
  }: {
    index: number;
    style: React.CSSProperties;
    iconSize: number;
    onClick: (e: React.MouseEvent<SVGElement>) => void;
    onMouseMove: (e: React.MouseEvent<SVGElement>) => void;
    isInteractive: boolean;
  }) => (
    <Star
      key={index}
      size={iconSize}
      fill={style.fill}
      color={style.color}
      onClick={onClick}
      onMouseMove={onMouseMove}
      className={cn(
        "transition-colors duration-200",
        isInteractive && "cursor-pointer"
      )}
      style={style}
    />
  )
);
StarIcon.displayName = "StarIcon";

const StarRating_Fractions = ({
  className,
  color = "#e4c616",
  iconSize = 24,
  maxStars = 5,
  onChange,
  readOnly = false,
  value,
}: StarRatingBasicProps) => {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);
  // Generate stable IDs on component mount
  const [starIds] = React.useState(() => generateStarIds(maxStars));

  const calculateRating = React.useCallback(
    (index: number, event: React.MouseEvent<SVGElement>) => {
      const star = event.currentTarget;
      const rect = star.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const clickPosition = x / width;

      let fraction = 1;
      if (clickPosition <= 0.25) fraction = 0.25;
      else if (clickPosition <= 0.5) fraction = 0.5;
      else if (clickPosition <= 0.75) fraction = 0.75;

      return index + fraction;
    },
    []
  );

  const handleStarClick = React.useCallback(
    (index: number, event: React.MouseEvent<SVGElement>) => {
      if (readOnly || !onChange) return;
      const newRating = calculateRating(index, event);
      onChange(newRating);
    },
    [readOnly, onChange, calculateRating]
  );

  const handleStarHover = React.useCallback(
    (index: number, event: React.MouseEvent<SVGElement>) => {
      if (!readOnly) {
        const previewRating = calculateRating(index, event);
        setHoverRating(previewRating);
      }
    },
    [readOnly, calculateRating]
  );

  const handleMouseLeave = React.useCallback(() => {
    if (!readOnly) {
      setHoverRating(null);
    }
  }, [readOnly]);

  const getStarStyle = React.useCallback(
    (index: number) => {
      const ratingToUse =
        !readOnly && hoverRating !== null ? hoverRating : value;
      const difference = ratingToUse - index;

      if (difference <= 0) return { color: "gray", fill: "transparent" };
      if (difference >= 1) return { color: color, fill: color };

      return {
        color: color,
        fill: `url(#${starIds[index]})`,
      } as React.CSSProperties;
    },
    [readOnly, hoverRating, value, color, starIds]
  );

  const renderGradientDefs = () => {
    const ratingToUse = !readOnly && hoverRating !== null ? hoverRating : value;
    const partialStarIndex = Math.floor(ratingToUse);
    const partialFill = (ratingToUse % 1) * 100;

    // Only create gradient for partial star
    if (partialFill > 0) {
      return (
        <linearGradient
          id={starIds[partialStarIndex]}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset={`${partialFill}%`} stopColor={color} />
          <stop offset={`${partialFill}%`} stopColor="transparent" />
        </linearGradient>
      );
    }
    return null;
  };

  const renderStars = () => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const style = getStarStyle(index);
      return (
        <StarIcon
          key={starIds[index]}
          index={index}
          style={style}
          iconSize={iconSize}
          onClick={(e) => handleStarClick(index, e)}
          onMouseMove={(e) => handleStarHover(index, e)}
          isInteractive={!readOnly}
        />
      );
    });
  };

  return (
    <div
      className={cn("relative flex items-center gap-x-0.5", className)}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>{renderGradientDefs()}</defs>
      </svg>
      {renderStars()}
    </div>
  );
};

export default StarRating_Fractions;
