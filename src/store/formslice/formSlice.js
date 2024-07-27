import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernameValue: "",
  phoneNumberValue: "",
  guestsValue: "",
  isOpen: true,
  isSended: false,
  error: "",
  success: "",
  isSubmitting: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setUsernameValue: (state, action) => {
      state.usernameValue = action.payload;
    },
    setPhoneNumberValue: (state, action) => {
      state.phoneNumberValue = action.payload;
    },
    setGuestsValue: (state, action) => {
      state.guestsValue = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setIsSended: (state, action) => {
      state.isSended = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    resetForm: (state) => {
      state.usernameValue = "";
      state.phoneNumberValue = "";
      state.guestsValue = "";
      state.isOpen = true;
      state.isSended = false;
      state.error = "";
      state.success = "";
      state.isSubmitting = false;
    },
  },
});

export const {
  setUsernameValue,
  setPhoneNumberValue,
  setGuestsValue,
  setIsOpen,
  setIsSended,
  setError,
  setSuccess,
  setIsSubmitting,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
