import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
class Chat extends Component {
  handleClick = () => {};
  handleClose = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="Chat">
        <div className="Close" onClick={this.handleClose}>
          x
        </div>
        <div className="Nav">
          <div className="ChatImg">
            <img src={require("../images/WechatIMG2.jpeg")} alt="" />
          </div>
          <div className="NavList">
            <Link to="/Chat/message" onClick={this.handleClick}>
              <Grid item className="Active">
                <ChatBubble />
              </Grid>
            </Link>
            <Link to="/Chat/contact" onClick={this.handleClick}>
              <Grid item>
                <People />
              </Grid>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
