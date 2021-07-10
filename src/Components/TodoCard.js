import classes from "./todocard.module.css";

function TodoCard(props) {
  function deleteTodoCard(event) {
    const child = event.target.parentNode.parentNode;
    console.log(child);
    console.log(event.target.parentNode.parentNode.parentNode);
    // I'm able to remove the card. But it is not being shown again when I submit the form again.
    event.target.parentNode.parentNode.parentNode.removeChild(child);

    // Why is it that when I uncomment to below line it gives me an error saying "node to remove is not a child node"

    // props.showTodoCard();
  }

  return (
    <div className={classes.todoCard}>
      <h2 className={classes.todoTitle}>
        {props.title === undefined ? "Add Todo Title" : props.title}
      </h2>
      <p className={classes.todoDescription}>
        {props.description === undefined
          ? "Add some todo description"
          : props.description}
      </p>
      <div className={classes.todoBtnContainer}>
        <button className={classes.todoBtn} onClick={deleteTodoCard}>
          Delete
        </button>
        <button className={classes.todoBtn}>Edit</button>
      </div>
    </div>
  );
}

export default TodoCard;
