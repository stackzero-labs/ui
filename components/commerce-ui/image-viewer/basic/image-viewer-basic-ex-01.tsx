"use client";

import { type Rating } from "@/components/commerce-ui/like-rating/basic/like-rating-basic";
import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import { useState } from "react";

const EXAMPLE_IMAGE_URL = "https://picsum.photos/1080/900";
const EXAMPLE_THUMBNAIL_URL = "https://picsum.photos/300/300";

export default function ImageViewer_Basic_Ex_01() {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Example with both thumbnail and full image */}
      <ImageViewer
        thumbnailUrl={EXAMPLE_THUMBNAIL_URL}
        imageUrl={EXAMPLE_IMAGE_URL}
        className="max-w-[300px]"
      />

      {/* Example using the same image for thumbnail and full view */}
      {/* <ImageViewer imageUrl={EXAMPLE_IMAGE_URL} className="max-w-[300px]" /> */}
    </div>
  );
}
