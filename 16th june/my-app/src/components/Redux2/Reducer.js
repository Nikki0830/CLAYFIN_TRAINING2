import * as actionTypes from "./ActionType";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        count: state.count + action.value,
      };
    case actionTypes.DECREMENT:
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
};
export default reducer;
