
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import formsReducer from "../store/forms.reducer";
import themeReducer from "../store/theme.reducer";
// loggerMiddleware.js

// loggerMiddleware.js

const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from local storage:", err);
    return undefined;
  }
};

const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action:", action);
  console.log("Current state:", store.getState());

  // Load state from local storage (if present)
  const persistedState = loadStateFromLocalStorage();

  const result = next(action);

  console.log("Next state:", store.getState());

  // Save the updated state to local storage
  try {
    const serializedState = JSON.stringify(store.getState());
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Error saving state to local storage:", err);
  }

  return result;
};

export const store = configureStore({
  reducer: {
    forms: formsReducer,
    theme: themeReducer,
  },
  middleware: [...getDefaultMiddleware(), loggerMiddleware],
});
