import * as actionType from "../types/categoryType";


const initialState = {
  isLoading: [],
};

const LoadingReducer = (state = initialState, action) => {
  const {type} = action;
  switch (type) {
    case actionType.LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionType.LOADING_END:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default LoadingReducer;
