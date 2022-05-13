import { createSlice } from "@reduxjs/toolkit";

const initialValueState = {};
const chatInfoSlice = createSlice({
  name: "chat_info",
  initialState: {
    value: {
      ...initialValueState,
    },
  },
  reducers: {
    renderChatInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { renderChatInfo } = chatInfoSlice.actions;
export default chatInfoSlice.reducer;
