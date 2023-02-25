import TodoForm from "./TodoForm";
import { useState } from "react";

import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Date.now(),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container flex flex-col items-center content-center ">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
