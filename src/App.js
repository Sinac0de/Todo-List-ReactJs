import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mx-2 mt-8 mb-3 font-Oleo text-5xl text-white">
        TodoList App
      </h1>
      <TodoApp />
    </div>
  );
};

export default App;
