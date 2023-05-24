import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default appRouter;
