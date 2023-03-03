import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-2 text-5xl">TodoList App</h1>
      <TodoApp />
    </div>
  );
};

export default App;
