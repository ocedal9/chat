import { createSlice } from "@reduxjs/toolkit";

const contSlice = createSlice({
  name: "cont",
  initialState: [],
  reducers: {
    setcontacts(state, action) {
      const contacts = action.payload;
      return contacts;
    },
  },
});

export const { setcontacts } = contSlice.actions;

export default contSlice.reducer;
