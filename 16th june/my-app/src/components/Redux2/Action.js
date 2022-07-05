import * as actionTypes from "./ActionType";

export const increment = (val) => {
  return {
    type: actionTypes.INCREMENT,
    value: val,
  };
};

export const decrement = (val) => {
  return {
    type: actionTypes.DECREMENT,
    value: val,
  };
};
