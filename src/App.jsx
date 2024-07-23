// Todo app in react
import React, { useState } from "react";
import Header from "./components/Header";
import deletImg from "./assets/trash-can-solid.svg";
import checkImg from "./assets/check-solid.svg";
import manWomen from "./assets/man-woman-sticking-notes.png";
import board from "./assets/kanban-board.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [checked, setChecked] = useState(false);

  // handle input task
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  // handle when click on add task button
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  // delet task
  const handleDeletTask = (index) => {
    const newTasks = tasks.filter(
      (curElement, curElementIndex) => curElementIndex !== index
    );
    setTasks(newTasks);
  };

  // check or uncheck task
  const handlecheckUncheck = (index) => {
    setChecked(!checked);
  };

  return (
    <>
      <Header />

      {/* input area */}
      <main>
        <form onSubmit={handleSubmit} className="p-2 flex justify-center gap-2">
          <input
            type="text"
            name="task"
            placeholder="Enter your task..."
            className="p-2 text-xl rounded-xl max-[420px]:w-[70%]"
            value={inputValue}
            onChange={handleInput}
          />
          <button
            type="submit"
            className="max-[420px]:p-3 px-6 text-xl bg-blue-300 rounded-xl"
          >
            Add
          </button>
        </form>

        {/* task displaying section */}
        <section
          className={`${
            tasks == ""
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {tasks == "" ? (
            <div>
              {/* image display whon no task is there */}
              <img
                src={board}
                alt="boy and girl sticking notes"
                className="h-80"
              />
            </div>
          ) : (
            // else it display task div (MAIN TASK PRINT LOOP)
            [...tasks].reverse().map((task, index) => {
              return (
                <div
                  key={index}
                  className="h-auto m-3 p-3 border-2 flex justify-between items-start bg-emerald-200 rounded-xl"
                  onClick={() => handlecheckUncheck(index)}
                >
                  {/* check-box div */}
                  <div
                    className="h-6 w-6 bg-red-50 rounded-full"
                    // onClick={() => handlecheckUncheck(index)}
                  >
                    {checked ? (
                      // tick img
                      <img
                        src={checkImg}
                        alt="check image"
                        className="h-full w-full"
                      />
                    ) : (
                      ""
                    )}
                  </div>

                  {/* main task paragraph */}
                  <p className="w-[80%] break-words text-xl items-start">
                    {task}
                  </p>

                  {/* delet button */}
                  <button onClick={() => handleDeletTask(index)}>
                    <img src={deletImg} alt="Delet" className="h-8" />
                  </button>
                </div>
              );
            })
          )}
        </section>
      </main>
    </>
  );
}

export default App;
