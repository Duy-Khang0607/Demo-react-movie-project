import React from "react";
// Link , NavLink : NavLink có sẵn css
import { Link, NavLink } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
const Header = () => {
  // Lên store redux lấy dữ liệu profile về
  const userLogin = useSelector((state) => {
    return state.user.profile;
  });

  return (
    <header className='bg-slate-700 h-20 '>
      <div className='container h-full mx-auto flex items-center justify-between'>
        <Link
          style={{ textDecoration: "none" }}
          to='/'
          className='text-4xl text-whsite'>
          Cyber Movies
        </Link>
        {/* Check xem user login vô chưa để ẩn phần dang nhap/đăng ký */}
        {userLogin ? (
          <span className='text-white text-xl'>
            Xin chào | {userLogin.hoTen}
          </span>
        ) : (
          <nav>
            <NavLink
              style={{ textDecoration: "none" }}
              exact
              to='/login'
              className={({ isActive }) => {
                if (isActive) return "text-red-500 text-lg";
                return "text-white text-lg";
              }}>
              Đăng nhập
            </NavLink>
            <span className='text-white text-xl'> | </span>
            <NavLink
              style={{ textDecoration: "none" }}
              exact
              to='/signup'
              className={({ isActive }) => {
                if (isActive) return "text-red-500 text-lg";
                return "text-white text-lg ";
              }}>
              Đăng ký
              <UserAddOutlined className='text-2xl  bg-black rounded-full p-2 text-center' />
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
