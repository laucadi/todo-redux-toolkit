import { useState } from "react";

import "./App.css";
//funciones que queremos llamr para actualizar el estado
import { useDispatch } from "react-redux";
//seleccionar o traer algo desde el estado
import { useSelector } from "react-redux";
import TaskList from "./components/taskList";
import TaskForm from "./components/taskForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 h-screen text-white">
      <div className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
