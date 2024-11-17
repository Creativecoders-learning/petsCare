import { Link, useParams } from "react-router-dom";
import Button from "../../UI/Button";
import Container from "../../UI/Container";
import Tabs from "../../UI/Tabs";
import { useEffect, useState } from "react";
import usePetsProductById from "../../../Hooks/api/usePetsProductById";
import { FaRegTrashAlt, FaShoppingCart } from "react-icons/fa";
import Modal from "../../UI/Modal";
import UseAuth from "../../../Hooks/UseAuth";

export default function ProductDetails() {
  const { id } = useParams();
  const { petsProduct } = usePetsProductById(id);
  const [openModal, setOpenModal] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);
  const { setCartStatus } = UseAuth();
  const [quantity, setQuantity] = useState(0);

  // handle cart button
  const handleCartBtn = (product) => {
    const storedCartProducts =
      JSON.parse(localStorage.getItem("cartProducts")) || [];
    // Check if the product already exists in the cart
    const existingProduct = storedCartProducts.find(
      (item) => item._id === product._id
    );

    let updatedCartProducts;
    if (existingProduct) {
      // If it exists, update the quantity
      updatedCartProducts = storedCartProducts.map((item) =>
        item._id === product._id
          ? {
              ...item,
              quantity: quantity,
              totalPrice: quantity * item.price,
            }
          : item
      );
    } else {
      // If it does not exist, add new product with quantity 1
      updatedCartProducts = [
        ...storedCartProducts,
        {
          ...petsProduct,
          quantity: quantity,
          totalPrice: quantity * petsProduct.price,
        },
      ];
    }

    // Store updated cart array in localStorage
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));

    // Update state with the new cart products to reflect in the UI
    setCartProducts(updatedCartProducts);
    setCartStatus(updatedCartProducts.length || 0);
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
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // handle increase button
  const handleIncreaseBtn = () => {
    setQuantity(quantity + 1);
    handleCartBtn(petsProduct);
  };
  // handle increase button
  const handleDecreaseBtn = () => {
    setQuantity(quantity > 0 ? quantity - 1 : 0);
    handleCartBtn(petsProduct);
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
                  key={item._id}
                >
                  <div className="w-[20%]">
                    <span
                      onClick={() => handleDeleteClick(item._id)}
                      className="cursor-pointer hover:text-[#ff4b36]"
                    >
                      <FaRegTrashAlt />
                    </span>
                  </div>
                  <div className="w-[60%]">
                    <h3>{item.title}</h3>
                    <span>{item.totalPrice}</span>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <div className="w-[20%] overflow-hidden">
                    <img src={item.image} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-4 w-full p-4">
              <div className="flex justify-between items-center text-2xl font-medium px-2">
                <span>Total:</span>
                <span>${calculateTotalAmount().toFixed(2)}</span>
              </div>
              <div className="w-full flex flex-col gap-4 items-center">
                <Link
                  className="w-full"
                  to={"/payment-process?tab=Shipping Cart"}
                >
                  <Button secondary btnStyle="w-full">
                    View Cart
                  </Button>
                </Link>
                <Link className="w-full" to={"/payment-process?tab=Checkout"}>
                  <Button primary btnStyle="w-full">
                    Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </Modal>
      <Container>
        <div className="my-10 flex flex-col gap-20">
          <div className="flex px-6 py-4 h-[70vh]">
            {/* image */}
            <div className="w-1/2 flex flex-col gap-2 justify-between items-center overflow-hidden">
              <div className="h-[80%] p-4 bg-[#F5F2EB]">
                <img
                  className="w-full h-full object-contain"
                  src={petsProduct?.image}
                  alt=""
                />
              </div>
              <div className="w-[80%] h-[20%] flex justify-start gap-4">
                <div className="p-2 bg-[#F5F2EB] w-full h-full">
                  <img
                    src={petsProduct?.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-2 bg-[#F5F2EB] w-full h-full">
                  <img
                    src={petsProduct?.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-2 bg-[#F5F2EB] w-full h-full">
                  <img
                    src={petsProduct?.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-2 bg-[#F5F2EB] w-full h-full">
                  <img
                    src={petsProduct?.image}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* basic info */}
            <div className="w-1/2 flex flex-col justify-between">
              {/* title */}
              <div className="flex flex-col gap-2 items-start">
                <span>{petsProduct?.category}</span>
                <h2 className="text-2xl font-medium">{petsProduct?.title}</h2>
                <span>282 Ratting</span>
                <span>Brand: No Brand</span>
              </div>
              {/* body */}
              <div className="flex flex-col gap-2">
                <span className="text-3xl">${petsProduct?.price}</span>
                <p>{petsProduct?.description}</p>
                <div className="flex gap-4 items-center text-xl">
                  <span>Quantity:</span>
                  <div className="inline-flex border border-gray-400 text-xl">
                    <span
                      className="flex justify-center items-center px-4 py-2 border-r border-gray-400 cursor-pointer"
                      onClick={handleDecreaseBtn}
                    >
                      {"-"}
                    </span>
                    <span className="flex justify-center items-center px-4 py-2">
                      {quantity}
                    </span>
                    <span
                      className="flex justify-center items-center px-4 py-2 border-l border-gray-400 cursor-pointer"
                      onClick={handleIncreaseBtn}
                    >
                      {"+"}
                    </span>
                  </div>
                </div>
              </div>
              {/* buttons */}
              <div className="w-[60%] flex flex-col gap-4">
                <Button
                  onClick={() => setOpenModal(true)}
                  secondary={true}
                  btnStyle="w-full"
                >
                  Add to Cart
                </Button>
                <Link to={"/payment-process"}>
                  <Button primary={true} btnStyle="w-full">
                    Buy Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* description */}
          <Tabs />
        </div>
      </Container>
    </>
  );
}
