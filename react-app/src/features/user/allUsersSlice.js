import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
  name: "allusers",
  initialState: {},
  reducers: {
    setallusers(state, action) {
      const users = action.payload;
      return users;
    },
  },
});

export const { setallusers } = allUsersSlice.actions;

export default allUsersSlice.reducer;
