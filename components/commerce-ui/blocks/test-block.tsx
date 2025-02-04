"use client";

import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { useState } from "react";
import ImageCarousel_Horizontal from "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal";
import PriceFormat_Basic from "@/components/commerce-ui/price-format/basic/price-format-basic";

const images = [
  "https://prd.place/400/600?id=37",
  "https://prd.place/400/600?id=38",
  "https://prd.place/400/600?id=39",
  "https://prd.place/800/1200?id=40",
  "https://prd.place/800/300?id=41",
];

const STAR_RATING_VALUE = 4.5;
export default function TestBlock() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <ImageCarousel_Horizontal images={images} thumbPosition="bottom" />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold">Product Name</h3>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
          <PriceFormat_Basic
            value={1498.98}
            className="text-xl font-semibold"
          />
          <div className="flex items-center gap-2">
            <StarRating value={STAR_RATING_VALUE} readOnly maxStars={5} />
            <p className="text-sm text-gray-500">({STAR_RATING_VALUE})</p>
          </div>
        </div>
      </div>
    </div>
  );
}
