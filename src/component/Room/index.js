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
const Room = props => {
  //连接仓库
  const RoomData = useContext(Context);
  const userData = RoomData.state.UserCenter;
  //成员显示模块
  const [hidden, setHidden] = useState(false);
  const Value = useRef(null);
  const file = useRef(null);
  const myimg = useRef(null);
  useEffect(() => {
    let id = props.match.params.id;
    User({ id }).then(res => {
      RoomData.dispatch({
        type: "GET_USERCENTER",
        UserCenter: res.data.data
      });
    });
  }, [RoomData]);
  //图片预览
  const handleClickFile = () => {
    let id = file.current;
    id.click();
  };
  const handlePreviewImg = event => {
    event.persist();
    let imgfile = file.current;
    let url;
    let imgPre = document.getElementById("myimg");
    // console.log(file.files);
    if (imgfile.value) {
      //获取input[file]图片的url
      let agent = navigator.userAgent;
      if (agent.indexOf("MSIE") >= 1) {
        url = imgfile.value;
        imgPre.src = url;
      } else if (agent.indexOf("Firefox") > 0) {
        url = window.URL.createObjectURL(imgfile.files.item(0));
        imgPre.src = url;
      } else if (agent.indexOf("Chrome") > 0) {
        url = window.URL.createObjectURL(imgfile.files.item(0));
        imgPre.src = url;
      }
    }
  };
  const handleEnter = e => {
    let value = Value.current;
    if (e.key === "Enter") {
      e.preventDefault();
      if (value.value === "") {
        alert("不能发送空白消息");
      } else {
        alert("发送消息成功");
        value.value = "";
      }
      // console.log(value.value);
    }
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
            <img src={require("../images/WechatIMG2.jpeg")} alt="" />
            <span>牛奶只喝酸的dsd</span>
          </div>
        </div>
      </div>
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
          <img src={require("../images/WechatIMG2.jpeg")} alt="" />
        </div>
      </div>
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
