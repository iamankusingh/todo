import React, { useState } from "react";

const TaskInput = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [inputValue];
    onSubmit(data);
    setInputValue("");
  };

  return (
    <form
      className="p-2 flex justify-center gap-2 text-black"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter your task..."
        required
        className="p-2 text-xl rounded-xl max-[420px]:w-[70%] cursor-default"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        type="submit"
        className="max-[420px]:p-3 px-6 text-xl bg-blue-300 rounded-xl hover:bg-blue-400 transition-all active:bg-blue-400"
      >
        Add
      </button>
    </form>
  );
};

export default TaskInput;
