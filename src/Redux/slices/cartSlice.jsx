import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      let existItem = state.cart.find((item) => item.id === action.payload.id);

      if (existItem) {
        existItem.qty = existItem.qty + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      let existItem = state.cart.find(
        (item) => item.id === action.payload.item.id
      );

      if (existItem.qty > 1) {
        existItem.qty = existItem.qty - 1;
      } else {
        state.cart = state.cart.filter(
          (item) => item.id !== action.payload.item.id
        );
      }
    },
    emptyCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = CartSlice.actions;
export default CartSlice.reducer;
