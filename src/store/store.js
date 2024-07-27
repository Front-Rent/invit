import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./formslice/formSlice";
import timerReducer from "./timerSlice/timerSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    timer: timerReducer,
  },
});

export default store;
