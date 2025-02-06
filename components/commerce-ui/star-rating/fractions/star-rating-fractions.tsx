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
  color = "#FFD700",
  iconSize = 24,
  maxStars = 5,
  onChange,
  readOnly = false,
  value,
}: StarRatingBasicProps) => {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null);

  // Generate a unique ID for this component instance
  const componentId = React.useRef(
    `star-rating-${Math.random().toString(36).substr(2, 9)}`
  );

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
        fill: `url(#${componentId.current}-star-fill-${index})`,
      } as React.CSSProperties;
    },
    [readOnly, hoverRating, value, color]
  );

  const gradientDefs = React.useMemo(() => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const ratingToUse =
        !readOnly && hoverRating !== null ? hoverRating : value;
      const difference = ratingToUse - index;
      let percentage = 0;

      if (difference > 0) {
        if (difference >= 1) {
          percentage = 100;
        } else {
          percentage = difference * 100;
        }
      }

      return (
        <linearGradient
          key={index}
          id={`${componentId.current}-star-fill-${index}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset={`${percentage}%`} stopColor={color} />
          <stop offset={`${percentage}%`} stopColor="transparent" />
        </linearGradient>
      );
    });
  }, [maxStars, readOnly, hoverRating, value, color]);

  const stars = React.useMemo(() => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const style = getStarStyle(index);
      return (
        <StarIcon
          key={index}
          index={index}
          style={style}
          iconSize={iconSize}
          onClick={(e) => handleStarClick(index, e)}
          onMouseMove={(e) => handleStarHover(index, e)}
          isInteractive={!readOnly}
        />
      );
    });
  }, [
    maxStars,
    getStarStyle,
    iconSize,
    handleStarClick,
    handleStarHover,
    readOnly,
  ]);

  return (
    <div
      className={cn("relative flex items-center gap-x-0.5", className)}
      onMouseLeave={handleMouseLeave}
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>{gradientDefs}</defs>
      </svg>
      {stars}
    </div>
  );
};

export default React.memo(StarRating_Fractions);
