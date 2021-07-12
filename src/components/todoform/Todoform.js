import style from "./todoform.module.css";

export default function Todoform({ onSubmit }) {
  return (
    <>
      <div className={style.form}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title of todo"
          autoComplete="new-password"
        />
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Describe your todo"
          autoCapitalize="new-password"
        />
        <button
          onClick={
            // () => console.log("Todo Form's add button is clicked")
            onSubmit
          }
        >
          Add
        </button>
      </div>
      <hr></hr>
    </>
  );
}
