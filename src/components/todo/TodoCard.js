import style from "./todocard.module.css";

function TodoCard(props) {
  return (
    <>
      {props.todo.length === 0 ? null : (
        <div className={style.todoCardContainer}>
          {props.todo.map((todoCard) => {
            return (
              <div className={style.todoCard} key={todoCard.id}>
                <div className={style.todoCardDetails}>
                  <h5 className={style.todoCardTitle}>
                    {todoCard.titleText === "" ? "Todo" : todoCard.titleText}
                  </h5>
                  <p className={style.todoCardDescription}>
                    {todoCard.descriptionText === ""
                      ? "Todo description"
                      : todoCard.descriptionText}
                  </p>
                </div>
                <button
                  className={style.todoCardBtn}
                  onClick={() => props.delete(todoCard.id)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default TodoCard;
