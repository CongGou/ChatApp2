const initialState = {
  action: "",
  name: "未登录",
  photo: ""
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PHOTO":
      return { ...state, action: action.photo };

    default:
      return state;
  }
};
