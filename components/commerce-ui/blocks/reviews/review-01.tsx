import StarRating from "@/components/commerce-ui/star-rating/basic/star-rating-basic";

function Review_01() {
  const rating = 4.0;
  return (
    <div className="flex w-full flex-col gap-4 rounded-lg border px-6 py-4">
      <div className="flex flex-row flex-wrap items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-2">
          <StarRating value={rating} maxStars={5} iconSize={18} readOnly />
          <p className="text-sm">({rating}/5)</p>
        </div>

        <p className="text-muted-foreground text-sm">Feb 12, 2025</p>
      </div>

      <div>
        <p className="text-justify">
          The product is great, I&apos;m very satisfied with the quality and the
          price. I would recommend it to anyone looking for a good product or
          service.
        </p>
      </div>

      <div className="flex flex-row items-end gap-4">
        <img
          src="https://docs.material-tailwind.com/img/face-2.jpg"
          alt="avatar"
          className="relative inline-block h-12 w-12 !rounded-full object-cover object-center"
        />
        <div>
          <p className="text-sm font-semibold">Adam Smith</p>
          <p className="font-base text-muted-foreground text-sm">
            CEO ACME Inc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Review_01;
