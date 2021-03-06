import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cocktailApi from "./cocktailApi";
import cocktailSlice from "./cocktailSlicer";

const store = configureStore({
  reducer: combineReducers({
    [cocktailApi.reducerPath]: cocktailApi.reducer,
    [cocktailSlice.name]: cocktailSlice.reducer,
  }),
});

export default store;
