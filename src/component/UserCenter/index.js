import React, { useEffect, useContext } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { User } from "../Axios";
import { Context } from "../../App";
// 用户个人中心组件
const UserCenter = props => {
  // 连接仓库
  const storeData = useContext(Context);
  const UserCenterData = storeData.state.UserCenter;
  useEffect(() => {
    let id = props.match.params.id;
    User({ id }).then(res => {
      storeData.dispatch({
        type: "GET_USERCENTER",
        UserCenter: res.data.data
      });
    });
  }, [UserCenterData]);
  return (
    <div className="UserCenter">
      <div className="UserCenterTit">
        <h2>{UserCenterData.userName}</h2>
        <img src={UserCenterData.photo} alt="" />
      </div>
      <div className="UserCenterBtm">
        <p>
          <span className="Note">备注名</span>
          <input placeholder="添加备注名" />
        </p>
        <p>
          <span className="Note">账&nbsp;&nbsp;&nbsp;&nbsp;号</span>
          <span>{UserCenterData.userName}</span>
        </p>
        <NavLink
          to={"/Chat/message/" + props.match.params.id}
          className="sendMessage"
        >
          发送消息
        </NavLink>
      </div>
    </div>
  );
};
export default UserCenter;
