const Todo = ({ todo, onComplete }) => {
  return (
    <div className="flex w-96 bg-slate-500 items-center justify-between m-2 p-2">
      <p className={todo.isCompleted ? "line-through opacity-60" : ""}>
        {todo.text}
      </p>
      <div className="flex gap-4">
        <button>Edit</button>
        <button onClick={onComplete}>Completed</button>
      </div>
    </div>
  );
};

export default Todo;
