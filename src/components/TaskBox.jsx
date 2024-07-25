import React from "react";
import trashImg from "../assets/trash-can-solid.svg";

const TaskBox = ({ taskData, deletTask }) => {
  return (
    <div className="h-auto m-3 p-3 border-2 flex justify-between items-start bg-emerald-200 rounded-xl">
      {/* main task paragraph */}
      <p className="w-[80%] break-words text-xl items-start">{taskData}</p>

      {/* delet button */}
      <button>
        <img src={trashImg} alt="Delet" className="h-8" onClick={deletTask} />
      </button>
    </div>
  );
};

export default TaskBox;
