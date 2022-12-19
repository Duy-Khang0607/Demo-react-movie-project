// Function Component
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeCarousel from "./components/HomeCarousel";
import MovieList from "./components/MovieList";
import ScheduleMovie from "./components/ScheduleMovie";
import {
  fetchBannerAction,
  fetchCinemaAction,
  fetchMovieAction,
} from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // [] => Chỉ chạy 1 lần giống componentDidMount
    dispatch(fetchBannerAction);
    dispatch(fetchMovieAction());
    dispatch(fetchCinemaAction);
  }, []);

  return (
    <div>
      <HomeCarousel />
      <MovieList />
      <ScheduleMovie />
    </div>
  );
  // khi load trang Home => Call api
  // 1. Lay danh sach banner
};

export default Home;
