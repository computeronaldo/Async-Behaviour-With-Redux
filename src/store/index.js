import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    toggleCart: uiSlice,
  },
});

export default store;
