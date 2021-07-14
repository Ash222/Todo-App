import style from "./todoform.module.css";
import { useState } from "react";

export default function Todoform({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // This is to set the title of the todo card.
  function titleHandler(event) {
    setTitle(event.target.value);
  }

  // This is to set the description whenever user change the value.If it is not done onChange then the value will not be captured until unless enter is press in input tag, which is not what we want.
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }

  // This is to handle the form submit.
  function handleFormSubmit(event) {
    // This is to prevent the default execution of the form.
    event.preventDefault();

    // Every todo card will have a unique id. The object is going to send to getData() which is defined in Container component. That getData function defination is passed to this component via prop onSubmit.
    onSubmit({
      id: Date.now(),
      titleText: title,
      descriptionText: description,
    });

    // We're setting the value of title and description to empty string so that after the form gets submit the values don't get persist their in the input tag.
    setTitle("");
    setDescription("");
  }

  return (
    <>
      <form className={style.form}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of todo"
          autoComplete="new-password"
          onChange={titleHandler}
          value={title}
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Describe your todo"
          autoCapitalize="new-password"
          onChange={descriptionHandler}
          value={description}
        />
        <button onClick={handleFormSubmit}>Add</button>
      </form>
      <hr></hr>
    </>
  );
}
