import actions from "features/Booking/redux/type";
import produce from "immer";
const initialState = {
  banners: [],
  movies: [],
  movieDetail: null,
  movieDetailSchedule: null,
  cinemas: [],
};

const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_BANNRES:
        draft.banners = payload;
        break;
      case actions.SET_MOVIES:
        draft.movies = payload;
        break;
      case actions.SET_MOVIE_DETAIL:
        draft.movieDetail = payload;
        break;
      case actions.SET_MOVIE_DETAIL_SCHEDULE:
        draft.movieDetailSchedule = payload;
        break;
      case actions.SET_CINEMA:
        draft.cinemas = payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
