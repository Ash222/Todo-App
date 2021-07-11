import classes from "./todocard.module.css";

function TodoCard(props) {
  return (
    <div className={classes.todoCard}>
      {console.log("todo component is called.")}
      <h2 className={classes.todoTitle}>
        {props.title === undefined ? "Add Todo Title" : props.title}
      </h2>
      <p className={classes.todoDescription}>
        {props.description === undefined
          ? "Add some todo description"
          : props.description}
      </p>
      <div className={classes.todoBtnContainer}>
        <button className={classes.todoBtn} onClick={props.delete}>
          Delete
        </button>
        <button className={classes.todoBtn}>Edit</button>
      </div>
    </div>
  );
}

export default TodoCard;
