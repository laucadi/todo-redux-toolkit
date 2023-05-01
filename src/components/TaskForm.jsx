import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/task/taskSlice";
import { v4 as uuid } from "uuid";

const taskForm = () => {
  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        ...task,
        id: uuid(),
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        id=""
        cols="30"
        rows="10"
        placeholder="description"
        onChange={handleChange}
      ></textarea>
      <button>Sumit</button>
    </form>
  );
};

export default taskForm;
