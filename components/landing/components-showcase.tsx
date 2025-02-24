"use client";

import { useState } from "react";
import ProductCard_01 from "../commerce-ui/blocks/product-cards/product-cards-01";
import FaceRating_Basic from "../commerce-ui/face-rating/basic/face-rating-basic";
import StarRatingFractions from "../commerce-ui/star-rating/fractions/star-rating-fractions";
import Review_01 from "../commerce-ui/blocks/reviews/review-01";
import ProductCard_02 from "../commerce-ui/blocks/product-cards/product-cards-02";
import Review_02 from "../commerce-ui/blocks/reviews/review-02";
import ProductCard_03 from "../commerce-ui/blocks/product-cards/product-cards-03";

function ComponentsShowcase() {
  const [faceRatingValue, setFaceRatingValue] = useState(4);
  const [starRatingValue, setStarRatingValue] = useState(4.8);
  const [upvotes, setUpvotes] = useState(550);
  const [downvotes, setDownvotes] = useState(5);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const [rating1, setRating1] = useState(4.0);
  const [rating2, setRating2] = useState(4.5);
  const [rating3, setRating3] = useState(9.0);

  const [formData, setFormData] = useState({
    comment: "",
    email: "",
    rating: 3,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert(`Thank you for your feedback! You rated ${formData.rating} stars`);
  };
  return (
    <section className="relative rounded-xl px-4 md:px-0">
      <h2 className="mb-6 text-2xl font-semibold tracking-tighter md:text-5xl">
        Components Showcase
      </h2>
      {/* <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-12 xl:gap-4">
        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            <div>
              <ProductCard_01 />
            </div>
            <div>
              <Review_01 />
            </div>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
          <div className="flex flex-col items-start gap-4 rounded-xl border p-4">
            <div className="flex items-center gap-2">
              <StarRating1 />
            </div>

            <div className="flex items-center gap-2">
              <StarRating2 />
            </div>
            <div className="flex items-center gap-2">
              <StarRating3 />
            </div>
          </div>
          <div className="flex w-[350px] flex-col gap-4">
            <form
              onSubmit={handleSubmit}
              className="border-border bg-background mx-auto w-full max-w-md space-y-6 rounded-lg border p-6 shadow-xs"
            >
              <div className="space-y-2">
                <label className="block text-sm font-medium">
                  How satisfied are you with our product?
                </label>
                <FaceRating_Basic
                  value={formData.rating}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, rating: value }))
                  }
                  iconSize={32}
                  className="justify-center"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="comment" className="block text-sm font-medium">
                  Tell us more about your experience
                </label>
                <textarea
                  id="comment"
                  rows={3}
                  className="border-ring w-full rounded-md border px-3 py-2"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      comment: e.target.value,
                    }))
                  }
                  placeholder="Your feedback helps us improve..."
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  className="border-ring w-full rounded-md border px-3 py-2"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div> */}

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

        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
            <ProductCard_01 />
          </div>
          <div className="col-span-2 mx-auto flex min-h-[500px] w-full flex-col items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 md:px-12 dark:border-zinc-900">
            <Review_01 />
          </div>
        </div>
        <div className="col-span-2 mx-auto flex min-h-[600px] w-full items-center justify-center space-y-4 rounded-lg border px-4 py-4 md:col-span-1 dark:border-zinc-900">
          <ProductCard_02 />
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
