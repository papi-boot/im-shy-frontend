import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  my_message: [],
};

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: {
      ...initialStateValue,
    },
  },
  reducers: {
    fetchMyMessages: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { fetchMyMessages } = messageSlice.actions;

export default messageSlice.reducer;
