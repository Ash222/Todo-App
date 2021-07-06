function TodoCard({
  title = "Todo Title",
  description = "Description about the title",
}) {
  return (
    <div className="todo-card">
      <h2 className="todo-title">{title}</h2>
      <p className="todo-description">{description}</p>
      <button className="todo-delete-btn">Delete</button>
    </div>
  );
}

export default TodoCard;
