import React, { useEffect } from "react";

import { getArticle } from "../../apis/apiActions";
import { useSelectorFilter } from "../../hooks";

const testParams = {
  date: "2023-05-20",
  keyword: "samsung",
  countries: ["CANADA", "RUSSIA"],
  page: 0,
};

export const Home = () => {
  const [filter, setFilter] = useSelectorFilter();
  return <div>home</div>;
};
