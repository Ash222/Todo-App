import classes from "./todocard.module.css";

function TodoCard({
  title = "Add Todo Title",
  description = "Add some description about todo",
}) {
  return (
    <div className={classes.todoCard}>
      <h2 className={classes.todoTitle}>{title}</h2>
      <p className={classes.todoDescription}>{description}</p>
      <div className={classes.todoBtnContainer}>
        <button className={classes.todoBtn}>Delete</button>
        <button className={classes.todoBtn}>Edit</button>
      </div>
    </div>
  );
}

export default TodoCard;
