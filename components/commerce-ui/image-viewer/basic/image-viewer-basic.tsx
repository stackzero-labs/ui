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

interface ImageViewerProps {
  className?: string;
  classNameImageViewer?: string;
  classNameThumbnailViewer?: string;
  imageTitle?: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

const ImageViewer_Basic = ({
  className,
  classNameImageViewer,
  classNameThumbnailViewer,
  imageTitle,
  imageUrl,
  thumbnailUrl,
}: ImageViewerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={cn("cursor-pointer", className)}>
          {/* You can swap this with your preferred image optization technique, like using  next/image */}
          <img
            src={thumbnailUrl || imageUrl}
            alt={`${imageTitle} - Preview`}
            width={300}
            height={300}
            className={cn(
              "rounded-lg object-cover transition-opacity hover:opacity-90",
              classNameThumbnailViewer
            )}
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
                      alt="Full size"
                      className={classNameImageViewer}
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
