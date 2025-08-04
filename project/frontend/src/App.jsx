import { useState , useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import ToDoList from "./ToDoList.jsx";

export default function App() {

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <ToDoList />;
}


