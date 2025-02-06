import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormatSale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import { Button } from "@/components/ui/button";

function ProductCard_03() {
  return (
    <div className="flex w-[250px] flex-col gap-4 rounded-lg border p-0">
      <div className="w-full rounded-tl-lg rounded-tr-lg bg-gray-500/50 p-2">
        <p className="text-center text-xs font-semibold">NEW COLLECTION</p>
      </div>
      <div className="relative w-full">
        <ImageViewer imageUrl="https://prd.place/1920/1080?id=37" />
      </div>

      <div className="flex flex-col gap-4 p-2">
        <div>
          <p className="text-xl font-semibold">Wireless headset</p>
        </div>

        <div>
          <PriceFormatSale
            prefix="$"
            originalPrice={199}
            salePrice={179}
            showSavePercentage
            className="text-xl font-semibold"
            classNameSalePrice="text-2xl text-orange-500"
          />
          <p className="text-muted-foreground text-sm">Free Shipping</p>
        </div>

        <div className="flex flex-row gap-4">
          <Button variant="outline">Add to cart</Button>
          <Button>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_03;
