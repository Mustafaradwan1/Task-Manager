import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardSlice";


const store = configureStore({
  reducer: {
    boards: boardsSlice,
  }
})

export default store