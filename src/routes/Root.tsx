import React from "react";
import Page from "../components/layouts/Page";
import Navigation from "../components/layouts/Navigation";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Page>
      <Outlet />
      <Navigation />
    </Page>
  );
};

export default Root;
