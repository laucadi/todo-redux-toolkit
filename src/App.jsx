import { useState } from "react";

import "./App.css";
//funciones que queremos llamr para actualizar el estado
import { useDispatch } from "react-redux";
//seleccionar o traer algo desde el estado
import { useSelector } from "react-redux";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";

function App() {
  return (
    <>
      <h1>holi</h1>
      <TaskList />
      <TaskForm />
    </>
  );
}

export default App;
