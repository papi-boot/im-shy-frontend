import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = {
  link: "",
};

const chatLinkSlice = createSlice({
  name: "chat_link",
  initialState: {
    value: {
      intialStateValue,
    },
  },
  reducers: {
    getChatLinkParams: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getChatLinkParams } = chatLinkSlice.actions;
export default chatLinkSlice.reducer;
