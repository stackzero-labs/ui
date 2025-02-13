import ImageCarousel_Horizontal from "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal";
import PriceFormat_Basic from "../../price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";

const images = [
  "https://prd.place/400/600?id=37",
  "https://prd.place/400/600?id=38",
  "https://prd.place/400/600?id=39",
  "https://prd.place/800/1200?id=40",
  "https://prd.place/800/300?id=41",
];

function ProductCard_01() {
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border p-2">
      <div className="relative w-full">
        <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-teal-500/80 p-2">
          <p className="text-xs font-semibold">20% OFF</p>
        </div>
        <ImageCarousel_Horizontal
          images={images}
          imageFit="contain"
          showThumbs={false}
          showControls={true}
        />
      </div>

      <div>
        <p className="text-lg font-semibold">Wireless headset</p>
        <p className="text-muted-foreground text-sm">Shipped in 2-3 days</p>
      </div>

      <PriceFormat_Basic
        prefix="$"
        value={98.96}
        className="text-2xl font-semibold"
      />

      <div className="flex flex-row gap-4">
        <Button variant="outline">Add to cart</Button>
        <Button>Buy now</Button>
      </div>
    </div>
  );
}

export default ProductCard_01;
