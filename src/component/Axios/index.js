import axios from "axios";
//注册
export const Register = data => {
  return axios.post("/api/register", data);
};
//登录
export const _Login = data => {
  return axios.post("/api/login", data);
};
//首页个人头像和资料
export const ChatHome = data => {
  return axios.get("/api/chathome", data);
};
//退出登录
export const _Close = data => {
  return axios.get("/api/logout", data);
};
//搜索用户
export const SearchUser = data => {
  return axios.post("/api/searchuser", data);
};
