import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../src/redux/authSlice";
import cartReducer from "../src/redux/cartSlice";
import productReducer from "../src/redux/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;
