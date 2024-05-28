import { configureStore } from "@reduxjs/toolkit";
import inputValueSlice from "../slices/inputValueSlice";
import textsSlice from "../slices/textsSlice";

const store = configureStore({
  reducer: {
    texts: textsSlice,
    inputValue: inputValueSlice,
  },
});

export default store;
