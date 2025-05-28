"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { type EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft,
  ArrowRight,
  MinusCircle,
  PlusCircle,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

type ThumbPropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  imgUrl: string;
  title?: string;
};

const getAspectRatioClass = (ratio?: string) => {
  switch (ratio) {
    case "square":
      return "aspect-square"; // 1:1
    case "video":
      return "aspect-video"; // 16:9
    case "wide":
      return "aspect-4/3"; // 4:3
    case "auto":
      return "aspect-auto"; // Natural image aspect ratio
    default:
      return "aspect-4/3"; // Default 4:3
  }
};

const ImageContainer: React.FC<{
  image: { url: string; title?: string };
  alt: string;
  fit?: "cover" | "contain" | "fill";
  aspectRatio?: string;
  showImageControls?: boolean;
  classNameImage?: string;
  classNameThumbnail?: string;
}> = ({
  alt,
  aspectRatio,
  classNameImage,
  classNameThumbnail,
  fit = "cover",
  image,
  showImageControls,
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg bg-gray-100",
        getAspectRatioClass(aspectRatio)
      )}
    >
      <Dialog>
        <DialogTrigger asChild>
          <div className={`cursor-pointer`}>
            <img
              src={image.url}
              alt={image.title || alt}
              width={400}
              height={600}
              className={cn(
                "absolute inset-0 h-full w-full",
                fit === "contain" && "object-contain",
                fit === "cover" && "object-cover",
                fit === "fill" && "object-fill",
                classNameThumbnail
              )}
            />
          </div>
        </DialogTrigger>

        <DialogPortal>
          <DialogOverlay className="fixed inset-0 z-50 bg-black/80" />
          <DialogContent className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center p-0">
            <DialogTitle className="sr-only">
              {image.title || "Image"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {image.title || "Image"}
            </DialogDescription>

            <div className="relative flex h-screen w-screen items-center justify-center">
              <TransformWrapper
                initialScale={1}
                initialPositionX={0}
                initialPositionY={0}
              >
                {({ zoomIn, zoomOut }) => (
                  <>
                    <TransformComponent>
                      {/* You can swap this with your preferred image optization technique, like using  next/image */}
                      <img
                        src={image.url}
                        alt={image.title || "Full size"}
                        className={cn(
                          "max-h-[90vh] max-w-[90vw] object-contain",
                          classNameImage
                        )}
                      />
                    </TransformComponent>
                    {showImageControls && (
                      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                        <button
                          onClick={() => zoomOut()}
                          className="cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Zoom out"
                        >
                          <MinusCircle className="size-6" />
                        </button>
                        <button
                          onClick={() => zoomIn()}
                          className="cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                          aria-label="Zoom in"
                        >
                          <PlusCircle className="size-6" />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </TransformWrapper>
              <DialogClose asChild>
                <button
                  className="absolute top-4 right-4 z-10 cursor-pointer rounded-full border bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                  aria-label="Close"
                >
                  <X className="size-6" />
                </button>
              </DialogClose>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

const Thumb: React.FC<ThumbPropType> = (props) => {
  const { imgUrl, index, onClick, selected, title } = props;

  return (
    <div
      className={cn(
        "transition-opacity duration-200",
        selected ? "opacity-100" : "opacity-50 hover:opacity-70",
        // Horizontal layout (top/bottom)
        "group-[.thumbs-horizontal]:min-w-0 group-[.thumbs-horizontal]:flex-[0_0_22%] group-[.thumbs-horizontal]:pl-3 sm:group-[.thumbs-horizontal]:flex-[0_0_15%]",
        // Vertical layout (left/right)
        "group-[.thumbs-vertical]:w-full group-[.thumbs-vertical]:pt-3"
      )}
    >
      <button
        onClick={onClick}
        className="relative w-full cursor-pointer touch-manipulation appearance-none overflow-hidden rounded-md border-0 bg-transparent p-0"
        type="button"
      >
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-lg bg-gray-100",
            getAspectRatioClass("square")
          )}
        >
          <img
            src={imgUrl}
            alt={title || `Thumbnail ${index + 1}`}
            width={400}
            height={600}
            className={cn("h-full w-full object-cover")}
          />
        </div>
      </button>
    </div>
  );
};

type CarouselImage = {
  title?: string;
  url: string;
};

type CarouselImages = CarouselImage[];
interface ImageCarousel_BasicProps
  extends React.HTMLAttributes<HTMLDivElement> {
  images: CarouselImages;
  opts?: EmblaOptionsType;
  showCarouselControls?: boolean;
  showImageControls?: boolean;
  imageFit?: "cover" | "contain" | "fill";
  aspectRatio?: "square" | "video" | "wide" | "auto";
  thumbPosition?: "bottom" | "top" | "left" | "right";
  showThumbs?: boolean;
  // Controlled mode props
  selectedIndex?: number;
  onSlideChange?: (index: number) => void;
  classNameImage?: string;
  classNameThumbnail?: string;
}

const ImageCarousel_Basic: React.FC<ImageCarousel_BasicProps> = ({
  aspectRatio = "wide",
  className,
  classNameImage,
  classNameThumbnail,
  imageFit = "contain",
  images,
  onSlideChange,
  opts,
  // Controlled mode props
  selectedIndex: controlledIndex,
  showCarouselControls = true,
  showImageControls = true,
  showThumbs = true,
  thumbPosition = "bottom",
  ...props
}) => {
  const isControlled = controlledIndex !== undefined;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...opts,
    axis: "x",
  });

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel(
    showThumbs
      ? {
          axis:
            thumbPosition === "left" || thumbPosition === "right" ? "y" : "x",
          containScroll: "keepSnaps",
          dragFree: true,
        }
      : undefined
  );

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi || !showThumbs || !emblaThumbsApi) return;

      if (isControlled && onSlideChange) {
        onSlideChange(index);
      } else {
        emblaApi.scrollTo(index);
        emblaThumbsApi.scrollTo(index);
      }
    },
    [emblaApi, emblaThumbsApi, showThumbs, isControlled, onSlideChange]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [internalSelectedIndex, setInternalSelectedIndex] = useState(0);

  // Use either controlled or internal state
  const currentIndex = isControlled ? controlledIndex : internalSelectedIndex;

  const scrollPrev = useCallback(() => {
    if (isControlled && onSlideChange) {
      const prevIndex = Math.max(0, currentIndex - 1);
      onSlideChange(prevIndex);
    } else if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, isControlled, onSlideChange, currentIndex]);

  const scrollNext = useCallback(() => {
    if (isControlled && onSlideChange && images) {
      const nextIndex = Math.min(images.length - 1, currentIndex + 1);
      onSlideChange(nextIndex);
    } else if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, isControlled, onSlideChange, currentIndex, images]);

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
    if (!emblaApi) return;

    const selectedSlideIndex = emblaApi.selectedScrollSnap();
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());

    if (!isControlled) {
      setInternalSelectedIndex(selectedSlideIndex);
    } else if (onSlideChange && selectedSlideIndex !== controlledIndex) {
      onSlideChange(selectedSlideIndex);
    }

    if (showThumbs && emblaThumbsApi) {
      emblaThumbsApi.scrollTo(selectedSlideIndex);
    }
  }, [
    emblaApi,
    emblaThumbsApi,
    showThumbs,
    isControlled,
    onSlideChange,
    controlledIndex,
  ]);

  // Effect for controlled mode to update carousel position
  useEffect(() => {
    if (
      isControlled &&
      emblaApi &&
      emblaApi.selectedScrollSnap() !== controlledIndex
    ) {
      emblaApi.scrollTo(controlledIndex);
      if (showThumbs && emblaThumbsApi) {
        emblaThumbsApi.scrollTo(controlledIndex);
      }
    }
  }, [controlledIndex, emblaApi, emblaThumbsApi, isControlled, showThumbs]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("reInit", onSelect);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div
      className={cn(
        "relative w-full max-w-3xl",
        {
          "flex-row-reverse": showThumbs && thumbPosition === "left",
          "flex gap-4":
            showThumbs &&
            (thumbPosition === "left" || thumbPosition === "right"),
        },
        className
      )}
      role="region"
      aria-roledescription="carousel"
      onKeyDownCapture={handleKeyDown}
      {...props}
    >
      {showThumbs && thumbPosition === "top" && (
        <div className="mb-4">
          <div className="overflow-hidden" ref={emblaThumbsRef}>
            <div className="thumbs-horizontal group -ml-3 flex">
              {images?.map((image, index) => (
                <Thumb
                  key={index}
                  onClick={() => onThumbClick(index)}
                  selected={index === currentIndex}
                  index={index}
                  imgUrl={image.url}
                  title={image.title}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={cn(
          "relative",
          showThumbs &&
            (thumbPosition === "left" || thumbPosition === "right") &&
            "flex-[1_1_75%]"
        )}
        aria-label="Image carousel controls"
      >
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
                  showImageControls={showImageControls}
                  classNameImage={classNameImage}
                  classNameThumbnail={classNameThumbnail}
                />
              </div>
            ))}
          </div>
        </div>

        {showCarouselControls && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 hover:bg-background dark:bg-background/80 dark:hover:bg-background absolute top-1/2 left-[2%] z-10 h-8 w-8 -translate-y-1/2 rounded-full backdrop-blur-xs disabled:opacity-50"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 hover:bg-background dark:bg-background/80 dark:hover:bg-background absolute top-1/2 right-[2%] z-10 h-8 w-8 -translate-y-1/2 rounded-full backdrop-blur-xs disabled:opacity-50"
              disabled={!canScrollNext}
              onClick={scrollNext}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </>
        )}
      </div>

      {showThumbs &&
        (thumbPosition === "bottom" ||
          thumbPosition === "left" ||
          thumbPosition === "right") && (
          <div
            className={cn(
              thumbPosition === "left" || thumbPosition === "right"
                ? "relative flex-[0_0_20%]"
                : "mt-4"
            )}
          >
            <div
              className={cn(
                "overflow-hidden",
                (thumbPosition === "left" || thumbPosition === "right") &&
                  "absolute inset-0"
              )}
              ref={emblaThumbsRef}
            >
              <div
                className={cn(
                  thumbPosition === "bottom"
                    ? "thumbs-horizontal group -ml-3 flex"
                    : "thumbs-vertical group -mt-3 flex h-full flex-col"
                )}
              >
                {images?.map((image, index) => (
                  <Thumb
                    key={index}
                    onClick={() => onThumbClick(index)}
                    selected={index === currentIndex}
                    index={index}
                    imgUrl={image.url}
                    title={image.title}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default ImageCarousel_Basic;
export type { CarouselImage, CarouselImages };
