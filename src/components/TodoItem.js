const TodoItem = ({ todo }) => {
  return (
    <li className={`${todo.done ? "checked" : ""}`}>
      {todo.tittle} <span className="close">x</span>
    </li>
  );
};

export default TodoItem;
