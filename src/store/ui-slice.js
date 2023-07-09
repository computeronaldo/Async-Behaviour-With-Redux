import { createSlice } from "@reduxjs/toolkit";

const initialToggleState = { showCart: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialToggleState,
  reducers: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
