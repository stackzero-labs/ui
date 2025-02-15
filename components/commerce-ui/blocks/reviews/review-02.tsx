import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

function Review_02() {
  const rating = 4.0;
  return (
    <div className="items-left flex w-full flex-col gap-6 rounded-lg border px-6 py-4">
      <div className="flex w-full flex-row flex-wrap items-start justify-between gap-4">
        <img
          src="https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product-image"
          className="relative inline-block h-36 w-36 items-center rounded-sm object-cover"
        />

        <div className="flex flex-col gap-4">
          <p className="text-xl font-semibold">
            Ultra Backpack PRO GEAR - 2025 edition
          </p>
          <div className="w-fit rounded-xl border border-teal-500/50 bg-teal-500/20 px-2 py-1 uppercase">
            <p className="text-xs font-semibold text-teal-500">Top rated</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-center gap-4">
        <p className="text-5xl">4.5</p>
        <div>
          <StarRating value={4.5} readOnly />
          <p>100 reviews</p>
        </div>
      </div>

      <div className="mb-4 flex flex-col gap-2">
        <RatingLevel level={5} value={75} total={75} />
        <RatingLevel level={4} value={20} total={20} />
        <RatingLevel level={3} value={5} total={5} />
        <RatingLevel level={2} value={0} total={0} />
        <RatingLevel level={1} value={0} total={0} />
      </div>

      <div className="flex flex-col gap-2">
        {" "}
        <Button>Review Now</Button>
        <Button variant="link">See all reviews</Button>
      </div>
    </div>
  );
}

export default Review_02;

interface RatingLevelProps {
  level: number;
  value: number;
  total: number;
}

const RatingLevel = ({ level, value, total }: RatingLevelProps) => {
  return (
    <div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-row items-center gap-2">
          <Star size="16px" fill="gray" stroke="gray" />
          <p className="text-sm">{level}</p>
        </div>

        <div className="grow">
          <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div
              className="width: 45% h-2.5 rounded-full"
              style={{ width: `${value}%`, backgroundColor: "#e4c616" }}
            ></div>
          </div>
        </div>
        <div className="min-w-[80px]">
          <p className="text-sm">
            {value}% <span className="text-muted-foreground">({total})</span>
          </p>
        </div>
      </div>
    </div>
  );
};
