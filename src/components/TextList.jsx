import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export default function TextList() {
  const { texts } = useContext(TodoContext);
  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
