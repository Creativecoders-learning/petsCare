import { FaStar } from "react-icons/fa";

const ReviewCard = ({ reviews }) => {
      return (
            <div className="space-y-4 mt-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">Reviews</h3>
                  {reviews?.length > 0 ? (
                        reviews.map((review, index) => (
                              <div
                                    key={index}
                                    className="flex flex-col border border-gray-300 rounded-md p-4 shadow-sm"
                              >
                                    {/* User Info */}
                                    <div className="flex items-start mb-3">
                                          <img
                                                src={review?.image || "https://via.placeholder.com/50"} // Default placeholder
                                                alt={review?.name}
                                                className="w-12 h-12 rounded-full object-cover mr-3"
                                          />
                                          <div>
                                                <h4 className="text-base font-medium text-gray-800">{review?.name}</h4>
                                                <p className="text-sm text-gray-500">{review?.email}</p>
                                          </div>
                                    </div>

                                    {/* Title and Rating */}
                                    <div className="flex items-center justify-between mb-2">
                                          <h5 className="text-sm font-semibold text-primary">{review?.title}</h5>
                                          <div className="flex">
                                                {[...Array(5)].map((_, starIndex) => (
                                                      <FaStar
                                                            key={starIndex}
                                                            size={14}
                                                            className={`${starIndex < review?.rating ? "text-yellow-400" : "text-gray-300"
                                                                  }`}
                                                      />
                                                ))}
                                          </div>
                                    </div>

                                    {/* Comment */}
                                    <p className="text-sm text-gray-600">{review?.comment}</p>
                              </div>
                        ))
                  ) : (
                        <p className="text-gray-500 italic">No reviews yet. Be the first to review this blog!</p>
                  )}
            </div>
      );
};

export default ReviewCard;
