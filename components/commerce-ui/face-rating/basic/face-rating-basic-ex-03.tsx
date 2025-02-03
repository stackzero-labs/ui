"use client";

import FaceRatingBasic from "@/components/commerce-ui/face-rating/basic/face-rating-basic";
import { useState } from "react";

export default function FaceRating_Basic_Ex_03() {
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
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md space-y-6 rounded-lg border border-border bg-background p-6 shadow-xs"
    >
      <div className="space-y-2">
        <label className="block text-sm font-medium">
          How satisfied are you with our product?
        </label>
        <FaceRatingBasic
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
          className="w-full rounded-md border border-ring px-3 py-2"
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
          className="w-full rounded-md border border-ring px-3 py-2"
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
  );
}
