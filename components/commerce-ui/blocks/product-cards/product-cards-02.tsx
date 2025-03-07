"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import StarRatingFractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCard_02Props {
  imageUrl?: string;
  discount?: string | null;
  title?: string;
  rating?: number;
  reviewCount?: number;
  description?: string;
  inStock?: boolean;
  stockCount?: number;
  hasShipping?: boolean;
  shippingText?: string;
  price?: number;
  prefix?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
}

function ProductCard_02({
  imageUrl = DEFAULT_IMAGE_URL,
  discount = "20% OFF",
  title = "AeroTune X9",
  rating = 4.45,
  reviewCount = 362,
  description = "Experience next-level audio with the AeroTune X9, the world's most advanced wireless headset designed for audiophiles, gamers, and music lovers alike. With QuantumBass™ technology, every beat, bass drop, and whisper is delivered in studio-quality precision.",
  inStock = true,
  stockCount = 256,
  hasShipping = true,
  shippingText = "Free Shipping",
  price = 39.59,
  prefix = "$",
  onAddToCart = () => {},
  onBuyNow = () => {},
}: ProductCard_02Props = {}) {
  return (
    <div className="bg-card grid max-w-screen-lg grid-cols-4 gap-6 rounded-lg border p-4">
      <div className="relative col-span-4 w-full md:col-span-2">
        {discount && (
          <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-purple-500/80 p-2">
            <p className="text-xs font-semibold">{discount}</p>
          </div>
        )}
        <ImageViewer imageUrl={imageUrl} />
      </div>

      <div className="col-span-4 flex flex-col gap-6 md:col-span-2">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">{title}</p>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <StarRatingFractions readOnly value={rating} />
            <p className="text-lg">({rating})</p>
            <p className="text-muted-foreground">{reviewCount} reviews</p>
          </div>
          <p className="text-muted-foreground text-base">{description}</p>
        </div>

        <div className="flex flex-col gap-2">
          {inStock ? (
            <div className="flex flex-row items-center gap-2">
              <div className="w-fit rounded-lg border border-green-500 bg-green-500/30 px-2 py-1 text-sm font-semibold text-green-500 uppercase dark:border-green-300 dark:text-green-300">
                In Stock
              </div>
              <p className="text-muted-foreground">+{stockCount} in stocks</p>
            </div>
          ) : (
            <div className="w-fit rounded-lg border border-red-500 bg-red-500/30 px-2 py-1 text-sm font-semibold text-red-500 uppercase dark:border-red-300 dark:text-red-300">
              Out of Stock
            </div>
          )}

          {hasShipping && (
            <p>
              <Link
                href="#"
                className="semibold underline underline-offset-4 opacity-80 hover:opacity-100"
              >
                {shippingText}
              </Link>{" "}
              on all orders
            </p>
          )}
        </div>

        <PriceFormat
          prefix={prefix}
          value={price}
          className="text-4xl font-semibold"
        />

        <div className="flex flex-row flex-wrap gap-4">
          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-fit"
            onClick={onAddToCart}
          >
            Add to cart
          </Button>
          <Button size="lg" className="w-full md:w-fit" onClick={onBuyNow}>
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_02;
