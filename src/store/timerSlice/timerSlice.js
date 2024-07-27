import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    updateTimer: (state, action) => {
      const { days, hours, minutes, seconds } = action.payload;
      state.days = days;
      state.hours = hours;
      state.minutes = minutes;
      state.seconds = seconds;
    },
    resetTimer: (state) => {
      state.days = "00";
      state.hours = "00";
      state.minutes = "00";
      state.seconds = "00";
    },
  },
});

export const { updateTimer, resetTimer } = timerSlice.actions;

export default timerSlice.reducer;
