import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please enter a text first!");
      return;
    }

    props.addTodoHandler(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="container w-fit">
      <input
        onChange={changeHandler}
        value={input}
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
