import React, { Component } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import MessageList from "../MessageList";
import MessageLogo from "../MessageLogo";
import Room from "../Room";
import Add from "../Add";
import AddGroup from "../AddGroup";
class Messages extends Component {
  constructor(arg) {
    super(arg);
    this.state = {
      hidden: true
    };
  }
  handleClick = (item, index) => {};
  handleAdd = e => {
    e.stopPropagation();
    this.setState({
      hidden: !this.state.hidden
    });
  };
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.location.pathname === "/Chat/message/add" ||
      nextProps.location.pathname === "/Chat/message/addGroup"
    ) {
      this.setState({
        hidden: true
      });
    }
  }
  render() {
    return (
      <div className="MessageCover">
        <div className="MessageContainer">
          <div className="Search">
            <input className="SearchInput" placeholder="搜索" />
            <Grid item className="SearchIcon">
              <Search />
            </Grid>
            <button className="Add" onClick={this.handleAdd}>
              +
            </button>
          </div>
          <div className={this.state.hidden ? "AddBox addHidden" : "AddBox "}>
            <NavLink to={"/Chat/message/add"}>添加朋友</NavLink>
            <NavLink to={"/Chat/message/addGroup"}>创建群聊</NavLink>
          </div>
          <div className="MessageList">
            {Data.map((item, index) => (
              <NavLink
                to={"/Chat/message/" + item.id}
                key={index}
                replace
                onClick={() => this.handleClick(item, index)}
                className={"ListItem"}
                activeClassName={"Active"}
              >
                <MessageList
                  image={item.image}
                  title={item.title}
                  user={item.user}
                  content={item.content}
                />
              </NavLink>
            ))}
          </div>
        </div>
        <div className="MessageRoom">
          {/* <MessageLogo /> */}
          <Switch>
            <Route exact path="/Chat/message" component={MessageLogo} />
            <Route path="/Chat/message/add" component={Add} />
            <Route path="/Chat/message/addGroup" component={AddGroup} />
            <Route path="/Chat/message/:id" component={Room} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Messages;

const Data = [];
