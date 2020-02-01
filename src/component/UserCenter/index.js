import React, { Component } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { User } from "../Axios";
class UserCenter extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      photo: "",
      userName: "",
      _id: "",
      msg: "通过认证"
    };
  }
  componentDidMount() {
    let id = this.props.match.params.id;
    User({ id }).then(res => {
      this.setState({
        photo: res.data.data.photo,
        userName: res.data.data.userName,
        _id: res.data.data._id
      });
    });
  }
  render() {
    return (
      <div className="UserCenter">
        <div className="UserCenterTit">
          <h2>{this.state.userName}</h2>
          <img src={this.state.photo} alt="" />
        </div>
        <div className="UserCenterBtm">
          <p>
            <span className="Note">备注名</span>
            <input placeholder="添加备注名" />
          </p>
          <p>
            <span className="Note">账&nbsp;&nbsp;&nbsp;&nbsp;号</span>
            <span>{this.state.userName}</span>
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
