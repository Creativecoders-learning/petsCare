import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function ShopCard({ item = {} }) {
  const [imageLoading, setImageLoading] = useState(false);
  const { id, image, category, title, rating, price } = item;

  return (
    <Link to={`/courseDetails/${id}`}>
      <div className="group p-6 shadow-myCustomShadow rounded-xl flex flex-col justify-between h-[500px]">
        {" "}
        {/* card image */}
        <figure className="overflow-hidden relative mb-5 h-[60%]">
          {image && (
            <img
              onLoad={() => setImageLoading(true)}
              className="w-full h-full object-cover rounded group-hover:scale-[1.1] transition-all duration-500 ease-in-out"
              src={image}
              alt="course"
            />
          )}
          {!imageLoading && (
            <div className="flex justify-center items-center my-2">
              {/* <Loader /> */} Loading...
            </div>
          )}
        </figure>
        {/* card body */}
        <div className="flex-1 flex flex-col justify-between h-[30%]">
          {" "}
          {/* Ensure the body takes up available space */}
          <span className="text-[#00CBB8] text-sm font-semibold mb-3 flex items-center gap-2">
            {category}
          </span>
          {/* Conditionally truncate the title */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
              {title}
            </h2>
          </div>
          <div className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
            {/* <Rating value={rating} /> */}
            <span className="text-sm text-[#969696]">
              {rating ? `(${rating})` : "(0)"}
            </span>
          </div>
        </div>
        {/* button */}
        <div className="flex justify-between items-center h-[10%]">
          {/* price */}
          <p className="text-[#00CBB8] text-2xl font-bold font-nunito">
            ${price}
          </p>
          <Button primary={true}>Details</Button>
        </div>
      </div>
    </Link>
  );
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
};
