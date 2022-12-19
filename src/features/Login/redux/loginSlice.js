import produce from "immer";
import actions from "./type";

// immutable : => Tính bất biến (string,number,boolean..) => Không chỉnh sửa được
// mutable : => Tính bất biến (object) => Chỉnh sửa được
const initialState = {
  profile: null,
};

// shallow comparsion : => so sánh state đầu vào với state đầu ra để nó render ra giao diện
const reducer = (state = initialState, { type, payload }) => {
  return produce(state, (draft) => {
    switch (type) {
      case actions.SET_LOGIN:
        draft.profile = payload;
        break;
      default:
        break;
    }
  });
};

export default reducer;
