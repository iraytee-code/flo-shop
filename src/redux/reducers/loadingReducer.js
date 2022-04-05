import * as type from "../types/categoryType";
import { LOADING_START, LOADING_END } from "../types/categoryType";

const initialState = {
  isLoading: [],
};

const LoadingReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case type.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case type.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default LoadingReducer;
