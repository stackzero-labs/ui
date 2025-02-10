"use client";
import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";

const EXAMPLE_IMAGE_URL = "https://picsum.photos/2080/1920";
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
