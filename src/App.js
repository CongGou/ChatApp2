import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./App.css";
import Routers from "./component/Routers";
import { reducer } from "./component/redux";
const store = createStore(reducer);
const App = () => (
  <Provider store={store}>
    <div className="App">
      <Routers />
    </div>
  </Provider>
);

export default App;
