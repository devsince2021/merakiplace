import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import _ from "lodash";

import { Path } from "../constants";
import { RootLayout } from "../components";

const getPathname = () => {
  return Path.home;
};

const Root = () => {
  const [destination, setDestination] = useState<Path>();
  const navigate = useNavigate();

  useEffect(() => {
    const path = getPathname();
    setDestination(path);
  }, []);

  useEffect(() => {
    if (!_.isNil(destination)) {
      navigate(destination);
    }
  }, [destination]);

  return (
    <RootLayout>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
