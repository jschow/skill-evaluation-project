import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState(["Plan the project", "Write the code", "Test the application"]);
  const [task, setTask] = useState("");

  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function AddTask() {}

  function deleteTask(index) {}

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={handleInputChange}
        />
        <button 
            className="add-task-button"
            onClick={AddTask}>
          Add
        </button>
      </div>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button 
                className="delete-task-button"
                onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>

    </div>
  );
}
