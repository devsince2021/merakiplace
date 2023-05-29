import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { Path } from "../constants";
import { Filter } from "../types";
import { update, refreshPage } from "../redux/filterSlice";
import { Store } from "../redux";

type Setter = (filter: Filter) => void;
type RefreshPage = () => void;

export const useSelectorFilter = (): [Filter, Setter, RefreshPage] => {
  const pathname = useLocation().pathname as Path;
  const selectedFilter = useSelector((state: Store) => state.filter[pathname]);
  const dispatch = useDispatch();

  const updateFilter = (filter: Filter) => {
    dispatch(update({ pathname, filter }));
  };

  const refreshPageCount = () => {
    dispatch(refreshPage({ pathname }));
  };

  return [selectedFilter, updateFilter, refreshPageCount];
};
