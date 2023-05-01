import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "task 1",
    description: "loremlorem",
    complete: false,
  },
  {
    id: 2,
    title: "task 2",
    description: "loremlorem",
    complete: false,
  },
  {
    id: 3,
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
      console.log(state, action);
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
