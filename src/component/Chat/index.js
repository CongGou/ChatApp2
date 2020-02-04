import React, { useEffect, useContext } from "react";
import { Switch, Redirect, Route, NavLink } from "react-router-dom";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import People from "@material-ui/icons/People";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Messages from "../Messages";
import Contact from "../Contact";
import { Context } from "../../App";
import { ChatHome, _Close } from "../Axios";
const Chat = props => {
  const userData = useContext(Context);
  let image = userData.state.user.photo;
  // console.log(userData);
  const handleClose = () => {
    _Close().then(res => {
      if (res.data.code === 200) {
        props.history.push("/");
      }
    });
  };
  useEffect(() => {
    //加载后获取个人资料
    ChatHome()
      .then(res => {
        if (res.data) {
          if (res.data.code === 404) {
            props.history.push("/");
          }
          userData.dispatch({
            type: "GET_USERPHOTO",
            user: {
              photo: res.data.data.photo
            }
          });
        }
      })
      .catch(e => {});
  }, [userData, props.history]);
  return (
    <div className="Chat">
      <div className="Close" onClick={handleClose}>
        x
      </div>
      <div className="Nav">
        <div className="ChatImg">
          <img src={image} alt="" />
        </div>
        <div className="NavList">
          <NavLink to="/Chat/message" activeClassName={"Active"}>
            <Grid item>
              <ChatBubble />
            </Grid>
          </NavLink>
          <NavLink to="/Chat/contact" activeClassName={"Active"}>
            <Grid item>
              <People />
            </Grid>
          </NavLink>
        </div>
      </div>
      <div className="Main">
        <Switch>
          <Route
            exact
            path="/Chat"
            render={() => <Redirect to={"/Chat/message"} />}
          />
          <Route path="/Chat/message" component={Messages} />
          <Route path="/Chat/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  );
};

export default Chat;
