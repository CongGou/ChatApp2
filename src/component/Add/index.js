import React, { Component } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import { SearchUser, AddFriend } from "../Axios";
import socket from "../socket";
import "../socket";
class Add extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      data: {
        userName: "",
        photo: "",
        user_id: ""
      },
      msg: "输入用户名即可搜索",
      isShow: false
    };
  }
  handleSearch = () => {
    let userName = this.refs.value.value;
    if (userName) {
      SearchUser({ userName })
        .then(res => {
          switch (res.data.code) {
            case 200:
              this.setState({
                data: {
                  userName: res.data.msg.userName,
                  photo: res.data.msg.photo,
                  user_id: res.data.msg._id
                },
                isShow: true
              });
              break;
            case 404:
              this.setState({
                msg: res.data.msg
              });
              break;
          }
        })
        .catch(e => console.log(e));
    } else {
      this.setState({
        msg: "用户名不能为空"
      });
    }
  };
  handleAdd = () => {
    const passUser = this.state.data.user_id;
    AddFriend({ passUser })
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
  };
  render() {
    return (
      <div className="AddContainer">
        <div className="addFriend">
          <input placeholder="用户名" ref="value" />
          <Grid item className="SearchIcon">
            <Search />
          </Grid>
          <button onClick={this.handleSearch}>搜索</button>
        </div>
        <div className={this.state.isShow ? "userBox " : "userBox hidden"}>
          <img src={this.state.data.photo} alt="" />
          <span>{this.state.data.userName}</span>
          <button onClick={this.handleAdd}>添加</button>
        </div>
        <div
          className={
            this.state.isShow ? "userBox SearchMsg hidden" : "userBox SearchMsg"
          }
        >
          <p>{this.state.msg}</p>
        </div>
      </div>
    );
  }
}
export default Add;
