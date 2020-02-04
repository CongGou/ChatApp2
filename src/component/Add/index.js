import React, { useContext, useRef } from "react";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import Search from "@material-ui/icons/Search";
import { SearchUser, AddFriend } from "../Axios";
import { Context } from "../../App";
// 添加好友组件

const Add = props => {
  // 连接仓库
  const AddData = useContext(Context);
  const userData = AddData.state.AddData;
  //使用useRef钩子函数标记（类似于this.ref）
  const inputValue = useRef(null);
  //定义事件函数
  // 搜索好友
  const handleSearch = () => {
    let userName = inputValue.current.value;
    if (userName) {
      SearchUser({ userName })
        .then(res => {
          switch (res.data.code) {
            case 200:
              AddData.dispatch({
                type: "GET_ADDDATA",
                AddData: {
                  data: res.data.msg,
                  isShow: true
                }
              });
              break;
            case 404:
              AddData.dispatch({
                type: "GET_ADDDATA",
                AddData: {
                  data: userData.data,
                  msg: res.data.msg
                }
              });
              break;
            default:
              return 0;
          }
        })
        .catch(e => console.log(e));
    } else {
      AddData.dispatch({
        type: "GET_ADDDATA",
        AddData: {
          data: userData.data,
          msg: "用户名不能为空"
        }
      });
    }
  };
  // 添加好友
  const handleAdd = () => {
    const passUser = userData.data._id;
    AddFriend({ passUser })
      .then(res => {
        if (res.data.code === 200) {
          alert(res.data.msg);
        }
      })
      .catch(e => console.log(e));
  };
  return (
    <div className="AddContainer">
      <div className="addFriend">
        <input placeholder="用户名" ref={inputValue} />
        <Grid item className="SearchIcon">
          <Search />
        </Grid>
        <button onClick={handleSearch}>搜索</button>
      </div>
      <div className={userData.isShow ? "userBox " : "userBox hidden"}>
        <img src={userData.data.photo} alt="" />
        <span>{userData.data.userName}</span>
        <button onClick={handleAdd}>添加</button>
      </div>
      <div
        className={
          userData.isShow ? "userBox SearchMsg hidden" : "userBox SearchMsg"
        }
      >
        <p>{userData.msg}</p>
      </div>
    </div>
  );
};
export default Add;
