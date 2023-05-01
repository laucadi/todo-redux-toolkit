import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/task/taskSlice";

const store = configureStore({
  //son la forma en que actualizamos el estado, creamos operaciones para modificar el estado //useState?
  reducer: { tasks: tasksReducer },
});
export default store;
