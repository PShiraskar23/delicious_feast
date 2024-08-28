import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/slices/cartSlice";

const Counter = ({ item }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cart.find((cartItem) => cartItem.id === item.id)
  );
  const itemQuantity = cartItem ? cartItem.qty : 0;

  const increaseQuantity = (item, showAlert) => {
    if (itemQuantity < 9) {
      dispatch(addToCart({ ...item, qty: 1 }));

      if (showAlert) {
        toast.success(`${item.name} added to cart`, {
          duration: 3000,
        });
      }
    } else {
      toast.error("Item quantity should be less than 10", {
        duration: 5000,
      });
    }
  };

  const decreaseQuantity = () => {
    if (itemQuantity > 0) {
      item = {
        ...item,
        qty: 1,
      };
      console.log(itemQuantity);
      if (itemQuantity === 1) {
        toast.error(`${item.name} removed from cart`, {
          duration: 3000,
        });
      }

      dispatch(removeFromCart({ item }));
    }
  };

  return (
    <>
      {itemQuantity > 0 ? (
        <div className="h-8 w-[75px] flex gap-1 justify-around items-center rounded-lg p-1 bg-green-600 text-white">
          <button className=" px-2" onClick={() => decreaseQuantity(item)}>
            {" "}
            -{" "}
          </button>
          <p className="text-md ">{itemQuantity}</p>
          <button
            className=" px-2"
            onClick={() => increaseQuantity(item, false)}
          >
            {" "}
            +{" "}
          </button>
        </div>
      ) : (
        <button
          className="h-8 w-[75px] rounded-lg p-1 bg-green-600 text-white"
          onClick={() => increaseQuantity(item, true)}
        >
          Add
        </button>
      )}
    </>
  );
};

export default Counter;
