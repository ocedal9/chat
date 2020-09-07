import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "messages",
  initialState: false,
  reducers: {
    setMessage(state, action) {
      const message = action.payload;
      return message;
    },
  },
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
