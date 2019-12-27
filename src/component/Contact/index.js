import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ChevronRight from "@material-ui/icons/ChevronRight";
import MessageLogo from "../MessageLogo";
import UserCenter from "../UserCenter";
import "./index.css";
import NewUser from "../user";
class Contact extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      display1: false,
      display2: false,
      display3: false
    };
  }
  handleClick1 = () => {
    this.setState({
      display1: !this.state.display1
    });
  };
  handleClick2 = () => {
    this.setState({
      display2: !this.state.display2
    });
  };
  handleClick3 = () => {
    this.setState({
      display3: !this.state.display3
    });
  };
  render() {
    return (
      <div className="MessageCover">
        <div className="MessageContainer">
          <div className="Search">
            <input className="SearchInput" placeholder="搜索" />
            <Grid item className="SearchIcon">
              <Search />
            </Grid>
          </div>
          <div className="MessageList ContactList">
            <NavLink
              to={"/Chat/contact/"}
              replace
              className={"ListItem"}
              onClick={this.handleClick1}
            >
              <Grid
                item
                style={{ display: this.state.display1 ? "block" : "none" }}
              >
                <ExpandMore />
              </Grid>
              <Grid
                item
                style={{ display: this.state.display1 ? "none" : "block" }}
              >
                <ChevronRight />
              </Grid>
              新朋友
            </NavLink>
            <div style={{ display: this.state.display1 ? "block" : "none" }}>
              {[1, 12, 1, 2, 1].map((item, index) => (
                <NewUser key={index} />
              ))}
            </div>
            <NavLink
              to={"/Chat/contact/"}
              replace
              className={"ListItem"}
              onClick={this.handleClick2}
            >
              <Grid
                item
                style={{ display: this.state.display2 ? "block" : "none" }}
              >
                <ExpandMore />
              </Grid>
              <Grid
                item
                style={{ display: this.state.display2 ? "none" : "block" }}
              >
                <ChevronRight />
              </Grid>
              群聊
            </NavLink>
            <div style={{ display: this.state.display2 ? "block" : "none" }}>
              {[1, 12, 1, 2, 1].map((item, index) => (
                <NewUser key={index} />
              ))}
            </div>
            <NavLink
              to={"/Chat/contact/"}
              replace
              className={"ListItem"}
              onClick={this.handleClick3}
            >
              <Grid
                item
                style={{ display: this.state.display3 ? "block" : "none" }}
              >
                <ExpandMore />
              </Grid>
              <Grid
                item
                style={{ display: this.state.display3 ? "none" : "block" }}
              >
                <ChevronRight />
              </Grid>
              朋友
            </NavLink>
            <div style={{ display: this.state.display3 ? "block" : "none" }}>
              {[1, 12, 1, 2, 1].map((item, index) => (
                <NewUser key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="MessageRoom">
          <Switch>
            <Route exact path="/Chat/contact" component={MessageLogo} />
            {/* <Route path="/Chat/contact/:id" component={UserCenter} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Contact;
