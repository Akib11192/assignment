import { configureStore } from "@reduxjs/toolkit";
import authApi from "./auth-api";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (dm) => dm().concat(authApi.middleware),
});
