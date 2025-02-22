"use client";
import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";

const EXAMPLE_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";
const EXAMPLE_THUMBNAIL_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

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
