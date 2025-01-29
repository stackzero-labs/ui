"use client";

import React, { useState, useEffect, useCallback } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

type ThumbProps = {
  selected: boolean;
  index: number;
  onClick: () => void;
};

const Thumb: React.FC<ThumbProps> = ({ selected, index, onClick }) => {
  return (
    <div className="min-w-0 flex-[0_0_22%] pl-3 sm:flex-[0_0_15%]">
      <button
        onClick={onClick}
        type="button"
        className={`flex h-24 w-full cursor-pointer appearance-none items-center justify-center rounded-3xl border-2 border-gray-300 text-lg font-semibold ${
          selected ? "text-gray-900" : "text-gray-500"
        }`}
      >
        {index + 1}
      </button>
    </div>
  );
};

type ImageCarouselProps = {
  slides: number[];
  options?: EmblaOptionsType;
};

function ImageCarousel_01({
  slides = [1, 2, 3, 4, 5],
  options,
}: ImageCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="mx-auto max-w-3xl">
      {/* Main Carousel */}
      <div className="overflow-hidden" ref={emblaMainRef}>
        <div className="-ml-4 flex touch-pan-y">
          {slides?.map((index) => (
            <div
              className="min-w-0 flex-[0_0_100%] translate-x-0 translate-y-0 transform pl-4"
              key={index}
            >
              <div className="h-76 flex items-center justify-center rounded-3xl border-2 border-gray-300 text-4xl font-semibold">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="-ml-3 flex flex-row">
            {slides?.map((index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel_01;
