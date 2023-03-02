import Todo from "./Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  const renderTodo = () => {
    if (todos.length === 0) return <div>Add some Todo</div>;
    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodo()}</div>;
};

export default TodoList;
