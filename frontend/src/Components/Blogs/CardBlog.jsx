/* eslint-disable react/prop-types */
import { PiDog } from "react-icons/pi";
import { Link } from "react-router-dom";
import blog_item_line from '../../assets/blog_item_line.png';

export default function CardBlog({ blog = {} }) {
  function getFirst30Words(text) {
    const wordsArray = text.trim().split(/\s+/);
    if (wordsArray.length > 30) {
      return wordsArray.slice(0, 30).join(" ") + "...";
    }
    return text;
  }

  const previewText = getFirst30Words(blog?.description || "");

  return (
    <div className="">
      <Link to={`/blog-details/${blog?._id}`}>
        {/* Card Wrapper */}
        <div className="rounded-lg overflow-hidden  mb-8 relative group">
          {/* Image with Overlay */}
          <div className="relative">
            <img
              src={`${blog?.image}`}
              alt="Blog Thumbnail"
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Info */}
            <p className="text-sm text-gray-500 mb-2">
              By <span className="text-primary font-medium">{blog?.author?.name}</span> •{" "}
              <span>{blog?.author?.update}</span>
            </p>

            {/* Title */}
            <h3 className="text-xl font-bold text-secondary mb-4 ">
              {blog?.title}
            </h3>

            {/* Preview Text */}
            <p className="text-gray-600 leading-relaxed">
              {previewText}
            </p>

            {/* Read More Button */}
            <div className="mt-5">
              <button className="text-primary text-base font-medium flex items-center gap-2 hover:text-primaryBold transition">
                Read More <PiDog className="text-lg" />
              </button>
            </div>
          </div>

          {/* Divider Line */}
          <div className="absolute bottom-0 left-0 w-full h-[6px]">
            <img className="w-full h-full" src={blog_item_line} alt="Divider" />
          </div>
        </div>
      </Link>
    </div>
  );
}
