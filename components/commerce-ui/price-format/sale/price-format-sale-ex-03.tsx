"use client";

import PriceFormat_Sale from "@/components/commerce-ui/price-format/sale/price-format-sale";

export default function PriceFormat_Sale_Ex_03() {
  return (
    <div className="flex flex-row items-center gap-4 text-lg">
      <PriceFormat_Sale
        originalPrice={99.95}
        prefix="$"
        showSavePercentage={true}
        classNameSalePrice="text-4xl"
        className="flex-col items-start"
      />
    </div>
  );
}
