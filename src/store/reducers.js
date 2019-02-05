import { SET_TITLE } from "./actionTypes";

const initialState = {
  title: "belajar oke redux"
};
const reducers = (state = initialState, action) => {
  if (action.type === SET_TITLE) {
    return {
      ...state,
      title: action.payload
    };
  }
  return state;
};

export default reducers;
