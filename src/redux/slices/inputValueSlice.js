import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const inputValueSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    inputValueSet: (state, action) => {
      return action.payload;
    },
  },
});

export const { inputValueSet } = inputValueSlice.actions;
export default inputValueSlice.reducer;
