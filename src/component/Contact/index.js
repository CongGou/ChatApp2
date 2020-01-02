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
import Group from "../Group";
import Friends from "../Friends";
import Certification from "../Certification";
import GroupChat from "../GroupChat";
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
            {/* 新朋友 */}
            <NavLink
              to={"/Chat/contact/NewFriends"}
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
              {data.map((item, index) => (
                <NavLink to={"/Chat/contact/NewFriends/" + item.id} key={index}>
                  <NewUser />
                </NavLink>
              ))}
            </div>
            {/* 群聊 */}
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
              {data.map((item, index) => (
                <NavLink to={"/Chat/contact/GroupChat/" + item.id} key={index}>
                  <Group image={item.image} UserName={item.UserName} />
                </NavLink>
              ))}
            </div>
            {/* 联系人 */}
            <NavLink
              to={"/Chat/contact/contacts"}
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
              联系人
            </NavLink>
            <div style={{ display: this.state.display3 ? "block" : "none" }}>
              {data.map((item, index) => (
                <NavLink to={"/Chat/contact/contacts/" + item.id} key={index}>
                  <Friends image={item.image} UserName={item.UserName} />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="MessageRoom">
          <Switch>
            <Route exact path="/Chat/contact/" component={MessageLogo} />
            <Route exact path="/Chat/contact/:id" component={MessageLogo} />
            <Route
              path="/Chat/contact/NewFriends/:id"
              component={Certification}
            />
            <Route path="/Chat/contact/GroupChat/:id" component={GroupChat} />
            <Route path="/Chat/contact/contacts/:id" component={UserCenter} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Contact;

const data = [
  {
    id: "sgahd23242",
    account: "ghc7777",
    image: require("../images/WechatIMG2.jpeg"),
    UserName: "哈狗"
  },
  {
    id: "rewerwe335453",
    account: "ghc16666",
    image: require("../images/WechatIMG2.jpeg"),
    UserName: "郭海聪"
  },
  {
    id: "4324dsfs",
    account: "ghc123123",
    image: require("../images/WechatIMG2.jpeg"),
    UserName: "阿帕奇"
  },
  {
    id: "1231dsfsd3423",
    account: "ghc133333",
    image: require("../images/WechatIMG2.jpeg"),
    UserName: "蒙多"
  }
];
