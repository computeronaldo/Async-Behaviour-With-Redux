import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { cartItems: [], showCart: false };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
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
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
