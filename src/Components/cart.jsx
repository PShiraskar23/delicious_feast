import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Counter from "./counter";
import emptyCartLogo from "../assets/empty_cart.png";
import { IoCloseSharp } from "react-icons/io5";

const Cart = ({ setIsCartOpen, isCartOpen }) => {
  const navigate = useNavigate();
  const cartRef = useRef(null);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((qty, item) => qty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.price * item.qty,
    0
  );

  const placeOrder = () => {
    navigate("/success");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (cartRef.current && !cartRef.current.contains(e.target)) {
        // setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-row w-full h-full bg-green-400">
      <div className="w-[70vw] bg-blue-400"></div>
      <div
        className={`h-screen w-[300px] bg-gray-50 fixed right-0 top-0 shadow-xl 
    ${isCartOpen ? "translate-x-0" : "translate-x-full"} 
    transition-all duration-500 ease-in-out z-50`}
        ref={cartRef}
      >
        <div className="flex items-center justify-between p-5">
          <p className="text-xl font-semibold">My Cart</p>
          <span
            className="scale-125 cursor-pointer hover:bg-gray-100 p-1 rounded-full"
            onClick={() => setIsCartOpen(false)}
          >
            <IoCloseSharp />
          </span>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col items-center h-[580px]  overflow-scroll scrollbar-hide scroll-m-0">
            {cartItems.map((item) => {
              return (
                <div
                  key={item?.id}
                  className="h-[80px] w-[280px] flex justify-around items-center my-1  bg-white  py-3 rounded-lg shadow-lg"
                >
                  <div>
                    <img src={item?.img} alt="pizza" className="h-10 w-12" />
                  </div>
                  <div className="text-[12px] w-[130px] font-semibold">
                    {item?.name}
                  </div>
                  <div className="flex flex-col justify-center items-center gap-1">
                    <p className=" font-semibold text-green-500">
                      ₹ {item?.price}
                    </p>
                    <Counter item={item && item} />
                  </div>
                </div>
              );
            })}

            <div className="w-[280px] flex flex-col items-start my-2 bg-white p-3 rounded-lg shadow-lg">
              <p className="my-1  font-semibold">Bill details</p>
              <div className="w-full flex justify-between text-sm">
                <p>Items Quantity</p>
                <p>{totalQty}</p>
              </div>
              <div className="w-full flex justify-between text-sm">
                <p>Items Total</p>
                <p>₹ {totalPrice}</p>
              </div>
              <div className="w-full flex justify-between text-sm mb-1">
                <p>Platform Charge</p>
                <p>₹ 5</p>
              </div>
              <div className="w-full flex justify-between mt-1 border-t-2  font-semibold">
                <p>Grand Total</p>
                <p>₹ {totalPrice + 5}</p>
              </div>
            </div>
            <button
              className="flex justify-between items-center mx-3 px-5 h-12 w-[280px] text-white bg-green-600 rounded-xl fixed bottom-5 cursor-pointer"
              onClick={placeOrder}
            >
              <p>₹ {totalPrice + 5}</p>
              <p>Checkout</p>
            </button>
          </div>
        ) : (
          <div className="flex flex-col  items-center gap-[100px] my-5">
            <p className="text-sm font-semibold">
              You don't have any items in your cart
            </p>
            <p>
              <img src={emptyCartLogo} alt="empty" className="h-[200px] " />
            </p>
            <button
              className="px-4 py-2 text-white bg-green-600 rounded-xl"
              onClick={() => setIsCartOpen(false)}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
