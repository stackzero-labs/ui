"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCardProps {
  imageUrl?: string;
  discount?: string | null;
  title?: string;
  description?: string;
  price?: number;
  prefix?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

function ProductCard_01({
  imageUrl = DEFAULT_IMAGE_URL,
  discount = "20% OFF",
  title = "Wireless headset",
  description = "Shipped in 2-3 days",
  price = 98.96,
  prefix = "$",
  onAddToCart = () => {},
  onBuyNow = () => {},
}: ProductCardProps = {}) {
  return (
    <>
      <div className="flex w-[350px] flex-col gap-4 rounded-lg border p-2">
        <div className="relative w-full">
          {discount && (
            <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-teal-500/80 p-2">
              <p className="text-xs font-semibold">{discount}</p>
            </div>
          )}
          <ImageViewer imageUrl={imageUrl} />
        </div>

        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <PriceFormat
          prefix={prefix}
          value={price}
          className="text-2xl font-semibold"
        />

        <div className="flex flex-row gap-4">
          <Button variant="outline" onClick={onAddToCart}>
            Add to cart
          </Button>
          <Button onClick={onBuyNow}>Buy now</Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard_01;
