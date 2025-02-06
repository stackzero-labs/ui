import ImageCarousel_Horizontal from "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal";
import PriceFormat_Basic from "@/components/commerce-ui/price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StarRatingFractions from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";

const images = [
  "https://prd.place/400/600?id=37",
  "https://prd.place/400/600?id=38",
  "https://prd.place/400/600?id=39",
  "https://prd.place/800/1200?id=40",
  "https://prd.place/800/300?id=41",
];

function ProductCard_02() {
  return (
    <div className="bg-background grid max-w-screen-lg grid-cols-4 gap-6 rounded-lg border p-4">
      <div className="relative col-span-4 w-full md:col-span-2">
        <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-purple-500/80 p-2">
          <p className="text-xs font-semibold">20% OFF</p>
        </div>
        <ImageCarousel_Horizontal
          images={images}
          imageFit="contain"
          showThumbs={true}
          thumbPosition="bottom"
          showControls={true}
        />
      </div>

      <div className="col-span-4 flex flex-col gap-6 md:col-span-2">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-semibold">AeroTune X9</p>
          <div className="flex flex-row flex-wrap items-center gap-2">
            <StarRatingFractions readOnly value={4.45} />
            <p className="text-lg">(4.45)</p>
            <p className="text-muted-foreground">362 reviews</p>
          </div>
          <p className="text-muted-foreground text-base">
            Experience next-level audio with the AeroTune X9, the world’s most
            advanced wireless headset designed for audiophiles, gamers, and
            music lovers alike. With QuantumBass™ technology, every beat, bass
            drop, and whisper is delivered in studio-quality precision.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="w-fit rounded-lg border border-green-500 bg-green-500/30 px-2 py-1 text-sm font-semibold text-green-500 uppercase dark:border-green-300 dark:text-green-300">
              In Stock
            </div>
            <p className="text-muted-foreground">+256 in stocks</p>
          </div>

          <p>
            <Link
              href="#"
              className="semibold underline underline-offset-4 opacity-80 hover:opacity-100"
            >
              Free Shipping
            </Link>{" "}
            on all orders
          </p>
        </div>

        <PriceFormat_Basic
          prefix="$"
          value={39.59}
          className="text-4xl font-semibold"
        />

        <div className="flex flex-row flex-wrap gap-4">
          <Button variant="outline" size="lg" className="w-full md:w-fit">
            Add to cart
          </Button>
          <Button size="lg" className="w-full md:w-fit">
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_02;
