import React, { Component } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import MessageList from "../MessageList";
class Messages extends Component {
  render() {
    return (
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
            <MessageList
              image={item.image}
              title={item.title}
              user={item.user}
              content={item.content}
              key={index}
            />
          ))}
        </div>
        <div className="MessageRoom"></div>
      </div>
    );
  }
}

export default Messages;

const Data = [
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "别问问就是混子",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "产品系统课",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "人体工程学课程",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "考验小分队",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "酒吧",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "老乡见老乡两眼泪汪汪",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "别问问就是混子",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  },
  {
    image: require("../images/WechatIMG2.jpeg"),
    title: "酒吧",
    user: "郭海聪",
    content: "你作业做了吗没有吧你不敢不交"
  }
];
