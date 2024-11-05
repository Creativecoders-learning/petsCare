import { FaShoppingCart } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../../../UI/Button";
import { useEffect, useState } from "react";

export default function ShoppingCart({handleProgress}) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storedCartProducts = JSON.parse(localStorage.getItem("cartProducts"));
    setCartProducts(storedCartProducts);
  }, [cartProducts]);

  const calculateTotalAmount = () => {
    return cartProducts.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleDeleteClick = (productId) => {
    const updatedCartProducts = cartProducts.filter(
      (item) => item.id !== productId
    );

    localStorage.setItem("cartProducts", JSON.stringify(updatedCartProducts));
  };

  return (
    <>
      {cartProducts?.length === 0 ? (
        <div className="h-full flex flex-col gap-2 items-center justify-center text-xl font-medium">
          <FaShoppingCart className="text-6xl text-gray-500" />
          <p>No Products in the cart</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="w-[70%] flex flex-col gap-6  items-start px-10 overflow-y-scroll">
              {cartProducts?.map((item) => (
                <div
                  className="flex items-center justify-between w-full h-[100px] overflow-hidden border-b border-gray-400 "
                  key={item.id}
                >
                  <div className="flex items-center justify-start gap-4 h-full">
                    <span
                      className="text-xl cursor-pointer"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      <FaRegTrashAlt />
                    </span>
                    <div className="w-full h-full p-2">
                      <img
                        className="w-full h-full object-contain"
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="w-[80%] flex justify-between">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                    <span>${item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* checkout info */}
            <div className="w-1/2 flex flex-col gap-4 p-4">
              <div className="flex flex-col justify-between font-medium border border-gray-400 bg-[#F5F2EB] text-xl ">
                <div className="flex justify-between p-6 border-b border-gray-400">
                  <span>SubTotal:</span>
                  <span>${calculateTotalAmount().toFixed(2)}</span>
                </div>
                <div className="flex justify-between px-6 py-10">
                  <span>Delivery Charge</span>
                  <span>$40</span>
                </div>
                <div className="flex justify-between p-6 border-t border-gray-400">
                  <span>Total:</span>
                  <span>${(calculateTotalAmount() + 40).toFixed(2)}</span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-4 items-center">
                <Button primary onClick={() => handleProgress('Checkout')}>Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
