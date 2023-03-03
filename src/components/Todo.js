import { IconContext } from "react-icons";
import { TiTick, TiTrash, TiPencil, TiTickOutline } from "react-icons/ti";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div className="flex w-96 border rounded-md items-center justify-between m-2 p-2">
      <p className={todo.isCompleted ? "line-through opacity-40 " : ""}>
        {todo.text}
      </p>
      <div className="flex gap-4">
        <button onClick={onEdit}>
          <IconContext.Provider value={{ className: "text-xl text-blue-400" }}>
            <TiPencil />
          </IconContext.Provider>
        </button>
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
