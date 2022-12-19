import requester from "app/api";
import actions from "./type";

export const loginAction = (userLogin) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "POST",
        url: "/api/QuanLyNguoiDung/DangNhap",
        data: userLogin,
      });
      next({
        type: actions.SET_LOGIN,
        payload: res.data.content,
      });
      // Lưu token xuống storage
      localStorage.setItem("token", res.data.content.accessToken);
    } catch (error) {
      // ném lỗi ra component Login để check tai khoan và mat khau
      throw error;
    }
  };
};

export const fetchProfileAction = async (next) => {
  try {
    const res = await requester({
      method: "POST",
      url: "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      // api nó cần bổ sung vào 2 : tokenCybersoft,Authorization (mà tokenCybersoft,Authorization đã setup sẵn ở resquester rồi)
    });
    next({
      type: actions.SET_LOGIN,
      payload: res.data.content,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
