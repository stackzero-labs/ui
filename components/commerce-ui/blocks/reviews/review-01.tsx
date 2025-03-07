import StarRating from "@/components/commerce-ui/star-rating/basic/star-rating-basic";
interface Review_01Props {
  rating?: number;
  reviewDate?: string;
  reviewText?: string;
  avatarUrl?: string;
  reviewerName?: string;
  reviewerTitle?: string;
}

function Review_01({
  rating = 4.0,
  reviewDate = "Feb 12, 2025",
  reviewText = "The product is great, I'm very satisfied with the quality and the price. I would recommend it to anyone looking for a good product or service.",
  avatarUrl = "https://docs.material-tailwind.com/img/face-2.jpg",
  reviewerName = "Adam Smith",
  reviewerTitle = "CEO ACME Inc.",
}: Review_01Props = {}) {
  return (
    <>
      <div className="flex max-w-2xl flex-col gap-4 rounded-lg border px-6 py-4">
        <div className="flex flex-row flex-wrap items-center justify-between gap-2">
          <div className="flex flex-row items-center gap-2">
            <StarRating value={rating} maxStars={5} iconSize={18} readOnly />
            <p className="text-sm">({rating}/5)</p>
          </div>

          <p className="text-muted-foreground text-sm">{reviewDate}</p>
        </div>

        <div>
          <p className="text-justify">{reviewText}</p>
        </div>

        <div className="flex flex-row items-end gap-4">
          <img
            src={avatarUrl}
            alt="reviewer avatar"
            className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
          />
          <div>
            <p className="text-sm font-semibold">{reviewerName}</p>
            <p className="font-base text-muted-foreground text-sm">
              {reviewerTitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review_01;
export type { Review_01Props };
