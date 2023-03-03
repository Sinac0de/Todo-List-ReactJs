import TodoForm from "./TodoForm";
import { useState } from "react";

import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
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

  const removeTodo = (id) => {
    const updatedTodo = [...todos].filter((item) => item.id !== id);
    setTodos(updatedTodo);
  };

  const updateTodo = (id, newValue) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const todo = { ...todos[todoIndex], text: newValue };
    const updatedTodos = [...todos];
    updatedTodos[todoIndex] = todo;
    setTodos(updatedTodos);
  };

  return (
    <div className=" w-6/12 p-4 rounded-lg flex flex-col items-center content-center ">
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={todos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
