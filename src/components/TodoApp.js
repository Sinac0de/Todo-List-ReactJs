import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="container flex flex-col items-center content-center ">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoApp;
