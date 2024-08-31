import React from "react";
import trashImg from "../assets/trash-can-solid.svg";

const TaskBox = ({ taskData, deletTask }) => {
  return (
    <div className="h-full w-80 p-4 text-wrap flex justify-between items-start bg-emerald-200 rounded-xl">
      {/* main task paragraph */}
      <p className="max-w-[80%] text-wrap break-words text-md sm:text-xl text-black ">
        {taskData}
      </p>

      {/* task delet button */}
      <button onClick={deletTask}>
        <img src={trashImg} alt="Delet the task" className="h-8" />
      </button>
    </div>
  );
};

export default TaskBox;
