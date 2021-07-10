import Footer from "./Footer";
import TodoCard from "./TodoCard";
import { useState } from "react";

export default function Container() {
  // below are the states-
  // This is to get the input's title from the footer form.
  const [todoTitle, setTodoTitle] = useState(undefined);

  // This is to get input's description from the footer form
  const [todoDescription, setTodoDescription] = useState(undefined);

  // This is to display the todo card only when it is true.
  const [todoDisplay, setTodoDisplay] = useState(false);

  // This function is passed to footer component (as prop) and gets triggered only when form's button is clicked.
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

  function setTodoDisplayAgain() {
    setTodoDisplay(false);
  }

  return (
    <>
      <Footer onSubmit={getData} />
      {todoDisplay && (
        <TodoCard
          title={todoTitle}
          description={todoDescription}
          showTodoCard={setTodoDisplayAgain}
        ></TodoCard>
      )}
    </>
  );
}
