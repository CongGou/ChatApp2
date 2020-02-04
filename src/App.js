import React, { createContext, useReducer } from "react";
import "./App.css";
import Routers from "./component/Routers";
import { reducer, initialState } from "./component/redux";
// 使用hook的createContext钩子函数连接组件（类似于redux的context）
export const Context = createContext(null);
const App = function() {
  // 模拟仓库
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // 连接组件 value传值
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Routers />
      </div>
    </Context.Provider>
  );
};

export default App;
