"use client";
import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";

const EXAMPLE_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg";
const EXAMPLE_THUMBNAIL_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg";

export default function ImageViewer_Basic_Ex_02() {
  return (
    <div className="flex w-full flex-col gap-8">
      <div>
        <div className="flex flex-col gap-6 md:grid-cols-3">
          {/* Tall thumbnail - 300px height */}
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">Tall (300px)</p>
            <ImageViewer
              thumbnailUrl={EXAMPLE_THUMBNAIL_URL}
              imageUrl={EXAMPLE_IMAGE_URL}
              classNameThumbnailViewer="h-[300px]"
              imageTitle="Tall Thumbnail Example"
            />
          </div>

          {/* Medium thumbnail - 200px height */}
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">Medium (200px)</p>
            <ImageViewer
              thumbnailUrl={EXAMPLE_THUMBNAIL_URL}
              imageUrl={EXAMPLE_IMAGE_URL}
              classNameThumbnailViewer="h-[200px]"
              imageTitle="Medium Thumbnail Example"
            />
          </div>

          {/* Small thumbnail - 100px height */}
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-xs">Small (100px)</p>
            <ImageViewer
              thumbnailUrl={EXAMPLE_THUMBNAIL_URL}
              imageUrl={EXAMPLE_IMAGE_URL}
              classNameThumbnailViewer="h-[100px]"
              imageTitle="Small Thumbnail Example"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
