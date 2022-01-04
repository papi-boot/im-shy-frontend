import { configureStore } from "@reduxjs/toolkit";
import userReducer from "feature/user/user";
import messageReducer from "feature/message/message";
export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
  },
});
