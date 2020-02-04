//定义初始值
export const initialState = {
  //登录用户初始个人资料
  user: {
    photo: ""
  },
  // 新朋友请求数据初始值
  newFriends: [
    {
      CertificationUser: {
        userName: "",
        photo: "",
        _id: ""
      },
      create_time: ""
    }
  ],
  // 联系人请求数据初始值
  Contacts: [
    {
      CertificationUser: {
        userName: "",
        photo: "",
        _id: ""
      },
      create_time: ""
    }
  ],
  // 添加好友请求数据初始值
  AddData: {
    data: {
      userName: "",
      photo: "",
      _id: ""
    },
    msg: "输入用户名即可搜索",
    isShow: false
  },
  // 用户个人中心数据
  UserCenter: {
    photo: "",
    userName: "",
    _id: "",
    msg: "通过认证"
  }
};
//定义仓库的值
export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USERPHOTO":
      return {
        ...state,
        user: action.user
      };
    case "GET_NEWFRIENDSDATA":
      return {
        ...state,
        newFriends: action.newFriends
      };
    case "GET_CONTACTSDATA":
      return {
        ...state,
        Contacts: action.Contacts
      };
    case "GET_ADDDATA":
      return {
        ...state,
        AddData: action.AddData
      };
    case "GET_USERCENTER":
      return {
        ...state,
        UserCenter: action.UserCenter
      };
    default:
      return state;
  }
};
