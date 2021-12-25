import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  user_id: "",
  user_name: "",
  user_email: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      ...initialStateValue,
    },
  },
  reducers: {
    signUpRequest: (state, action) => {
      state.value = action.payload;
    },
    signInRequest: (state, action) => {
      state.value = action.payload;
    },
    checkAuthState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signUpRequest, signInRequest, checkAuthState } = userSlice.actions;

export default userSlice.reducer;
