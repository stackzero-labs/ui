"use client";

import { cn } from "@/lib/utils";
import {
  AngryIcon,
  FrownIcon,
  LaughIcon,
  MehIcon,
  SmileIcon,
} from "lucide-react";
import * as React from "react";
import tinycolor from "tinycolor2";

interface FaceRatingGradientProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  iconSize?: number;
  baseColor?: string;
}

const FaceRating_Gradient = ({
  baseColor = "#22c55e", // Default green color
  className,
  iconSize = 24,
  onChange,
  value,
}: FaceRatingGradientProps) => {
  const generateColorGradient = (baseColor: string, steps: number) => {
    const color = tinycolor(baseColor);
    const hsl = color.toHsl();

    return Array.from({ length: steps }, (_, i) => {
      const lightness = hsl.l - i * 0.1;
      return tinycolor({ ...hsl, l: Math.max(0.2, lightness) }).toHexString();
    }).reverse();
  };

  const colors = generateColorGradient(baseColor, 5);

  const handleIconClick = (index: number) => {
    const newRating = index + 1;
    onChange(newRating);
  };

  const isActive = (index: number) => {
    return index < value;
  };

  const icons = [
    <AngryIcon
      key="angry"
      size={iconSize}
      color={isActive(0) ? colors[0] : "gray"}
      onClick={() => handleIconClick(0)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <FrownIcon
      key="frown"
      size={iconSize}
      color={isActive(1) ? colors[1] : "gray"}
      onClick={() => handleIconClick(1)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <MehIcon
      key="meh"
      size={iconSize}
      color={isActive(2) ? colors[2] : "gray"}
      onClick={() => handleIconClick(2)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <SmileIcon
      key="smile"
      size={iconSize}
      color={isActive(3) ? colors[3] : "gray"}
      onClick={() => handleIconClick(3)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <LaughIcon
      key="laugh"
      size={iconSize}
      color={isActive(4) ? colors[4] : "gray"}
      onClick={() => handleIconClick(4)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
  ];

  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>{icons}</div>
  );
};

export default FaceRating_Gradient;
