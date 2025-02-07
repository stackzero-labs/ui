"use client";
import ImageViewer from "@/components/commerce-ui/image-viewer/motion/image-viewer-motion";

const EXAMPLE_IMAGE_URL = "https://picsum.photos/1080/900";
const EXAMPLE_THUMBNAIL_URL = "https://picsum.photos/300/300";

export default function ImageViewer_Basic_Ex_01() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <ImageViewer
        thumbnailUrl={EXAMPLE_THUMBNAIL_URL}
        imageUrl={EXAMPLE_IMAGE_URL}
        className="max-w-[300px]"
      />
    </div>
  );
}
