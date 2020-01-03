import axios from "axios";
//注册
export const Register = data => {
  return axios.post("http://localhost:8999/register", data);
};
//登录
export const _Login = data => {
  return axios.post("http://localhost:8999/login", data);
};
//首页个人头像和资料
export const ChatHome = data => {
  return axios.get("http://localhost:8999/chathome", data);
};
