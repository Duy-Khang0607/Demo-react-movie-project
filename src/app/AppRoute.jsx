// Lớp bảo vệ vào các link
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// HOC : High order component (1 component bọc 1 component khác lại => tái sử dụng )
const AppRoute = ({ component: Comp, isPrivate, isAuth }) => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => {
    return state.user.profile;
  });
  // Nếu user vào trang Home
  if (isPrivate) {
    if (token) return <Comp />; // =>Nếu có token thì trả về component
    return <Navigate to='/login' replace />; //=> Nếu chưa có token thì cho user vào trang login
  }
  // Nếu user vào trang login signup
  if (isAuth) {
    if (!profile) return <Comp />;
    return <Navigate to='/' replace />;
  }
  return <Comp />;
};

export default AppRoute;

// replace : thay thế component (không có lịch sử trang)
