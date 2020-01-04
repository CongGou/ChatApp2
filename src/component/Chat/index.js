import React, { Component } from "react";
import { Switch, Redirect, Route, NavLink } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Messages from "../Messages";
import Contact from "../Contact";
import { ChatHome, _Close } from "../Axios";
class Chat extends Component {
  state = {
    Image: ""
  };
  componentDidMount() {
    ChatHome()
      .then(res => {
        console.log(res.data);
        if (res.data) {
          if (res.data.code === 404) {
            this.props.history.push("/");
          }
          this.setState({
            Image: res.data.data.photo
          });
        }
      })
      .catch(e => {});
  }
  handleClose = () => {
    _Close().then(res => {
      console.log(res);
      if (res.data.code === 200) {
        this.props.history.push("/");
      }
    });
  };
  render() {
    return (
      <div className="Chat">
        <div className="Close" onClick={this.handleClose}>
          x
        </div>
        <div className="Nav">
          <div className="ChatImg">
            <img src={this.state.Image} alt="" />
          </div>
          <div className="NavList">
            <NavLink to="/Chat/message" activeClassName={"Active"}>
              <Grid item>
                <ChatBubble />
              </Grid>
            </NavLink>
            <NavLink to="/Chat/contact" activeClassName={"Active"}>
              <Grid item>
                <People />
              </Grid>
            </NavLink>
          </div>
        </div>
        <div className="Main">
          <Switch>
            <Route
              exact
              path="/Chat"
              render={() => <Redirect to={"/Chat/message"} />}
            />
            <Route path="/Chat/message" component={Messages} />
            <Route path="/Chat/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Chat;
