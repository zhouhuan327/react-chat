import request from "../utils/request";
// 登录
export const login = data =>
  request({ url: "/api/auth/login", method: "post", data });

//好友列表
export const getFriends = params =>
  request({ url: "/api/friend", method: "get", params });

// 群列表
export const getGroups = params =>
  request({ url: "/api/group", method: "get", params });

// 最新消息列表
export const getRecent = () =>
  request({ url: "/api/message/list", method: "get" });
