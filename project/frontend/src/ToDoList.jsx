import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editingTaskText, setEditingTaskText] = useState("");
  
  function handleInputChange(event) {
    setTask(event.target.value);
  }

  function AddTask() {
    if (task.trim() !== "") {
      setTasks((t) => [...t, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    const taskList = tasks.filter((element, i) => i !== index);
    setTasks(taskList);

    if (editingTaskIndex === index) {
      setEditingTaskIndex(null);
    } else if (editingTaskIndex > index) {
      setEditingTaskIndex(editingTaskIndex - 1);
    }
  }

  function handleStartEdit(index) {
    setEditingTaskIndex(index);
    setEditingTaskText(tasks[index]);
  }

  function handleSaveEdit(event) {
    const updatedTasks = [...tasks];
    updatedTasks[editingTaskIndex] = editingTaskText;
    setTasks(updatedTasks);
    setEditingTaskIndex(null);
  }

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
        <button className="add-task-button" onClick={AddTask}>
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingTaskIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingTaskText}
                  onChange={(e) => setEditingTaskText(e.target.value)}
                />
                <button
                  className="edit-task-button"
                  onClick={() => handleSaveEdit(index)}
                >
                  Done
                </button>
                <button
                  className="delete-task-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <span className="text">{task}</span>
                <button
                  className="edit-task-button"
                  onClick={() => handleStartEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-task-button"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
