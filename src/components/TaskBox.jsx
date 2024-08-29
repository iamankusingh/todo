import React from "react";
import trashImg from "../assets/trash-can-solid.svg";

const TaskBox = ({ taskData, deletTask }) => {
  return (
    <div className="h-auto w-auto p-4 text-wrap flex justify-between items-start bg-emerald-200 rounded-xl">
      {/* main task paragraph */}
      <p className="w-[80%] text-wrap break-words text-md sm:text-xl text-black items-start">{taskData}</p>

      {/* task delet button */}
      <button>
        <img src={trashImg} alt="Delet" className="h-8" onClick={deletTask} />
      </button>
    </div>
  );
};

export default TaskBox;
