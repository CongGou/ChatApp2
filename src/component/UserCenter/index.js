import React, { Component } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
class UserCenter extends Component {
  render() {
    // console.log(this.props.match.params.id);
    return (
      <div className="UserCenter">
        <div className="UserCenterTit">
          <h2>郭海聪</h2>
          <img src={require("../images/WechatIMG2.jpeg")}></img>
        </div>
        <div className="UserCenterBtm">
          <p>
            <span className="Note">备注名</span>
            <input placeholder="添加备注名" />
          </p>
          <p>
            <span className="Note">账&nbsp;&nbsp;&nbsp;&nbsp;号</span>
            <span>{this.props.match.params.id}</span>
          </p>
          <NavLink
            to={"/Chat/message/" + this.props.match.params.id}
            className="sendMessage"
          >
            发送消息
          </NavLink>
        </div>
      </div>
    );
  }
}
export default UserCenter;
