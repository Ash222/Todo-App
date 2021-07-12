import TodoCard from "./../todo/TodoCard";
import Todoform from "./../todoform/Todoform";
import { useState } from "react";
import style from "./container.module.css";

export default function Container() {
  // below are the states-
  // This is to get the input's title from the footer form.
  const [todoTitle, setTodoTitle] = useState(undefined);

  // This is to get input's description from the footer form
  const [todoDescription, setTodoDescription] = useState(undefined);

  // This is to display the todo card only when it is true , ie anything but 0.
  const [todoDisplay, setTodoDisplay] = useState(0);

  // This function is passed to footer component (as prop) and gets triggered only when form's button is clicked.

  function getData(event) {
    event.preventDefault();
    console.log("form is submit.");

    document.getElementById("title").value === ""
      ? setTodoTitle(undefined)
      : setTodoTitle(document.getElementById("title").value);

    document.getElementById("description").value === ""
      ? setTodoDescription(undefined)
      : setTodoDescription(document.getElementById("description").value);

    //Why todoTitle and todoDescription is holding the previous states, even though I'm changing it with each click?
    console.log(todoTitle);
    console.log(todoDescription);
    console.log("before todoDisplay :" + todoDisplay);

    setTodoDisplay(todoDisplay + 1);
    console.log("after setting todoDisplay : " + todoDisplay);
  }

  // This function is going to be passed to TodoCard component when clicked it will delete the coponent.

  function deleteTodoCard(event) {
    console.log("Inside delete function when delete key is clicked.");
    const child = event.target.parentNode.parentNode;
    console.log(child);
    console.log(event.target.parentNode.parentNode.parentNode);

    // setTodoDisplay(todoDisplay - 1);

    // I'm able to remove the card. But it is not being shown again when I submit the form again.Since the state todoDisplay is set to true.
    event.target.parentNode.parentNode.parentNode.removeChild(child);
  }

  return (
    <div className={style.container}>
      <Todoform onSubmit={getData} />
      {(() => {
        if (todoDisplay) {
          console.log("Inside the self invoked function. " + todoDisplay);
          return (
            <TodoCard
              title={todoTitle}
              description={todoDescription}
              delete={deleteTodoCard}
            />
          );
        } else return null;
      })()}
    </div>
  );
}
