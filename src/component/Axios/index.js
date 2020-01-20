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
//添加好友
export const AddFriend = data => {
  return axios.post("/api/add", data);
};
//新朋友认证
export const NewFriends = data => {
  return axios.get("/api/newsfriends", data);
};
//用户查看
export const User = data => {
  return axios.post("/api/user", data);
};
//通过认证
export const AddPass = data => {
  return axios.post("/api/addpass", data);
};
//联系人
export const Contacts = data => {
  return axios.get("/api/contacts", data);
};
