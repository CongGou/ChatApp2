import React, { useState, useContext, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import MessageList from "../MessageList";
import MessageLogo from "../MessageLogo";
import Room from "../Room";
import Add from "../Add";
import AddGroup from "../AddGroup";
import { Context } from "../../App";
import { Contacts } from "../Axios";
// 消息组件
const Messages = props => {
  const [hidden, setHidden] = useState(true);
  //连接仓库
  const MessagesData = useContext(Context);
  const usersData = MessagesData.state.Contacts;
  const handleAdd = e => {
    e.stopPropagation();
    setHidden(!hidden);
  };
  useEffect(() => {
    //联系人
    Contacts().then(res => {
      MessagesData.dispatch({
        type: "GET_CONTACTSDATA",
        Contacts: res.data.data
      });
    });
    if (
      props.location.pathname === "/Chat/message/add" ||
      props.location.pathname === "/Chat/message/addGroup"
    ) {
      setHidden(true);
    }
  }, [MessagesData, props.location.pathname]);
  return (
    <div className="MessageCover">
      <div className="MessageContainer">
        <div className="Search">
          <input className="SearchInput" placeholder="搜索" />
          <Grid item className="SearchIcon">
            <Search />
          </Grid>
          <button className="Add" onClick={handleAdd}>
            +
          </button>
        </div>
        <div className={hidden ? "AddBox addHidden" : "AddBox "}>
          <NavLink to={"/Chat/message/add"}>添加朋友</NavLink>
          <NavLink to={"/Chat/message/addGroup"}>创建群聊</NavLink>
        </div>
        <div className="MessageList">
          {usersData.map((item, index) => (
            <NavLink
              to={"/Chat/message/" + item.CertificationUser._id}
              key={index}
              replace
              className={"ListItem"}
              activeClassName={"Active"}
            >
              <MessageList
                image={item.CertificationUser.photo}
                // user={item.user}
                title={item.CertificationUser.userName}
                // content={item.content}
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
};
export default Messages;
