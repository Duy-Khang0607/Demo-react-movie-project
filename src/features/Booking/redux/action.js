import requester from "app/api";
import apiPath from "app/apiPath";
import actions from "features/Booking/redux/type";
// ------------------- CALL API ------------------

// Banner
export const fetchBannerAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.BANNERS,
    });
    next({
      type: actions.SET_BANNRES,
      payload: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
// Movie list
export const fetchMovieAction = (page = 1) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIES,
        params: {
          maNhom: "GP09",
          soTrang: page,
          soPhanTuTrenTrang: 10,
        },
      });
      next({
        type: actions.SET_MOVIES,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Detail
export const fetchDetailAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_DETAIL,
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Movie schedule
export const fetchMovieDetailScheduleAction = (id) => {
  return async (next) => {
    try {
      const res = await requester({
        method: "GET",
        url: apiPath.MOVIE_DETAIL_SCHEDULE,
        params: {
          MaPhim: id,
        },
      });
      next({
        type: actions.SET_MOVIE_DETAIL_SCHEDULE,
        payload: res.data.content,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Cinemas
export const fetchCinemaAction = async (next) => {
  try {
    const res = await requester({
      method: "GET",
      url: apiPath.CINEMAS,
    });
    next({
      type: actions.SET_CINEMA,
      payload: res.data.content,
    });
  } catch (error) {
    console.log(error);
  }
};
