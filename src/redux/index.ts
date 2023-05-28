import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import filterSlice from "./filterSlice";

const rootReducer = {
  filter: filterSlice,
};

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [logger],
});

export type Store = ReturnType<typeof store.getState>;
export default store;
