import { useState } from "react";
import TodoCard from "./TodoCard";

export default function Footer() {
  const [todoTitle, setTodoTitle] = useState(null);
  const [todoDescription, setTodoDescription] = useState(null);
  const [todoDisplay, setTodoDisplay] = useState(false);

  function getData(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    console.log(title);
    console.log(description);
    setTodoTitle(title);
    setTodoDescription(description);
    setTodoDisplay(true);
  }

  return (
    <>
      {todoDisplay && (
        <TodoCard title={todoTitle} description={todoDescription} />
      )}
      <div className="footer">
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of todo"
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Describe your todo"
        />
        <button onClick={getData}>Add</button>
      </div>
    </>
  );
}
