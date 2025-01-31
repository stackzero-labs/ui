"use client";

import PriceFormat_Basic from "@/components/commerce-ui/price-format/basic/price-format-basic";

export default function PriceFormat_Basic_Ex_01() {
  return (
    <div className="flex flex-col items-center gap-4">
      <PriceFormat_Basic value={1499.99} prefix="$" />
    </div>
  );
}
