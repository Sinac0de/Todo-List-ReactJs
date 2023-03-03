import TodoApp from "./components/TodoApp";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mx-2 mt-8 mb-3 font-Oleo text-5xl text-transparent bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text">
        TodoList App
      </h1>
      <TodoApp />
    </div>
  );
};

export default App;
