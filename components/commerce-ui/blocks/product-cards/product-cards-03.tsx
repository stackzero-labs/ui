"use client";

import ImageViewer from "@/components/commerce-ui/image-viewer/basic/image-viewer-basic";
import PriceFormatSale from "@/components/commerce-ui/price-format/sale/price-format-sale";
import { Button } from "@/components/ui/button";

const DEFAULT_IMAGE_URL =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg";

interface ProductCard_03Props {
  imageUrl?: string;
  tagText?: string;
  productName?: string;
  originalPrice?: number;
  salePrice?: number;
  freeShipping?: boolean;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  currencyPrefix?: string;
}

function ProductCard_03({
  imageUrl = DEFAULT_IMAGE_URL,
  tagText = "NEW COLLECTION",
  productName = "Wireless headset",
  originalPrice = 199,
  salePrice = 179,
  freeShipping = true,
  onAddToCart = () => {},
  onBuyNow = () => {},
  currencyPrefix = "$",
}: ProductCard_03Props = {}) {
  return (
    <div className="flex w-[250px] flex-col rounded-lg border p-0">
      <div className="w-full rounded-tl-lg rounded-tr-lg bg-gray-500/50 p-2">
        <p className="text-center text-xs font-semibold">{tagText}</p>
      </div>
      <div className="relative w-full">
        <ImageViewer
          imageUrl={imageUrl}
          classNameThumbnailViewer="rounded-none"
        />
      </div>

      <div className="mt-2 flex flex-col gap-4 p-2">
        <div>
          <p className="text-xl font-semibold">{productName}</p>
        </div>

        <div>
          <PriceFormatSale
            prefix={currencyPrefix}
            originalPrice={originalPrice}
            salePrice={salePrice}
            showSavePercentage
            className="text-xl font-semibold"
            classNameSalePrice="text-2xl text-orange-500"
          />
          {freeShipping && (
            <p className="text-muted-foreground text-sm">Free Shipping</p>
          )}
        </div>

        <div className="flex flex-row gap-4">
          <Button variant="outline" onClick={onAddToCart}>
            Add to cart
          </Button>
          <Button onClick={onBuyNow}>Buy now</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard_03;
export type { ProductCard_03Props };
