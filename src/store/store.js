import { configureStore } from "@reduxjs/toolkit";
import userReducer from "feature/user/user";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
