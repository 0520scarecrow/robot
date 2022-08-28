import axios from "axios";
import Qs from "qs";

// var urlRequst = "http://ai-svc-test.yoyi.com.cn/api/task/v1/robot";

const ajaxRequest = axios.create({
  baseURL: "/foo",
  transformRequest: [
    function (data) {
      data = Qs.stringify(data);
      return data;
    },
  ],
  timeout: 5000,
  method: "post",
});

// 请求拦截
// 所有的请求都会先走这个
ajaxRequest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 响应拦截
// 所有的响应都会走这个接口
ajaxRequest.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export function get(url, params) {
  return ajaxRequest.get(url, { params });
}

export function post(url, data) {
  return ajaxRequest.post(url, data);
}

export function del(url) {
  return ajaxRequest.delete(url);
}

export function put(url, data) {
  return ajaxRequest.put(url, data);
}
