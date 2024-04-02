import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./Features/api/apiSlice";
import productSlice from "./Features/api/productSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart:productSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Disable serializable check
  }).concat(apiSlice.middleware),
});