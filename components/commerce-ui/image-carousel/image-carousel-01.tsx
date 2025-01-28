"use client";

import React, { useState, useCallback, useEffect } from "react";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const PLACEHOLDER_IMAGES = [
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
];

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  imgUrl: string;
};

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, index, onClick, imgUrl } = props;

  return (
    <div
      className={cn(
        "min-w-0 flex-[0_0_22%] pl-3 sm:flex-[0_0_15%]",
        selected ? "opacity-100" : "opacity-50"
      )}
    >
      <button
        onClick={onClick}
        className="relative h-12 w-12 cursor-pointer touch-manipulation appearance-none overflow-hidden rounded-md border-0 bg-transparent p-0"
        type="button"
      >
        <img
          src={imgUrl}
          alt={`Thumbnail ${index + 1}`}
          className="h-full w-full object-cover"
        />
      </button>
    </div>
  );
};

interface ImageCarousel_01Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  opts?: EmblaOptionsType;
  showControls?: boolean;
}

const ImageCarousel_01: React.FC<ImageCarousel_01Props> = ({
  images = PLACEHOLDER_IMAGES,
  opts,
  showControls = true,
  className,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: "x",
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
    axis: "x",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
      emblaThumbsApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaApi || !emblaThumbsApi) return;

    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, emblaThumbsApi, onSelect]);

  return (
    <div
      className={cn("relative w-full max-w-xs", className)}
      role="region"
      aria-roledescription="carousel"
      onKeyDownCapture={handleKeyDown}
      {...props}
    >
      <div ref={emblaRef} className="overflow-hidden">
        <div className="-ml-4 flex">
          {images?.map((image, index) => (
            <div
              key={index}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
              role="group"
              aria-roledescription="slide"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-fit w-fit object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-12 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute -right-12 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full"
            disabled={!canScrollNext}
            onClick={scrollNext}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
          </Button>
        </>
      )}

      <div className="mt-3">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="-ml-3 flex gap-2">
            {images?.map((image, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                imgUrl={image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel_01;
