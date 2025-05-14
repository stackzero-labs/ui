"use client";

import { useRegistryCounts } from "@/hooks/use-registry-counts";
import { useState } from "react";
import Banner_03 from "../commerce-ui/blocks/banners/banner-03";
import Banner_07 from "../commerce-ui/blocks/banners/banner-07";
import ProductCard_01 from "../commerce-ui/blocks/product-card/product-card-01";
import ProductCard_03 from "../commerce-ui/blocks/product-card/product-card-03";
import ProductCard_06 from "../commerce-ui/blocks/product-card/product-card-06";
import ProductCard_07 from "../commerce-ui/blocks/product-card/product-card-07";
import Review_01 from "../commerce-ui/blocks/reviews/review-01";
import Review_02 from "../commerce-ui/blocks/reviews/review-02";
import StarRatingFractions from "../commerce-ui/star-rating/fractions/star-rating-fractions";

function ComponentsShowcase() {
  const { blocks, components, examples } = useRegistryCounts();
  return (
    <section className="relative rounded-xl px-4 md:px-0">
      <h2 className="mb-2 text-2xl font-semibold tracking-tighter md:text-5xl">
        <span>Components Showcase</span>
      </h2>
      <p className="text-muted-foreground mb-6">
        <span className="text-foreground font-medium">{components}</span>{" "}
        components | {""}
        <span className="text-foreground font-medium">{examples}</span> examples
        | {""}
        <span className="text-foreground font-medium">{blocks}</span> blocks and
        counting...
      </p>

      <div className="relative flex flex-col gap-4">
        <div className="grid w-full grid-cols-3 gap-4">
          <div className="col-span-3 mx-auto flex min-h-[250px] w-full items-center justify-center space-y-4 rounded-lg border px-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <StarRating1 />
          </div>
          <div className="col-span-3 mx-auto flex min-h-[250px] w-full items-center justify-center space-y-4 rounded-lg border px-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <StarRating2 />
          </div>
          <div className="col-span-3 mx-auto flex min-h-[250px] w-full items-center justify-center space-y-4 rounded-lg border px-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <StarRating3 />
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-4">
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-2 dark:border-zinc-900">
            <Banner_03 />
          </div>
          <div className="col-span-1 mx-auto flex min-h-[500px] w-full flex-col items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <Banner_07 />
          </div>
        </div>

        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
            <ProductCard_01 />
          </div>
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full flex-col items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <Review_01 />
          </div>
        </div>
        <div className="col-span-2 mx-auto flex min-h-[300px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
          <ProductCard_06 />
        </div>
        <div className="col-span-2 mx-auto flex min-h-[300px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
          <ProductCard_07 />
        </div>
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2 mx-auto flex min-h-[700px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
            <ProductCard_03 />
          </div>
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full flex-col items-center justify-center space-y-4 rounded-lg border px-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <Review_02 />
          </div>
        </div>

        <div className="to-background absolute bottom-0 h-[600px] w-full bg-gradient-to-b from-transparent" />
      </div>
    </section>
  );
}

export default ComponentsShowcase;

const StarRating1 = () => {
  const [rating, setRating] = useState(4.0);
  return (
    <div className="flex flex-row items-center gap-3">
      <StarRatingFractions
        color="#0ff4f4"
        value={rating}
        onChange={setRating}
        maxStars={5}
      />
      <p>({rating})</p>
    </div>
  );
};

const StarRating2 = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <div className="flex flex-row items-center gap-3">
      <StarRatingFractions
        value={rating}
        onChange={setRating}
        maxStars={5}
        iconSize={36}
      />
      <p>({rating})</p>
    </div>
  );
};

const StarRating3 = () => {
  const [rating, setRating] = useState(9);

  return (
    <div className="flex flex-row items-center gap-3">
      <StarRatingFractions value={rating} onChange={setRating} maxStars={10} />
      <p>({rating})</p>
    </div>
  );
};
