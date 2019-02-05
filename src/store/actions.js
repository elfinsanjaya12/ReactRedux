// IMPORT ACTIONTYPES

import { SET_TITLE } from "./actionTypes";

export const setTitle = data => {
  return {
    type: SET_TITLE,
    payload: data
  };
};
