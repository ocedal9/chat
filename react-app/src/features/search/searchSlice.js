import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: false,
  reducers: {
    // inSearch(state) {
    //   state.isInSearch = true;
    // },
    // outSearch: (state) => {
    //   state.isInSearch = false;
    // },
    setSearch: (state, action) => {
      return action.payload;
    },
  },
});

export const { inSearch, outSearch, setSearch } = searchSlice.actions;

export default searchSlice.reducer;
