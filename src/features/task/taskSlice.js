import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "task 1",
    description: "loremlorem",
    complete: false,
  },
  {
    id: "2",
    title: "task 2",
    description: "loremlorem",
    complete: false,
  },
  {
    id: "3",
    title: "task 3",
    description: "loremlorem",
    complete: false,
  },
];
export const taskSlice = createSlice({
  name: "tasks",
  //estado inicial como el de useState(este)
  initialState,
  //decirle que hacer, funciones para actualizarlo
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const foundTask = state.find((task) => task.id === id);
      if (foundTask) {
        foundTask.title = title;
        foundTask.description = description;
      }
    },
    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        return state.filter((task) => task.id !== action.payload);
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
