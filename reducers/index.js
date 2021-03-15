import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import todo from "./todo";

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE", action');
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  todo,
});
export default rootReducer;
