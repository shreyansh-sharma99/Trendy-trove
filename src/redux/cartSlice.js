import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Could not load cart from localStorage", e);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state.items);
    localStorage.setItem("cart", serializedState);
  } catch (e) {
    console.error("Could not save cart to localStorage", e);
  }
};

const initialState = {
  items: loadFromLocalStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }
      saveToLocalStorage(state);
    },
    clearCart(state) {
      state.items = [];
      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
