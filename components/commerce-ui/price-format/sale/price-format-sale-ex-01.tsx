"use client";

import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";

export default function PriceFormat_Sale_Ex_01() {
  return (
    <div className="flex flex-col items-center gap-4 text-lg">
      <PriceFormat_Sale
        originalPrice={1499.99}
        salePrice={999.99}
        prefix="$"
        showSavePercentage={true}
        classNameSalePrice="text-2xl"
      />
    </div>
  );
}
