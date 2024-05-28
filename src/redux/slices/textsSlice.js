import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : ["샘플 텍스트 1", "샘플 텍스트 2"];

const textsSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {
    onAddText: (state, action) => {
      const totalTexts = [...state, action.payload];
      localStorage.setItem("texts", JSON.stringify(totalTexts));
      return totalTexts;
    },
  },
});

export const { onAddText } = textsSlice.actions;
export default textsSlice.reducer;
