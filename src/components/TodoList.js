import Todo from "./Todo";

const TodoList = ({ todos }) => {
  const renderTodo = () => {
    if (todos.length === 0) return <div>Add some Todo</div>;
    return todos.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };

  return <div>{renderTodo()}</div>;
};

export default TodoList;
