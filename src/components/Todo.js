const Todo = ({ todo }) => {
  return (
    <div key={todo.id}>
      <p>{todo.text}</p>
      <button>Edit</button>
      <button>Completed</button>
    </div>
  );
};

export default Todo;
