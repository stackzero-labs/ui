import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageViewerProps {
  className?: string;
  thumbnailUrl?: string;
  imageUrl: string;
}

const ImageViewer_Basic = ({
  className,
  thumbnailUrl,
  imageUrl,
}: ImageViewerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={`cursor-pointer ${className || ""}`}>
          <Image
            unoptimized
            src={thumbnailUrl || imageUrl}
            alt="Preview"
            width={300}
            height={300}
            className="rounded-lg object-cover transition-opacity hover:opacity-90"
          />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80" />
        <DialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 bg-background fixed top-1/2 left-1/2 z-50 w-[calc(100vw-2rem)] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 p-0 sm:w-auto">
          <DialogTitle className="sr-only">Image</DialogTitle>
          <div className="relative flex min-h-[300px] items-center justify-center">
            <Image
              unoptimized
              src={imageUrl}
              alt="Full size"
              width={1920}
              height={1080}
              className="h-auto max-h-[calc(100vh-4rem)] w-full object-contain"
              priority
            />
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
