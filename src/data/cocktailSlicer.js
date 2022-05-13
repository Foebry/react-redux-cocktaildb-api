import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  cocktailId: undefined,
};

const cocktailSlice = createSlice({
  name: "cocktailState",
  initialState,
  reducers: {
    setSearchValue(state, { payload: value }) {
      state.searchValue = value;
    },
    showDetail(state, { payload: id }) {
      state.cocktailId = id;
    },
    hideDetail(state) {
      state.cocktailId = undefined;
    },
  },
});

export default cocktailSlice;
export const { setSearchValue, showDetail, hideDetail } = cocktailSlice.actions;
