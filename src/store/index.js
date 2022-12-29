import { configureStore } from "@reduxjs/toolkit";
import { iTunesApi } from "./iTunesApi";

export default configureStore({
  reducer: {
    [iTunesApi.reducerPath]: iTunesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(iTunesApi.middleware),
});
