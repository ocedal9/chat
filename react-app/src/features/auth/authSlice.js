import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    isAuth(state) {
      return true;
    },
    notAuth: (state) => false,
  },
});

export const { isAuth, notAuth } = authSlice.actions;

export default authSlice.reducer;
