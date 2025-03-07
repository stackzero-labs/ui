import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";

interface RatingItemProps {
  label: string;
  value: number;
  isLast?: boolean;
}

interface RatingItemData {
  label: string;
  value: number;
}

interface Review_04Props {
  title?: string;
  overallRating?: number;
  recommendPercentage?: number;
  ratingItems?: RatingItemData[];
}

function RatingItem({ label, value, isLast }: RatingItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm tracking-wider uppercase">
        <span className="mr-2 font-semibold">{value}/5</span> {label}
      </p>
      <StarRating value={value} readOnly iconSize={16} />
      {!isLast && (
        <hr className="my-2 block border-t border-gray-500/50 md:hidden" />
      )}
    </div>
  );
}

function Review_04({
  title = "Customer Reviews",
  overallRating = 4.4,
  recommendPercentage = 87,
  ratingItems = [
    { label: "Quality", value: 4.5 },
    { label: "Value", value: 4.5 },
    { label: "Appearance", value: 4.5 },
    { label: "Effectiveness", value: 4.5 },
    { label: "Features", value: 4.1 },
    { label: "Quietness", value: 4.4 },
  ],
}: Review_04Props = {}) {
  return (
    <div className="items-left flex flex-col gap-6 px-6 py-4">
      <h1 className="mb-4 text-left text-2xl font-semibold">{title}</h1>
      <div className="flex flex-row flex-wrap gap-12">
        <div className="flex grow-0 flex-col justify-around gap-2">
          <p className="text-4xl font-semibold"> {overallRating}/5</p>
          <StarRating value={overallRating} readOnly iconSize={36} />
          <p className="text-muted-foreground max-w-[20ch] text-sm">
            <span className="font-semibold text-teal-500">
              {recommendPercentage}% would recommend{" "}
            </span>
            this product to a friend
          </p>
        </div>
        <div className="grid w-fit grid-cols-1 gap-2 md:grid-cols-3">
          {ratingItems.map((item, index) => (
            <RatingItem
              key={item.label}
              label={item.label}
              value={item.value}
              isLast={index === ratingItems.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review_04;
export type { RatingItemData, RatingItemProps, Review_04Props };
