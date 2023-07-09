import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.cartItems = action.payload.items;
    },
    addToCart(state, action) {
      state.changed = true;
      const targetItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (!targetItem) {
        const newItem = {
          quantity: 1,
          total: action.payload.price,
          title: action.payload.title,
          id: action.payload.id,
          price: action.payload.price,
        };
        state.cartItems.push(newItem);
      } else {
        targetItem.quantity = targetItem.quantity + 1;
        targetItem.total = targetItem.price * targetItem.quantity;
      }
    },
    removeFromCart(state, action) {
      state.changed = true;
      const targetItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (targetItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        targetItem.quantity = targetItem.quantity - 1;
        targetItem.total = targetItem.price * targetItem.quantity;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
