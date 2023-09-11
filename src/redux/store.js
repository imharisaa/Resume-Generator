import { configureStore } from "@reduxjs/toolkit";
import formsReducer from "../store/forms.reducer";
import themeReducer from "../store/theme.reducer";

export const store = configureStore({
  reducer: {
    forms: formsReducer,
    theme: themeReducer
  },
});
