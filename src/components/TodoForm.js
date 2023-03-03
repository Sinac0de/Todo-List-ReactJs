import { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

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
    <form onSubmit={submitHandler} className="w-96 flex justify-between gap-1">
      <input
        onChange={changeHandler}
        value={input}
        type="text"
        className="w-full border border-slate-300 rounded-md text-sm focus:outline-none focus:border-violet-700 focus:ring-1 focus:ring-violet-700 px-3 py-1 shadow"
        placeholder={props.edit ? "Update todo..." : "Add todo..."}
        ref={inputRef}
      />
      <button
        type="submit"
        className=" bg-violet-700 text-white rounded-md px-3 py-1 shadow"
      >
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
