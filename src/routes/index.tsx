import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Feed from "./Feed";
import Scrap from "./Scrap";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "feed",
        element: <Feed />,
      },
      {
        path: "scrap",
        element: <Scrap />,
      },
    ],
  },
]);

export default appRouter;
