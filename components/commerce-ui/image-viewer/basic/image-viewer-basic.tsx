"use client";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const DEFAULT_PLACEHOLDER_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg";

interface ImageViewerProps {
  className?: string;
  classNameImageViewer?: string;
  classNameThumbnailViewer?: string;
  imageTitle?: string;
  imageUrl: string;
  thumbnailUrl?: string;
  placeholderUrl?: string;
  Placeholder?: React.ComponentType<{ className?: string }>;
}

const ImageViewer_Basic = ({
  className,
  classNameImageViewer,
  classNameThumbnailViewer,
  imageTitle,
  imageUrl,
  thumbnailUrl,
  placeholderUrl = DEFAULT_PLACEHOLDER_URL,
}: ImageViewerProps) => {
  const handleImgError = (event: React.SyntheticEvent<HTMLImageElement>) => {
    console.error("Image failed to load", event.currentTarget.src);
    event.currentTarget.src = placeholderUrl;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("cursor-pointer", className)}>
          {/* You can swap this with your preferred image optization technique, like using  next/image */}
          <img
            src={thumbnailUrl || imageUrl}
            alt={`${imageTitle ?? "Image"} - Preview`}
            width="100%"
            height={300}
            className={cn(
              "rounded-lg object-cover transition-opacity hover:opacity-90",
              classNameThumbnailViewer
            )}
            onError={handleImgError}
          />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/80" />
        <DialogContent className="bg-background fixed inset-0 z-50 flex flex-col items-center justify-center p-0">
          <DialogTitle className="sr-only">{imageTitle}</DialogTitle>
          <div className="relative flex h-screen w-screen items-center justify-center">
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              {() => (
                <>
                  <TransformComponent>
                    {/* You can swap this with your preferred image optization technique, like using  next/image */}
                    <img
                      src={imageUrl}
                      alt={`${imageTitle ?? "Image"} - Full`}
                      className={classNameImageViewer}
                      onError={handleImgError}
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
            <DialogClose asChild>
              <button
                className="absolute top-4 right-4 z-10 cursor-pointer rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                aria-label="Close"
              >
                <X className="size-6" />
              </button>
            </DialogClose>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ImageViewer_Basic;
