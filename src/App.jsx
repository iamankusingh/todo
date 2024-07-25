// Todo app in react
import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import noTaskImg from "./assets/kanban-board.png";
import TaskBox from "./components/TaskBox";

const tododKey = "todoApp";

function App() {
  // main task list state
  const [taskList, setTaskList] = useState([]);

  // data is input value coming from TaskInput.jsx
  const handleFormData = (data) => {
    if (data) {
      // spread ornignal taskList and add inputed task data
      setTaskList([...taskList, data]);
    }
  };

  // delet task functionality
  const handleDeletTask = (index) => {
    const arrayAfterDeletion = taskList.filter(
      (curVal, taskIndex) => taskIndex !== index
    );
    setTaskList(arrayAfterDeletion);
  };

  return (
    <>
      <Header />

      <main>
        <TaskInput onSubmit={handleFormData} />

        <section
          className={
            taskList == ""
              ? "w-full flex justify-center" // class to display noTaskImage
              : "grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3" // class to display all tasks
          }
        >
          {taskList == "" ? (
            <img src={noTaskImg} alt="No task" /> //noTaskImg
          ) : (
            // -----------MAIN TASK DISPLAY LOOP----------
            taskList.map((task, index) => {
              return (
                <TaskBox
                  key={index}
                  taskData={task}
                  deletTask={() => handleDeletTask(index)}
                />
              );
            })
          )}
        </section>
      </main>
    </>
  );
}

export default App;
