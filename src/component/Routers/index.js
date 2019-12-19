import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Login from "../Login";
import Registered from "../Registered";
import Chat from "../Chat";
import Messages from "../Messages";
class Routers extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registered" component={Registered} />
          <Route path="/Chat" component={Chat} />
        </Switch>
      </div>
    );
  }
}
export default Routers;
