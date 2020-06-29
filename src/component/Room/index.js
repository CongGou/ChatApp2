import React, { useState, useEffect, useRef, useContext } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import People from "@material-ui/icons/People";
import TagFaces from "@material-ui/icons/TagFaces";
import FolderOpen from "@material-ui/icons/FolderOpen";
import MicNone from "@material-ui/icons/MicNone";
import Call from "@material-ui/icons/Call";
import Videocam from "@material-ui/icons/Videocam";

import { Context } from "../../App";
import { User } from "../Axios";

import socket from "../socket";
const Room = (props) => {
  //连接仓库
  const RoomData = useContext(Context);
  const userData = RoomData.state.UserCenter;
  //成员显示模块
  const [hidden, setHidden] = useState(false);
  const Value = useRef(null);
  const file = useRef(null);
  useEffect(() => {
    const id = setInterval(() => {
      let id = props.match.params.id;
      User({ id }).then((res) => {
        RoomData.dispatch({
          type: "GET_USERCENTER",
          UserCenter: res.data.data,
        });
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [RoomData, props.match.params.id]);
  //图片预览
  const handleClickFile = () => {};
  const handlePreviewImg = (event) => {
    event.persist();
  };
  const handleEnter = (e) => {
    let value = Value.current;
    if (e.key === "Enter") {
      e.preventDefault();
      if (value.value === "") {
        alert("不能发送空白消息");
      } else {
        socket.emit("msg", value.value);
        socket.on("chat_message", (res) => {
          console.log(res);
        });
        value.value = "";
      }
      // console.log(value.value);
    }
  };
  const List = () => {
    return (
      <div className="RoomCon">
        <div className="received">
          <img src={require("../images/WechatIMG2.jpeg")} alt="" />
          <div className="Cover">
            <span>郭海聪</span>
            <p>明天考试加油，今天好好吃饭和好好睡觉不要紧张相信自己</p>
          </div>
        </div>
        <div className="received emit">
          <div className="Cover">
            <p>
              明天考试加油今天好好吃饭和好好睡觉不要紧张，相信自己今天好好吃饭和好好睡觉不要紧张，相信自己
            </p>
          </div>
          <img src={userData.photo} alt="" />
        </div>
      </div>
    );
  };
  return (
    <div className="Room">
      <div className="userName">
        <span>{userData.userName}</span>
        <Grid item onClick={() => setHidden(!hidden)}>
          <People />
        </Grid>
      </div>
      <div
        className={hidden ? "Members MembersActive" : "Members MembersClose"}
      >
        <div className="addMembers"></div>
        <div className="MembersBox">
          <div className="addCover">
            <img src={require("../images/WechatIMG2.jpeg")} alt="" />
            <span>牛奶只喝酸的dsd</span>
          </div>
          <div className="addCover">
            <img src={userData.photo} alt="" />
            <span>{userData.userName}</span>
          </div>
        </div>
      </div>
      {List()}
      <div className="RoomFoot">
        <div className="Menu">
          <Grid item onClick={handleClickFile} className="MenuIcon">
            <FolderOpen />
          </Grid>
          <input
            type="file"
            name="file"
            accept="image/*"
            ref={file}
            multiple="multiple"
            onChange={handlePreviewImg}
            style={{ display: "none" }}
          />
          <Grid item className="MenuIcon">
            <TagFaces />
          </Grid>
          <Grid item className="MenuIcon">
            <MicNone />
          </Grid>
          <Grid item className="MenuIcon">
            <Call />
          </Grid>
          <Grid item className="MenuIcon">
            <Videocam />
          </Grid>
        </div>

        <div className="Send">
          <textarea onKeyPress={handleEnter} ref={Value}></textarea>
        </div>
      </div>
    </div>
  );
};

export default Room;
