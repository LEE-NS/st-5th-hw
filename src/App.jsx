import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput";
import TextList from "./components/TextList";
import { TodoContext } from "./context/TodoContext";

function App() {
  // TODO: texts 를 context api 로 리팩터링 하세요.
  const [texts, setTexts] = useState(() =>
    localStorage.getItem("texts")
      ? JSON.parse(localStorage.getItem("texts"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("texts", JSON.stringify(texts));
  }, [texts]);

  const onAddText = (text) => {
    setTexts((prevTexts) => [...prevTexts, text]);
  };

  return (
    <div>
      <TodoContext.Provider value={{ texts, setTexts, onAddText }}>
        <h1>Text Input and Listing</h1>
        <TextInput />
        <TextList texts={texts} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
