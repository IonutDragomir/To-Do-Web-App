import React, { useRef, useState } from "react";
import "../CSS/Task.css";

export function Task({ name, setTask, task }) {
  const [taskName, setTaskName] = useState(<p>{name}</p>);
  const [currentName, setCurrentName] = useState("");
  const [containerClass, setContainerClass] = useState("task-container");

  const editButtonName = useRef(null);

  function changeClass() {
    if (containerClass === "task-container") {
      setContainerClass("task-container checked");
    } else if (containerClass === "task-container checked") {
      setContainerClass("task-container");
    }
  }

  function editButton() {
    if (editButtonName.current.innerText === "Edit") {
      setTaskName(
        <input
          type="text"
          defaultValue={taskName.props.children}
          onChange={(e) => setCurrentName(e.target.value)}
        />
      );
      editButtonName.current.style.width = "8vw";
      editButtonName.current.innerText = "Done with my edits";
    } else if (editButtonName.current.innerText === "Done with my edits") {
      setTaskName(<p>{currentName}</p>);
      editButtonName.current.style.width = "5vw";
      editButtonName.current.innerText = "Edit";
    }
  }

  function deleteButton() {
    setTask(task.filter((taskName) => taskName != name));
  }
  return (
    <div className={containerClass}>
      <div className="name-container">
        <input type="checkbox" onClick={() => changeClass()} />
        {taskName}
      </div>
      <div className="button-container">
        <button
          className="edit button"
          onClick={() => editButton()}
          ref={editButtonName}
        >
          Edit
        </button>
        <button className="delete button" onClick={() => deleteButton()}>
          Delete
        </button>
      </div>
    </div>
  );
}
