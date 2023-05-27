import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.NYT_API_URL}`,
  timeout: 2000,
  headers: {
    "content-type": "application/x-www-form-urlencoded; charset=utf-8",
  },
  params: {
    "api-key": `${process.env.NYT_API_KEY}`,
  },
});

instance.interceptors.request.use(
  function (config) {
    console.log(`request success`);
    return config;
  },
  function (err) {
    console.log(`request fail`);
    return Promise.reject(err);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log(`response success`);
    return response;
  },
  function (err) {
    console.log(`response fail`);
    return Promise.reject(err);
  }
);

export default instance;
