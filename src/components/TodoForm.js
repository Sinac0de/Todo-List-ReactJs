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
    <form
      onSubmit={submitHandler}
      className="border border-slate-800 flex justify-between "
    >
      <input
        onChange={changeHandler}
        value={input}
        type="text"
        className="p-2"
        placeholder={props.edit ? "Update todo..." : "Add todo..."}
        ref={inputRef}
      />
      <button type="submit" className="bg-slate-300 p-2">
        {props.edit ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default TodoForm;
