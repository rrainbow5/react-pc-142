// 把所有的模块做统一处理
// 导出一个统一的方法 useStore
import LoginStore from "./login.Store"
import React from "react";

class RootStore {
  constructor() {
    this.LoginStore = new LoginStore();
    // ...
  }
}


//实例化根
//导出 useStore context

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export {useStore}