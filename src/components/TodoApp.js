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

  const completeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[todoIndex] }; //clone todo item
    todo.isCompleted = !todo.isCompleted; // toggle the completed property
    const updatedTodos = [...todos]; //clone todos
    updatedTodos[todoIndex] = todo;
    setTodos(updatedTodos);
  };

  return (
    <div className="container flex flex-col items-center content-center ">
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} onComplete={completeTodo} />
    </div>
  );
};

export default TodoApp;
