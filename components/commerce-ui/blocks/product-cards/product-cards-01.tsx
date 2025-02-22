import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import { Button } from "@/components/ui/button";

const IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

function ProductCard_01() {
  return (
    <div className="flex w-[350px] flex-col gap-4 rounded-lg border p-2">
      <div className="relative w-full">
        <div className="absolute top-2 left-2 z-10 w-fit rounded-lg bg-teal-500/80 p-2">
          <p className="text-xs font-semibold">20% OFF</p>
        </div>
        <ImageViewer imageUrl={IMAGE_URL} />
      </div>

      <div>
        <p className="text-lg font-semibold">Wireless headset</p>
        <p className="text-muted-foreground text-sm">Shipped in 2-3 days</p>
      </div>

      <PriceFormat
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
