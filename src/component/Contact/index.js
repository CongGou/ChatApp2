import React, { useState, useEffect, useContext } from "react";
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
import { NewFriends, Contacts } from "../Axios";
import { Context } from "../../App";
import { Deduplication } from "../utils";
const Contact = (props) => {
  //使用useState钩子函数定义变量
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const storeData = useContext(Context);
  // console.log(storeData);
  let newFriendsArr = storeData.state.newFriends;

  let ContactsArr = storeData.state.Contacts;
  // console.log(ContactsArr);
  const handleClick1 = (props) => {
    setDisplay1(!display1);
  };
  const handleClick2 = (props) => {
    setDisplay2(!display2);
  };
  const handleClick3 = (props) => {
    setDisplay3(!display3);
  };
  useEffect(() => {
    //新朋友请求
    const id = setInterval(async () => {
      let NewFriendsResult = await NewFriends();
      let NewFriendsResultArr = NewFriendsResult.data.data;
      storeData.dispatch({
        type: "GET_NEWFRIENDSDATA",
        newFriends: NewFriendsResultArr,
      });
      //联系人
      let result = await Contacts();
      let resultArr = result.data.data;
      let arr = [];
      resultArr.forEach((item) => {
        // console.log(item.from);
        arr.push(item.from, item.to);
      });
      //去重
      let ContactsData = Deduplication(arr);
      // console.log(arr);
      storeData.dispatch({
        type: "GET_CONTACTSDATA",
        Contacts: ContactsData,
      });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [storeData]);
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
            onClick={handleClick1}
          >
            <Grid item style={{ display: display1 ? "block" : "none" }}>
              <ExpandMore />
            </Grid>
            <Grid item style={{ display: display1 ? "none" : "block" }}>
              <ChevronRight />
            </Grid>
            新朋友
          </NavLink>
          <div style={{ display: display1 ? "block" : "none" }}>
            {newFriendsArr.map((item, index) => (
              <NavLink
                to={"/Chat/contact/NewFriends/" + item.from._id}
                key={index}
              >
                <NewUser
                  photo={item.from.photo}
                  userName={item.from.userName}
                  isPass={item.isPass}
                />
              </NavLink>
            ))}
          </div>
          {/* 群聊 */}
          <NavLink
            to={"/Chat/contact/"}
            replace
            className={"ListItem"}
            onClick={handleClick2}
          >
            <Grid item style={{ display: display2 ? "block" : "none" }}>
              <ExpandMore />
            </Grid>
            <Grid item style={{ display: display2 ? "none" : "block" }}>
              <ChevronRight />
            </Grid>
            群聊
          </NavLink>
          <div style={{ display: display2 ? "block" : "none" }}>
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
            onClick={handleClick3}
          >
            <Grid item style={{ display: display3 ? "block" : "none" }}>
              <ExpandMore />
            </Grid>
            <Grid item style={{ display: display3 ? "none" : "block" }}>
              <ChevronRight />
            </Grid>
            联系人
          </NavLink>
          <div style={{ display: display3 ? "block" : "none" }}>
            {ContactsArr.map((item, index) => (
              <NavLink to={"/Chat/contact/contacts/" + item._id} key={index}>
                <Friends image={item.photo} UserName={item.userName} />
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
};

export default Contact;
const data = [];
