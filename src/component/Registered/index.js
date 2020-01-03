import React from "react";
import { Link } from "react-router-dom";
import "../Login/index.css";
import Lottie from "react-lottie";
import lottieChecked from "../Animation/lottie-checked-done.json";
import lottieLoading from "../Animation/lottie-loading-done.json";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";
import { Register } from "../Axios";
import "./index.css";
class Registered extends React.Component {
  constructor(arg) {
    super(arg);
    this.state = {
      Value: "",
      passWord: "",
      open: false,
      CheckedOpen: false,
      LoadingOpen: false
    };
  }
  // 注册
  handleRegistere = () => {
    if (this.state.Value && this.state.passWord) {
      const userName = this.state.Value;
      const passWord = this.state.passWord;
      let data = {
        userName,
        passWord
      };
      Register(data).then(res => {
        this.setState({
          open: true,
          CheckedOpen: true
        });
        setTimeout(() => {
          if (res.data.code === 200) {
            this.setState({
              open: true,
              CheckedOpen: false,
              LoadingOpen: true
            });
            setTimeout(() => {
              this.props.history.push("/Chat");
            }, 1000);
          }
        }, 2000);
        if (res.data.code === 0) {
          this.setState({
            open: false,
            CheckedOpen: false
          });
          alert(res.data.msg);
        }
      });
    } else {
      alert("用户名或密码不能为空");
    }
  };
  //获取用户名的值
  handleUserName = event => {
    this.setState({
      Value: event.target.value
    });
  };
  //获取密码的值
  handlePassWord = event => {
    this.setState({
      passWord: event.target.value
    });
  };
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: lottieChecked,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    const defaultOptions2 = {
      loop: true,
      autoplay: true,
      animationData: lottieLoading,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div className="Login">
        <div className="Image">
          <img src={require("../images/WechatIMG2.jpeg")} alt="" />
        </div>
        <div className="Input">
          <div>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  onChange={this.handleUserName}
                  id="input-with-icon-grid"
                  label="用户名"
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <Lock />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="密码"
                  onChange={this.handlePassWord}
                  type="password"
                />
              </Grid>
            </Grid>
          </div>
          <div className="LoginBtn">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleRegistere}
            >
              注 册
            </Button>
          </div>
        </div>
        <div
          className="Ranimation"
          style={{ display: this.state.open ? "block" : "none" }}
        >
          <Lottie
            className="lottieLoading"
            options={defaultOptions}
            height={300}
            width={300}
            style={{ display: this.state.LoadingOpen ? "block" : "none" }}
          />
          <Lottie
            className="lottieChecked"
            options={defaultOptions2}
            height={300}
            width={300}
            style={{ display: this.state.CheckedOpen ? "block" : "none" }}
          />
        </div>
        <div className="Registered">
          <Link to="/">返回登录</Link>
        </div>
      </div>
    );
  }
}
export default Registered;
