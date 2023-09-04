import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "../store/forms.reducer";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
  },
});
