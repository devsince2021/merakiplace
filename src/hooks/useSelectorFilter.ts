import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Path } from "../constants";
import { Filter } from "../types";
import { update } from "../redux/filterSlice";
import { Store } from "../redux";

type Setter = (filter: Filter) => void;

export const useSelectorFilter = (): [Filter, Setter] => {
  const pathname = useLocation().pathname as Path;
  const selectedFilter = useSelector((state: Store) => state.filter[pathname]);
  const dispatch = useDispatch();

  const updateFilter = (filter: Filter) => {
    dispatch(update({ pathname, filter }));
  };
  return [selectedFilter, updateFilter];
};
