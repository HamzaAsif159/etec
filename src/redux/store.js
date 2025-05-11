import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import featuredProductsReducer from "./slices/featuredProductsSlice";
import productDetailReducer from "./slices/productDetailSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    featuredProducts: featuredProductsReducer,
    productDetail: productDetailReducer,
  },
});

export default store;
