import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function ShopCard({ item = {} }) {
  const [imageLoading, setImageLoading] = useState(false);
  const { id, image, category, title, rating, price } = item;
  const [openModal, setOpenModal] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  // handle cart button
  const handleCartBtn = (cart) => {
    setOpenModal(true);
    setCartProducts((preCart) => [...preCart, cart]);
  };
  return (
    <>
      <Modal openModal={openModal} setOpenModal={setOpenModal}>
        {cartProducts.length === 0 ? (
          <div className="h-full flex flex-col gap-2 items-center justify-center text-xl font-medium">
            <FaShoppingCart className="text-6xl text-gray-500" />
            <p>No Products in the cart</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 justify-start items-center px-4">
            {cartProducts?.map((item) => (
              <div className="flex justify-between items-center" key={item.id}>
                <div className="w-[20%]">
                  <span>
                    <FaRegTrashAlt />
                  </span>
                </div>
                <div className="w-[60%]">
                  <h3>{item.title}</h3>
                  <span>{item.price}</span>
                </div>
                <div className="w-[20%] overflow-hidden">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
      <div className="group p-6 shadow-myCustomShadow rounded-xl flex flex-col justify-between h-[500px]">
        <Link className="h-[90%]" to={`/productDetails/${id}`}>
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
          <div className="flex-1 flex flex-col justify-between h-[40%]">
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
        </Link>
        {/* button */}
        <div className="flex justify-between items-center h-[10%]">
          {/* price */}
          <p className="text-[#00CBB8] text-2xl font-bold font-nunito">
            ${price}
          </p>
          <Button onClick={() => handleCartBtn(item)} primary={true}>
            Add Cart
          </Button>
        </div>
      </div>
    </>
  );
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
};
