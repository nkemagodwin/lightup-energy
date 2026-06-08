"use client";
import { useState, useCallback } from "react";
import { useToast } from "../../components/ToastProvider";

export default function ReviewForm() {
  const { showToast } = useToast();
  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState("5");
  const [formErrors, setFormErrors] = useState<{ name?: string; text?: string }>({});

  const validateForm = useCallback(() => {
    const errors: { name?: string; text?: string } = {};
    if (!reviewName.trim()) errors.name = "Name is required.";
    if (!reviewText.trim()) errors.text = "Review cannot be empty.";
    return errors;
  }, [reviewName, reviewText]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    showToast(`Thank you, ${reviewName.trim()}! Your ${reviewRating}‑star review has been submitted.`);
    setReviewName("");
    setReviewText("");
    setReviewRating("5");
    setFormErrors({});
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          Leave a Review
        </h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-4">
            <label htmlFor="reviewer-name" className="mb-1 block font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="reviewer-name"
              placeholder="Your Name"
              value={reviewName}
              onChange={(e) => setReviewName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none focus:ring-2 focus:ring-yellow-200"
              aria-describedby="name-error"
            />
            {formErrors.name && (
              <span id="name-error" className="text-sm text-red-500" role="alert">
                {formErrors.name}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="review-text" className="mb-1 block font-semibold text-gray-700">
              Your Review
            </label>
            <textarea
              id="review-text"
              rows={4}
              placeholder="Your Review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-accent focus:outline-none focus:ring-2 focus:ring-yellow-200"
              aria-describedby="text-error"
            />
            {formErrors.text && (
              <span id="text-error" className="text-sm text-red-500" role="alert">
                {formErrors.text}
              </span>
            )}
          </div>

          <fieldset className="mb-6">
            <legend className="mb-2 font-semibold text-gray-700">Your Rating:</legend>
            <div className="star-rating flex flex-row-reverse justify-end gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  <input
                    type="radio"
                    id={`rating-${star}`}
                    name="rating"
                    value={star}
                    checked={reviewRating === star.toString()}
                    onChange={(e) => setReviewRating(e.target.value)}
                  />
                  <label
                    htmlFor={`rating-${star}`}
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    ★
                  </label>
                </span>
              ))}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 font-semibold text-white transition hover:bg-opacity-90"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
}