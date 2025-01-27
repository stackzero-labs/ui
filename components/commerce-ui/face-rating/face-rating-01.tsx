"use client";

import { Button } from "@/components/ui/button";
import {
  AngryIcon,
  FrownIcon,
  LaughIcon,
  MehIcon,
  SmileIcon,
} from "lucide-react";
import * as React from "react";

const MAX_RATING = 5;
const ICON_SIZE = 24;
const DEFAULT_COLORS = {
  angry: "red",
  frown: "orange",
  meh: "yellow",
  smile: "lightgreen",
  laugh: "green",
};

const FaceRating_01 = () => {
  const [rating, setRating] = React.useState(3);

  const handleIconClick = (index: number) => {
    const newRating = (index + 1) * (MAX_RATING / 5);
    setRating(newRating);
  };

  const icons = [
    <AngryIcon
      key="angry"
      size={ICON_SIZE}
      color={rating === 1 ? DEFAULT_COLORS.angry : "gray"}
      onClick={() => handleIconClick(0)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <FrownIcon
      key="frown"
      size={ICON_SIZE}
      color={rating === 2 ? DEFAULT_COLORS.frown : "gray"}
      onClick={() => handleIconClick(1)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <MehIcon
      key="meh"
      size={ICON_SIZE}
      color={rating === 3 ? DEFAULT_COLORS.meh : "gray"}
      onClick={() => handleIconClick(2)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <SmileIcon
      key="smile"
      size={ICON_SIZE}
      color={rating === 4 ? DEFAULT_COLORS.smile : "gray"}
      onClick={() => handleIconClick(3)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <LaughIcon
      key="laugh"
      size={ICON_SIZE}
      color={rating === 5 ? DEFAULT_COLORS.laugh : "gray"}
      onClick={() => handleIconClick(4)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
  ];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-x-0.5">{icons}</div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {rating.toFixed(2)}{" "}
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          out of{" "}
        </span>
        {MAX_RATING}
      </p>
    </div>
  );
};

export default FaceRating_01;
