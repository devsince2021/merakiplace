import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Path } from "../constants";
import Root from "./Root";
import Home from "./home";
import Scrap from "./scrap";

const appRouter = createBrowserRouter([
  {
    path: Path.root,
    element: <Root />,
    children: [
      {
        path: Path.home,
        element: <Home />,
      },
      {
        path: Path.scrap,
        element: <Scrap />,
      },
    ],
  },
]);

export default appRouter;
