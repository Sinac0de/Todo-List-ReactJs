import TodoForm from "./TodoForm";
import { useEffect, useState } from "react";

import TodoList from "./TodoList";
import FilterTodos from "./FilterTodos";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption, setSelectedOption] = useState({
    value: "all",
    label: "All",
  });

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

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

  const filterTodos = (option) => {
    switch (option) {
      case "completed":
        setFilteredTodos(todos.filter((t) => t.isCompleted));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e);
    filterTodos(e.value);
  };

  return (
    <div className="w-full md:max-w-xl p-4 rounded-lg flex flex-col items-center content-center ">
      <div className="w-full">
        <TodoForm submitTodo={addTodo} />
        {todos.length ? (
          <FilterTodos
            selectedOption={selectedOption}
            onChange={selectHandler}
          />
        ) : null}
      </div>
      <TodoList
        todos={filteredTodos}
        onComplete={completeTodo}
        onDelete={removeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
