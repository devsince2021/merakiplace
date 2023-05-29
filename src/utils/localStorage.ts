import _ from "lodash";
import { ErrorText } from "../constants";

export const Storage_Key = {
  scrap: "scrap",
};

const setItem = (key: string, data: any) => {
  try {
    const value = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (err) {
    alert(ErrorText.storage_set);
  }
};

const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);

    if (_.isNil(data)) return data ?? defaultValue;
    return JSON.parse(data);
  } catch (err) {
    alert(ErrorText.storage_get);
    return defaultValue;
  }
};

const deleteItem = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
};

export const storage = {
  setItem,
  getItem,
  deleteItem,
};
