import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import store from "./redux";
import appRouter from "./routes";
import { theme } from "./constants/styles";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </ThemeProvider>
);
