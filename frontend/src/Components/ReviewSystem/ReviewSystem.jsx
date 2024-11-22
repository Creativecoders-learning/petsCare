import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaStar } from "react-icons/fa";

const ReviewSystem = ({ onSubmitReview }) => {
      const { register, handleSubmit, reset } = useForm(); // React Hook Form
      const [rating, setRating] = useState(0);

      const onSubmit = (data) => {
            const reviewData = { ...data, rating };
            if (onSubmitReview) {
                  onSubmitReview(reviewData); // Pass review data to parent component
            }
            reset(); // Reset form fields
            setRating(0); // Reset rating
      };

      return (
            <div className="max-w-md mx-auto bg-secondaryLight p-8 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Write a Review</h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Input */}
                        <div>
                              <label className="block text-lg font-medium text-gray-700 mb-2">Your Name</label>
                              <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                              />
                        </div>

                        {/* Comment Input */}
                        <div>
                              <label className="block text-lg font-medium text-gray-700 mb-2">Your Feedback</label>
                              <textarea
                                    {...register("comment", { required: true })}
                                    placeholder="Share your experience..."
                                    rows="4"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                              ></textarea>
                        </div>

                        {/* Rating Input */}
                        <div>
                              <label className="block text-lg font-medium text-gray-700 mb-2">Your Rating</label>
                              <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                          <FaStar
                                                key={star}
                                                size={32}
                                                className={`cursor-pointer ${star <= rating ? "text-yellow-300" : "text-gray-500"}`}
                                                onClick={() => setRating(star)}
                                          />
                                    ))}
                              </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                              <button
                                    type="submit"
                                    className="w-full bg-primary text-white py-2 rounded-md font-medium "
                              >
                                    Submit Review
                              </button>  
                        </div>
                  </form>
            </div>
      );
};

export default ReviewSystem;
