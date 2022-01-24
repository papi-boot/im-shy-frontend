import { configureStore } from "@reduxjs/toolkit";
import userReducer from "feature/user/user";
import messageReducer from "feature/message/message";
import chatReducer from "feature/chat/chat";
import chatInfoReducer from "feature/chat/chat_info";
import chatLinkReducer from "feature/chat/chat_link";
export const store = configureStore({
  reducer: {
    user: userReducer,
    message: messageReducer,
    chat: chatReducer,
    chat_info: chatInfoReducer,
    chat_link: chatLinkReducer
  },
});
