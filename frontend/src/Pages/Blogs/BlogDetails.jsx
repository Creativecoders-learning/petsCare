import { useParams } from "react-router-dom";
import Container from "../../Components/UI/Container";
import useBlogs from "../../Hooks/api/useBlogs";
import { useEffect, useState } from "react";
import RelatedBlogs from "../../Components/Blogs/RelatedBlogs";
import ReviewSystem from "../../Components/ReviewSystem/ReviewSystem";
import useAxios from "../../Hooks/useAxios";
import toast from 'react-hot-toast';
import ReviewCard from "../../Components/UI/ReviewCard";

const BlogDetails = () => {
    const { loading, error, blogs, refresh } = useBlogs();
    const [subtitles, setSubtitles] = useState([]);
    const { id } = useParams();

    const apiHandler = useAxios()

    const blog = blogs?.find((blog) => blog?._id === id);
    const reviews = blog?.reviews;

    useEffect(() => {
        if (blog?.subtitles) {
            setSubtitles(blog?.subtitles);
        }
    }, [blog]);

    const handleReviewSystem = async (reviewData) => {
        try {
            // Fetch the existing blog details
            const existingBlog = await apiHandler.get(`/blogs/blog-details/${id}`);
            const existingReviews = existingBlog?.data?.reviews || [];

            // Append the new review to the existing reviews
            const updatedReviews = [...existingReviews, reviewData];

            // Send updated reviews to the backend
            const response = await apiHandler.put(`/blogs/blog-details/${id}`, {
                reviews: updatedReviews,
            });
            if (response?.data?.modifiedCount > 0) {

                // average review calculate
                const totalRating = updatedReviews.reduce((sum, review) => sum + review?.rating, 0);
                const averageRating = (totalRating / reviews?.length).toFixed(1)

                // Send updated average reviews to the backend
                await apiHandler.put(`/blogs/blog-details/${id}`, {
                    rating: averageRating,
                });

                toast.success('Review Added Successfully!!');
                refresh();
            }
            // console.log("Review data:", reviewData);
        } catch (error) {
            console.error("Error submitting review:", error);
        }
    };


    if (loading)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-primaryLight">Loading...</p>
            </div>
        );
    if (error)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-primary">Error: {error}</p>
            </div>
        );
    if (!blog)
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-lg text-secondary">Blog not found.</p>
            </div>
        );

    return (
        <Container>
            <div className="flex flex-col gap-10 mb-16">
                {/* Hero Section */}
                <div className="relative">
                    <img
                        src={blog?.image}
                        alt={blog?.title}
                        className="w-full h-[400px] object-cover rounded-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-opacity-70 bg-secondary text-secondaryLight p-4 rounded-md">
                        <h1 className="text-4xl font-bold">{blog?.title}</h1>
                        <p className="mt-2 text-sm uppercase text-primaryLight">
                            Category: {blog?.category}
                        </p>
                    </div>
                </div>

                {/* Blog Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <div className="bg-secondaryLight p-6 rounded-lg shadow-md">
                            <p className="text-gray-800 text-lg leading-relaxed">{blog?.description}</p>
                            <div className="mt-6 space-y-6">
                                {subtitles.map((subtitle, index) => (
                                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm">
                                        <h2 className="text-xl font-semibold text-primary">
                                            {subtitle?.title}
                                        </h2>
                                        <p className="mt-2 text-secondary">{subtitle?.content}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6 px-4 lg:px-0">
                        {/* Author Info */}
                        <div className="bg-gradient-to-r from-primary to-primaryLight text-secondaryLight p-6 rounded-lg shadow-md">
                            <div className="flex items-center">
                                <img
                                    src={blog?.author?.image}
                                    alt={blog?.author?.name}
                                    className="w-16 h-16 rounded-full border-4 border-secondaryLight object-cover"
                                />
                                <div className="ml-4">
                                    <h3 className="text-lg font-bold">{blog?.author?.name}</h3>
                                    <p className="text-sm text-secondaryLight">Author</p>
                                </div>
                            </div>
                            <p className="mt-4">{blog?.author?.description}</p>
                        </div>

                        {/* Blog Stats */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-bold text-secondary mb-4">
                                Blog Stats
                            </h3>
                            <div className="flex justify-between text-myGray mb-2">
                                <span>Views</span>
                                <span className="font-semibold text-primary">
                                    {blog?.view_count || 0}
                                </span>
                            </div>
                            <div className="flex justify-between text-myGray">
                                <span>Rating</span>
                                <span className="font-semibold text-primary">
                                    {blog?.rating || "N/A"}
                                </span>
                            </div>
                        </div>

                        {/* Related Blogs */}
                        <RelatedBlogs blog={blog} />

                        {/* Reviews System */}
                        <ReviewSystem onSubmitReview={handleReviewSystem} />

                        {/* All reviews */}
                        <ReviewCard reviews={reviews} />

                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BlogDetails;
