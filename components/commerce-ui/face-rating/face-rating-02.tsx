"use client";

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
  angry: "#bbf7d0",
  frown: "#86efac",
  meh: "#4ade80",
  smile: "#22c55e",
  laugh: "#16a34a",
};

const FaceRating_02 = () => {
  const [rating, setRating] = React.useState(5);

  const handleIconClick = (index: number) => {
    const newRating = (index + 1) * (MAX_RATING / 5);
    setRating(newRating);
  };

  const filledIcons = Math.round((rating / MAX_RATING) * 5);

  const icons = [
    <AngryIcon
      key="angry"
      size={ICON_SIZE}
      color={filledIcons >= 1 ? DEFAULT_COLORS.angry : "gray"}
      onClick={() => handleIconClick(0)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <FrownIcon
      key="frown"
      size={ICON_SIZE}
      color={filledIcons >= 2 ? DEFAULT_COLORS.frown : "gray"}
      onClick={() => handleIconClick(1)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <MehIcon
      key="meh"
      size={ICON_SIZE}
      color={filledIcons >= 3 ? DEFAULT_COLORS.meh : "gray"}
      onClick={() => handleIconClick(2)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <SmileIcon
      key="smile"
      size={ICON_SIZE}
      color={filledIcons >= 4 ? DEFAULT_COLORS.smile : "gray"}
      onClick={() => handleIconClick(3)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
    <LaughIcon
      key="laugh"
      size={ICON_SIZE}
      color={filledIcons >= 5 ? DEFAULT_COLORS.laugh : "gray"}
      onClick={() => handleIconClick(4)}
      className="transition-transform duration-200 hover:scale-110"
      style={{ cursor: "pointer" }}
    />,
  ];

  return <div className="flex items-center gap-x-0.5">{icons}</div>;
};

export default FaceRating_02;
