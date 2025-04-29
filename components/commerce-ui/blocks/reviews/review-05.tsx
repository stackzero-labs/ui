import StarRating from "@/components/commerce-ui/star-rating/fractions/star-rating-fractions";
import { Progress } from "@/components/ui/progress";

interface ReviewStatProps {
  stars: number;
  percentage: number;
  count: number;
}

interface ReviewStatData {
  stars: number;
  percentage: number;
  count: number;
}

interface Review_05Props {
  title?: string;
  subtitle?: string;
  overallRating?: number;
  totalReviewCount?: number;
  verifiedPurchases?: number;
  reviewStats?: ReviewStatData[];
  showProgress?: boolean;
}

function ReviewStat({ count, percentage, stars }: ReviewStatProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="w-16 text-right text-sm">{stars} stars</div>
      <Progress value={percentage} className="h-2 flex-1" />
      <div className="text-muted-foreground w-12 text-left text-sm">
        {count}
      </div>
    </div>
  );
}

function Review_05({
  overallRating = 4.7,
  reviewStats = [
    { count: 629, percentage: 76, stars: 5 },
    { count: 116, percentage: 14, stars: 4 },
    { count: 50, percentage: 6, stars: 3 },
    { count: 24, percentage: 3, stars: 2 },
    { count: 8, percentage: 1, stars: 1 },
  ],
  showProgress = true,
  subtitle = "What our customers are saying",
  title = "Customer Reviews",
  totalReviewCount = 827,
  verifiedPurchases = 756,
}: Review_05Props = {}) {
  const verifiedPercentage = Math.round(
    (verifiedPurchases / totalReviewCount) * 100
  );

  return (
    <div className="flex flex-col gap-8 rounded-lg bg-white px-6 py-6 dark:bg-gray-950">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-1 text-2xl font-bold">{title}</h2>
        <p className="text-muted-foreground mb-6 text-sm">{subtitle}</p>

        <div className="mb-4 flex flex-col items-center">
          <span className="mb-2 text-5xl font-bold">{overallRating}</span>
          <StarRating
            value={overallRating}
            readOnly
            iconSize={24}
            className="mb-2"
          />
          <p className="text-muted-foreground text-sm">
            Based on {totalReviewCount} reviews
          </p>
        </div>

        <div className="mb-2 w-full max-w-xs rounded-md bg-gray-50 px-4 py-3 dark:bg-gray-900">
          <p className="text-sm">
            <span className="font-medium">{verifiedPercentage}%</span> of
            reviews from{" "}
            <span className="font-medium text-green-600 dark:text-green-400">
              verified purchases
            </span>
          </p>
        </div>
      </div>

      {showProgress && (
        <div className="mx-auto w-full max-w-md space-y-2">
          {reviewStats.map((stat) => (
            <ReviewStat
              key={stat.stars}
              stars={stat.stars}
              percentage={stat.percentage}
              count={stat.count}
            />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm">
          <span className="font-medium">Top Keywords:</span>{" "}
          <span className="text-muted-foreground">
            quality, easy to use, value, fast shipping, comfortable
          </span>
        </p>
        <button className="mx-auto w-full max-w-xs rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          Write a Review
        </button>
      </div>
    </div>
  );
}

export default Review_05;
export type { ReviewStatData, ReviewStatProps, Review_05Props };
