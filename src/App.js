import { useState, useRef } from "react";
import { Task } from "./Components/Task";
import "./CSS/App.css";

function App() {
  const [task, setTask] = useState([]);
  // const [numberOfTask, setNumberOfTask] = useState(1);
  const newTaskInput = useRef(null);

  function createTask() {
    let checkTaskName = newTaskInput.current.value.split("");
    if (checkTaskName.length < 5) {
      newTaskInput.current.style.border = "2px solid red";
    } else {
      newTaskInput.current.style.border = "2px solid gray";
      setTask([...task, newTaskInput.current.value]);
      newTaskInput.current.value = "";
    }
  }

  return (
    <div>
      <div>
        <p className="title">What do I need to do today?</p>
        <p className="guide-paragraph">
          Check off items once you have completed them
        </p>
      </div>

      <div>
        {task.map((element) => {
          return (
            <Task name={element} key={element} setTask={setTask} task={task} />
          );
        })}
      </div>

      <div>
        <p className="new-task-paragraph">New Task</p>
        <input
          type="text"
          placeholder="What do you need to do next? (at least 5 characters)"
          className="new-task"
          ref={newTaskInput}
        />
        <button className="add" onClick={() => createTask()}>
          + Add
        </button>
      </div>
    </div>
  );
}

export default App;
