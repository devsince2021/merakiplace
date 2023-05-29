import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { Filter } from "../types";
import { Path } from "../constants";

interface UpdatePayload {
  pathname: Path;
  filter: Filter;
}

interface RefreshPagePayload {
  pathname: Path;
}

const initialFilter: Filter = {
  headline: "",
  date: "",
  countries: [],
  page: 0,
};

const initialState: Record<Path, Filter> = {
  "/": initialFilter,
  "/home": initialFilter,
  "/scrap": initialFilter,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    update: (state, action: PayloadAction<UpdatePayload>) => {
      const currentPath = action.payload.pathname;
      state[currentPath] = action.payload.filter;
    },
    refreshPage: (state, action: PayloadAction<RefreshPagePayload>) => {
      const currentPath = action.payload.pathname;
      const currentPathState = state[currentPath];
      state[currentPath] = { ...currentPathState, page: 0 };
    },
  },
});

export const { update, refreshPage } = filterSlice.actions;
export default filterSlice.reducer;
