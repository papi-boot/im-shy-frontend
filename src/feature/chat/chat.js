import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  chat: {},
  chat_count: 0,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    value: {
      ...initialStateValue,
    },
  },
  reducers: {
    fetchChatList: (state, action) => {
      state.value.chat = action.payload;
    },
    addChatCount: (state, action) => {
      state.value.chat_count = action.payload;
    }
  },
});

export const { fetchChatList, addChatCount } = chatSlice.actions;

export default chatSlice.reducer;
