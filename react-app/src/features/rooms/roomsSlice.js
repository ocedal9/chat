import { createSlice } from "@reduxjs/toolkit";

const roomsSlice = createSlice({
  name: "rooms",
  initialState: {},
  reducers: {
    setRooms(state, action) {
      const rooms = action.payload;
      return rooms;
    },
  },
});

export const { setRooms } = roomsSlice.actions;

export default roomsSlice.reducer;
