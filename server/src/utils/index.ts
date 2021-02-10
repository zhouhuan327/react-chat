import { StatusCode } from '../constants';

// 通过两个id生成一个不大会重复的固定数值
export const genRoomId = (senderId, receiverId) => {
  const [max, min] =
    senderId > receiverId ? [senderId, receiverId] : [receiverId, senderId];
  const str = String(Math.atan2(max, min));
  return str.substring(2, 6);
};

export const successResp = (data, message = '成功'): ResponseData<any> => {
  return { code: StatusCode.Success, data: data, message };
};
export const errorResp = (e): ResponseData<any> => {
  return {
    code: StatusCode.Error,
    data: null,
    message: e.response?.message || e.toString(),
  };
};
