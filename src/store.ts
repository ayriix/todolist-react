import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { TodoState } from "./feature/todoList";
import themeReducer from "./feature/themeList";

export type RootState = {
  themeList: any;
  todoList: TodoState;
};

const loadStore = (): RootState | undefined => {
  try {
    const appState = localStorage.getItem("appState");
    if (!appState) return undefined;
    return JSON.parse(appState) as RootState;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    todoList: todoReducer,
    themeList: themeReducer,
  },
  preloadedState: loadStore(),
});

export type AppDispatch = typeof store.dispatch;

const saveStore = (state: RootState) => {
  try {
    const appState = JSON.stringify(state);
    localStorage.setItem("appState", appState);
  } catch (error) {
    console.error(error);
  }
};

store.subscribe(() => saveStore(store.getState()));
