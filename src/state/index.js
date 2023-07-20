import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  fav: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAddToCart: (state, action) => {
      state.cart.push(action.payload.product);
    },
    emptyCart : (state) =>
    {
      state.cart = []
    },
    setRemoveFromCart: (state, action) => {
      let removed = false;
      state.cart = state.cart.filter((product) => {
        if (product.id === action.payload.id && !removed) {
          removed = true;
          return false;
        }
        return true;
      });
    },
  },
});

export const { setAddToCart, setRemoveFromCart, emptyCart } = userSlice.actions;
export default userSlice.reducer;
