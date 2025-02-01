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

const DEFAULT_COLORS = {
  angry: "red",
  frown: "orange",
  laugh: "green",
  meh: "yellow",
  smile: "lightgreen",
};

interface FaceRatingBasicProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  iconSize?: number;
}

const FaceRating_Basic = ({
  className,
  iconSize = 24,
  onChange,
  value,
}: FaceRatingBasicProps) => {
  const handleIconClick = (index: number) => {
    const newRating = index + 1;
    onChange(newRating);
  };

  const icons = [
    <AngryIcon
      key="angry"
      size={iconSize}
      color={value === 1 ? DEFAULT_COLORS.angry : "gray"}
      onClick={() => handleIconClick(0)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <FrownIcon
      key="frown"
      size={iconSize}
      color={value === 2 ? DEFAULT_COLORS.frown : "gray"}
      onClick={() => handleIconClick(1)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <MehIcon
      key="meh"
      size={iconSize}
      color={value === 3 ? DEFAULT_COLORS.meh : "gray"}
      onClick={() => handleIconClick(2)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <SmileIcon
      key="smile"
      size={iconSize}
      color={value === 4 ? DEFAULT_COLORS.smile : "gray"}
      onClick={() => handleIconClick(3)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <LaughIcon
      key="laugh"
      size={iconSize}
      color={value === 5 ? DEFAULT_COLORS.laugh : "gray"}
      onClick={() => handleIconClick(4)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
  ];

  return (
    <div className={cn("flex items-center gap-x-0.5", className)}>{icons}</div>
  );
};

export default FaceRating_Basic;
