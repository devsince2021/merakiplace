import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { Filter } from "../types";
import { Path } from "../constants";

interface Payload {
  pathname: Path;
  filter: Filter;
}

const initialFilter = {
  headline: "",
  date: "",
  countries: [],
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
    update: (state, action: PayloadAction<Payload>) => {
      const currentPath = action.payload.pathname;
      state[currentPath] = action.payload.filter;
    },
  },
});

export const { update } = filterSlice.actions;
export default filterSlice.reducer;
