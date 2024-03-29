import { IconContext } from "react-icons";
import { TiTick, TiTrash, TiPencil, TiTickOutline } from "react-icons/ti";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div
      className={`flex w-full border rounded-md items-center justify-between my-2 p-2 shadow bg-white ${
        todo.isCompleted
          ? "translate-x-1 md:translate-x-3 transition-all"
          : "transition-all"
      }`}
    >
      <p
        className={`${
          todo.isCompleted ? "line-through opacity-40 " : ""
        } font-semibold`}
      >
        {todo.text}
      </p>
      <div className="flex gap-4">
        {!todo.isCompleted && (
          <button onClick={onEdit}>
            <IconContext.Provider
              value={{ className: "text-xl text-blue-400" }}
            >
              <TiPencil />
            </IconContext.Provider>
          </button>
        )}

        <button onClick={onDelete}>
          <IconContext.Provider value={{ className: "text-xl text-red-400" }}>
            <TiTrash />
          </IconContext.Provider>
        </button>
        <button onClick={onComplete}>
          <IconContext.Provider value={{ className: "text-xl text-green-400" }}>
            {todo.isCompleted ? <TiTick /> : <TiTickOutline />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Todo;
