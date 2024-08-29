// Todo app in react
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import noTaskImg from "./assets/kanban-board.png";
import TaskBox from "./components/TaskBox";

const localTodoKey = "todoData";

function App() {
  // main task data list state
  const [taskList, setTaskList] = useState(() => {
    // seting local data if exists
    const localTodo = localStorage.getItem(localTodoKey);
    if (!localTodo) return [];
    return JSON.parse(localTodo);
  });

  // (data) is input value coming from TaskInput.jsx
  const handleFormData = (data) => {
    if (data) {
      // spread ornignal taskList and add inputed task data
      setTaskList([data, ...taskList]);
    }
  };

  // delet task functionality
  const handleDeletTask = (index) => {
    const arrayAfterDeletion = taskList.filter(
      (curVal, taskIndex) => taskIndex !== index
    );
    setTaskList(arrayAfterDeletion);
  };

  // set data to local storage
  useEffect(() => {
    localStorage.setItem(localTodoKey, JSON.stringify(taskList));
  }, [taskList]);

  return (
    <>
      <Header />

      <main>
        <TaskInput onSubmit={handleFormData} />

        <section
          className={
            taskList == ""
              ? "w-[100vw] flex justify-center" // class to display noTaskImage
              : "w-[100vw] p-4 grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4" // class to display all tasks
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
