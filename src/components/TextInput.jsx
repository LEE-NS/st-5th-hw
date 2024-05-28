import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputValueSet } from "../redux/slices/inputValueSlice";
import { onAddText } from "../redux/slices/textsSlice";

function TextInput() {
  const dispatch = useDispatch();

  const inputValue = useSelector((state) => state.inputValue);

  const handleChange = (e) => {
    dispatch(inputValueSet(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(onAddText(inputValue));
      dispatch(inputValueSet(""));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TextInput;
