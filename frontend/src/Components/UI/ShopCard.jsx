import PropTypes from "prop-types";
import { useEffect, useState } from "react";
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

  console.log(cartProducts);

  // handle cart button
  const handleCartBtn = (product) => {
    const storedCartProducts =
      JSON.parse(localStorage.getItem("cartProducts")) || [];

    // Check if the product already exists in the cart
    const existingProduct = storedCartProducts.find(
      (item) => item.id === product.id
    );

    let updatedCartProducts;
    if (existingProduct) {
      // If it exists, update the quantity
      updatedCartProducts = storedCartProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      // If it does not exist, add new product with quantity 1
      updatedCartProducts = [
        ...storedCartProducts,
        { ...product, quantity: 1 },
      ];
    }

    // Store updated cart array in localStorage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    // Update state with the new cart products to reflect in the UI
    setCartProducts(updatedCartProducts);

    // Open the modal to show updated cart
    setOpenModal(true);
  };

  const handleDeleteClick = (productId) => {
    const updatedCartProducts = cartProducts.filter(
      (item) => item.id !== productId
    );

    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
    setCartProducts(updatedCartProducts);
  };

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    if (storedCartProducts) {
      setCartProducts(storedCartProducts);
    }
  }, []);

  const calculateTotalAmount = () => {
    return cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);
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
          <>
            <div className="flex flex-col gap-6 justify-start items-center px-4  h-[70vh] overflow-y-auto">
              {cartProducts?.map((item) => (
                <div
                  className="flex justify-between items-center"
                  key={item.id}
                >
                  <div className="w-[20%]">
                    <span
                      onClick={() => handleDeleteClick(item.id)}
                      className="cursor-pointer hover:text-[#ff4b36]"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                  <div className="w-[60%]">
                    <h3>{item.title}</h3>
                    <span>{item.price}</span>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="w-[20%] overflow-hidden">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
              <div className="flex justify-between items-center text-xl font-medium">
                <span>Total:</span>
                <span>${calculateTotalAmount()}</span>
              </div>
              <div className="w-full flex flex-col gap-4 items-center">
                <Button secondary>View Cart</Button>
                <Button primary>Checkout</Button>
              </div>
            </div>
          </>
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
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-2xl text-[#2F327D] font-bold font-nunito">
                {title}
              </h2>
            </div>
            <div className="flex gap-1 justify-start items-center text-[#6E7697] mb-6">
              {/* <Rating value={rating} /> */}
              {/* <span className="text-sm text-[#969696]">
                {rating ? `(${rating})` : "(0)"}
              </span> */}
              <p className="text-[#00CBB8] text-xl font-bold font-nunito">
                ${price}
              </p>
            </div>
          </div>
        </Link>
        {/* button */}
        <div className="flex justify-between items-center h-[10%]">
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
