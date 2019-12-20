import React, { useState, useEffect } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import People from "@material-ui/icons/People";
import FolderOpen from "@material-ui/icons/FolderOpen";

const Room = props => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {});
  const handleClick = () => {
    let id = document.getElementById("file");
    id.click();
  };
  const handlePicReply = event => {
    event.persist();
    console.log(event);
  };
  return (
    <div className="Room">
      <div className="userName">
        <span>郭海聪</span>
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
            <p>明天考试加油💪，今天好好吃饭和好好睡觉不要紧张相信自己</p>
          </div>
        </div>
        <div className="received emit">
          <div className="Cover">
            <p>
              明天考试加油💪今天好好吃饭和好好睡觉不要紧张，相信自己今天好好吃饭和好好睡觉不要紧张，相信自己
            </p>
          </div>
          <img src={require("../images/WechatIMG2.jpeg")} alt="" />
        </div>
      </div>
      <div className="RoomFoot">
        <div className="Menu">
          <Grid item onClick={handleClick}>
            <FolderOpen />
          </Grid>
          <input
            type="file"
            name="file"
            accept="image/png,image/jpg,image/jpeg"
            id="file"
            onChange={handlePicReply}
            style={{ display: "none" }}
          />
        </div>
        <div className="Send"></div>
      </div>
    </div>
  );
};

export default Room;
