import { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please enter a text first!");
      return;
    }

    props.submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler} className="flex justify-between gap-1 w-96">
      <input
        onChange={changeHandler}
        value={input}
        type="text"
        className="px-3 py-1 w-full border border-slate-300 rounded-md text-sm focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-700"
        placeholder={props.edit ? "Update todo..." : "Add todo..."}
        ref={inputRef}
      />
      <button
        type="submit"
        className=" bg-violet-700 text-white px-3 py-1 rounded-md"
      >
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
