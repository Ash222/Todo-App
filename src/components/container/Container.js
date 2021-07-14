import TodoCard from "./../todo/TodoCard";
import Todoform from "./../todoform/Todoform";
import { useState } from "react";
import style from "./container.module.css";

export default function Container() {
  // This is todo list which is an array which contains the todolist object.
  const [todoList, setTodoList] = useState([]);

  // This function definition will pass to Todoform as
  function getData(todos) {
    const newTodoList = [...todoList, todos];

    setTodoList(newTodoList);
  }

  // This function definition will pass to TodoCard component as prop.
  function todoCardDelete(cardId) {
    const newTodoList = todoList.filter((todoCard) => {
      return todoCard.id !== cardId;
    });

    setTodoList(newTodoList);
  }

  return (
    <div className={style.container}>
      <Todoform onSubmit={getData} />
      <TodoCard todo={todoList} delete={todoCardDelete}></TodoCard>
    </div>
  );
}
