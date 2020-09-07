import { createSlice } from "@reduxjs/toolkit";

const notiSlice = createSlice({
  name: "notifications",
  initialState: [],
  reducers: {
    setallnotis(state, action) {
      const notis = action.payload;
      return notis;
    },
  },
});

export const { setallnotis } = notiSlice.actions;
export default notiSlice.reducer;
