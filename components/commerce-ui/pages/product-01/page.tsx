"use client";

import Banner_08 from "@/components/commerce-ui/blocks/banners/banner-08";
import Review_04 from "@/components/commerce-ui/blocks/reviews/review-04";
import Product from "@/components/commerce-ui/pages/product-01/components/product";
import { ProductInfo } from "@/components/commerce-ui/pages/product-01/components/product-info";
import { StoreHeader } from "@/components/commerce-ui/pages/product-01/components/store-header";
import { StoreNavigation } from "@/components/commerce-ui/pages/product-01/components/store-navigation";

export default function ProductPage_01() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Header Section */}
      <div className="sticky top-0 z-50">
        <StoreHeader />
        <StoreNavigation />
      </div>

      {/* Main Content */}
      <main className="w-full">
        <div></div>
        {/* Product Section */}

        <div className="py-8 lg:py-12">
          {" "}
          <Banner_08 />
          <Product />
        </div>
        <ProductInfo />
        <div>
          <Review_04 />
        </div>
      </main>
    </div>
  );
}
