import _ from "lodash";

export const Storage_Key = {
  scrap: "scrap",
};

const setItem = (key: string, data: any) => {
  try {
    const value = typeof data === "string" ? data : JSON.stringify(data);
    localStorage.setItem(key, value);
  } catch (err) {
    alert("스토리지 저장시 문제가 발생하였습니다.");
  }
};

const getItem = <T>(key: string, defaultValue: T): T => {
  try {
    const data = localStorage.getItem(key);

    if (_.isNil(data)) return data ?? defaultValue;
    return JSON.parse(data);
  } catch (err) {
    alert("스토리지에서 데이터를 가져오는데 문제가 발생하였습니다.");
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
