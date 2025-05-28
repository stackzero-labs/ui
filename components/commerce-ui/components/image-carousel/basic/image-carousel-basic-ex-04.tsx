"use client";

import { useState } from "react";
import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/components/image-carousel/basic/image-carousel-basic";

const images: CarouselImages = [
  {
    title: "Speaker 1",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
  },
  {
    title: "Speaker 2",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
  },
  {
    title: "Speaker 3",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
  },
];

export default function ImageCarousel_Basic_Ex_04() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="space-y-8">
      <div>
        <div className="mb-4 flex w-full flex-wrap items-center justify-between gap-2">
          <button
            className="cursor-pointer rounded border px-3 py-1"
            onClick={() => setSelectedIndex(Math.max(0, selectedIndex - 1))}
          >
            Previous
          </button>
          <span className="font-mono">Current Slide: {selectedIndex + 1}</span>
          <button
            className="cursor-pointer rounded border px-3 py-1"
            onClick={() =>
              setSelectedIndex(Math.min(images.length - 1, selectedIndex + 1))
            }
          >
            Next
          </button>
        </div>
        <ImageCarouselBasic
          images={images}
          imageFit="contain"
          selectedIndex={selectedIndex}
          onSlideChange={setSelectedIndex}
        />
      </div>
    </div>
  );
}
