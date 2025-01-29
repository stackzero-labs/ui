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

const getAspectRatioClass = (ratio?: string) => {
  switch (ratio) {
    case "square":
      return "aspect-square"; // 1:1
    case "video":
      return "aspect-video"; // 16:9
    case "wide":
      return "aspect-[4/3]"; // 4:3
    case "auto":
      return "aspect-auto"; // Natural image aspect ratio
    default:
      return "aspect-[4/3]"; // Default 4:3
  }
};

const ImageContainer: React.FC<{
  image: string;
  alt: string;
  fit?: "cover" | "contain" | "fill";
  aspectRatio?: string;
}> = ({ image, alt, fit = "cover", aspectRatio }) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-gray-100",
        getAspectRatioClass(aspectRatio)
      )}
    >
      <img
        src={image}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full",
          fit === "contain" && "object-contain",
          fit === "cover" && "object-cover",
          fit === "fill" && "object-fill"
        )}
      />
    </div>
  );
};

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { selected, index, onClick, imgUrl } = props;

  return (
    <div
      className={cn(
        "min-w-0 flex-[0_0_22%] pl-3 transition-opacity duration-200 sm:flex-[0_0_15%]",
        selected ? "opacity-100" : "opacity-50 hover:opacity-70"
      )}
    >
      <button
        onClick={onClick}
        className="relative w-full cursor-pointer touch-manipulation appearance-none overflow-hidden rounded-md border-0 bg-transparent p-0"
        type="button"
      >
        <ImageContainer
          image={imgUrl}
          alt={`Thumbnail ${index + 1}`}
          fit="cover"
          aspectRatio="square"
        />
      </button>
    </div>
  );
};

interface ImageCarousel_01Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  opts?: EmblaOptionsType;
  showControls?: boolean;
  imageFit?: "cover" | "contain" | "fill";
  aspectRatio?: "square" | "video" | "wide" | "auto";
}

const ImageCarousel_01: React.FC<ImageCarousel_01Props> = ({
  images = PLACEHOLDER_IMAGES,
  opts,
  showControls = true,
  className,
  imageFit = "contain",
  aspectRatio = "wide",
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
      className={cn("relative w-full max-w-3xl", className)}
      role="region"
      aria-roledescription="carousel"
      onKeyDownCapture={handleKeyDown}
      {...props}
    >
      <div className="relative" aria-label="Image carousel controls">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="-ml-4 flex">
            {images?.map((image, index) => (
              <div
                key={index}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                role="group"
                aria-roledescription="slide"
              >
                <ImageContainer
                  image={image}
                  alt={`Slide ${index + 1}`}
                  fit={imageFit}
                  aspectRatio={aspectRatio}
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
              className="absolute left-[2%] top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background disabled:opacity-50 dark:bg-background/80 hover:dark:bg-background"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-[2%] top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background disabled:opacity-50 dark:bg-background/80 hover:dark:bg-background"
              disabled={!canScrollNext}
              onClick={scrollNext}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </>
        )}
      </div>

      <div className="mt-4">
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
