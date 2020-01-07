import React, { Component } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import { SearchUser } from "../Axios";
class Add extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      data: {
        userName: "",
        photo: ""
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
                  photo: res.data.msg.photo
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
          <button>添加</button>
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
