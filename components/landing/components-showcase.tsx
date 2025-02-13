"use client";

import { useState } from "react";
import ProductCard_01 from "../commerce-ui/blocks/product-cards/product-cards-01";
import FaceRating_Basic from "../commerce-ui/face-rating/basic/face-rating-basic";
import StarRatingFractions from "../commerce-ui/star-rating/fractions/star-rating-fractions";

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
    <div className="md:grids-col-2 grid md:gap-4 lg:grid-cols-10 xl:grid-cols-12 xl:gap-4">
      <div className="space-y-4 lg:col-span-4 xl:col-span-6 xl:space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          <div>
            <ProductCard_01 />
          </div>
          <div>
            <ProductCard_01 />
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
                  setFormData((prev) => ({ ...prev, comment: e.target.value }))
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
    </div>
  );
}

export default ComponentsShowcase;

const StarRating1 = () => {
  const [rating, setRating] = useState(4.0);
  return (
    <>
      <StarRatingFractions
        color="#0ff4f4"
        value={rating}
        onChange={setRating}
        maxStars={5}
      />
      <p>({rating})</p>
    </>
  );
};

const StarRating2 = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <>
      <StarRatingFractions value={rating} onChange={setRating} maxStars={5} />
      <p>({rating})</p>
    </>
  );
};

const StarRating3 = () => {
  const [rating, setRating] = useState(9);

  return (
    <>
      <StarRatingFractions
        value={rating}
        onChange={setRating}
        maxStars={10}
        iconSize={36}
      />
      <p>({rating})</p>
    </>
  );
};
