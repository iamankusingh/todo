// Todo app in react
import React, { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import noTaskImg from "./assets/kanban-board.png";
import TaskBox from "./components/TaskBox";

// const tododKey = "todoApp";

function App() {
  const [taskList, setTaskList] = useState([]);

  const handleFormData = (data) => {
    if (data) {
      setTaskList([...taskList, data]);
    }
  };

  return (
    <>
      <Header />

      <main>
        <TaskInput onSubmit={handleFormData} />

        {taskList.map((task, index) => {
          return <TaskBox key={index} task={task} />;
        })}
      </main>
    </>
  );
}

export default App;
