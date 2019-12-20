import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import MessageList from "../MessageList";
import MessageLogo from "../MessageLogo";
import Room from "../Room";
class Messages extends Component {
  render() {
    return (
      <div className="MessageCover">
        <div className="MessageContainer">
          <div className="Search">
            <input className="SearchInput" placeholder="搜索" />
            <Grid item className="SearchIcon">
              <Search />
            </Grid>
            <button className="Add">+</button>
          </div>
          <div className="MessageList">
            {Data.map((item, index) => (
              <Link to={"/Chat/message/" + item.id} key={index} replace>
                <MessageList
                  image={item.image}
                  title={item.title}
                  user={item.user}
                  content={item.content}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="MessageRoom">
          {/* <MessageLogo /> */}
          <Switch>
            <Route exact path="/Chat/message" component={MessageLogo} />
            <Route path="/Chat/message/:id" component={Room} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Messages;

const Data = [
  {
    id: "00000",
    image: require("../images/WechatIMG2.jpeg"),
    title: "别问问就是混子",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "666666",
    image: require("../images/WechatIMG2.jpeg"),
    title: "产品系统课",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "111111",
    image: require("../images/WechatIMG2.jpeg"),
    title: "人体工程学课程",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "444444",
    image: require("../images/WechatIMG2.jpeg"),
    title: "考验小分队",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "99999",
    image: require("../images/WechatIMG2.jpeg"),
    title: "酒吧",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "77777",
    image: require("../images/WechatIMG2.jpeg"),
    title: "老乡见老乡两眼泪汪汪",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "333333",
    image: require("../images/WechatIMG2.jpeg"),
    title: "别问问就是混子",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    id: "22222",
    image: require("../images/WechatIMG2.jpeg"),
    title: "酒吧",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  }
];
