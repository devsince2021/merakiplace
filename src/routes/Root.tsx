import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import _ from "lodash";

import { Path } from "../constants";
import { GlobalErrorBoundary, RootLayout } from "../components";

const getPathname = () => {
  return Path.home;
};

const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const path = getPathname();
    navigate(path);
  }, []);

  return (
    <RootLayout>
      <GlobalErrorBoundary>
        <Outlet />
      </GlobalErrorBoundary>
    </RootLayout>
  );
};

export default Root;
