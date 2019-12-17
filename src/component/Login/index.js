import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";

class Login extends React.Component {
  handleLogin = () => {
    this.props.history.push("/Chat");
  };
  render() {
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
                <TextField id="input-with-icon-grid" label="用户名" />
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
                  type="password"
                />
              </Grid>
            </Grid>
          </div>
          <div className="LoginBtn">
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLogin}
            >
              登 录
            </Button>
          </div>
        </div>
        <div className="Registered">
          <Link to="/registered">注册</Link>
        </div>
      </div>
    );
  }
}
export default Login;
