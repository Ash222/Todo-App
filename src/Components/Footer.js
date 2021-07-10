import { useState } from "react";
import TodoCard from "./TodoCard";

export default function Footer() {
  const [todoTitle, setTodoTitle] = useState(undefined);
  const [todoDescription, setTodoDescription] = useState(undefined);
  const [todoDisplay, setTodoDisplay] = useState(false);

  function getData(event) {
    document.getElementById("title").value === ""
      ? setTodoTitle(undefined)
      : setTodoTitle(document.getElementById("title").value);

    document.getElementById("description").value === ""
      ? setTodoDescription(undefined)
      : setTodoDescription(document.getElementById("description").value);

    //Why todoTitle and todoDescription is holding the previous states, even though I'm changing it with each click?
    console.log(todoTitle);
    console.log(todoDescription);

    setTodoDisplay(true);
  }

  return (
    <>
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
      {todoDisplay && (
        <TodoCard title={todoTitle} description={todoDescription}></TodoCard>
      )}
    </>
  );
}
