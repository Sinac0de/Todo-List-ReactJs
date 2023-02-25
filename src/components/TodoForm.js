import { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const changeHandler = (e) => {
    setTodo(e.target.value);
    console.log("change");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <form onSubmit={submitHandler} className="container w-fit">
      <input
        onChange={changeHandler}
        value={todo}
        type="text"
        className="p-2"
      />
      <button type="submit" className="bg-slate-300 p-2">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
