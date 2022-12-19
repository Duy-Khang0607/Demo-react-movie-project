// import { useState } from "react";
import Booking from "features/Booking/Booking";
import Home from "features/Booking/Home";
import Login from "features/Login/Login";
import Signup from "features/Login/Signup";
import "./App.css";
// React Router Dom => Chuyển trang
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MovieDetails from "features/Booking/Detail";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProfileAction } from "features/Login/redux/action";
import AppRoute from "app/AppRoute";
function App() {
  // Lưu tài khoản , mật khẩu khi refesh lại trang
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfileAction);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact='true'
          path='/'
          element={<AppRoute component={Home} isPrivate />}></Route>
        {/* :id => Tên tham số */}
        <Route
          path='/detail/:id'
          element={<AppRoute component={MovieDetails} isPrivate />}></Route>
        <Route
          path='/booking'
          element={<AppRoute component={Booking} isPrivate />}></Route>
        <Route
          path='/login'
          element={<AppRoute component={Login} isAuth />}></Route>
        <Route
          path='/signup'
          element={<AppRoute component={Signup} isAuth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
