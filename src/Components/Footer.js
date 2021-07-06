import { useState } from "react";

export default function Footer() {
  const [todoTitle, setTodoTitle] = useState(null);
  const [todoDescription, setTodoDescription] = useState(null);

  function getData() {}

  return (
    <div className="footer">
      <input
        type="text"
        name="title"
        placeholder="Title of todo"
        onChange={(e) => {
          setTodoTitle(e.target.value);
        }}
      />
      <input
        type="text"
        name="description"
        placeholder="Describe your todo"
        onChange={(e) => {
          setTodoDescription(e.target.value);
        }}
      />
      <button onClick={getData}>Add</button>
    </div>
  );
}
