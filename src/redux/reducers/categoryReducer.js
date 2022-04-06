import * as actionType from "../types/categoryType";

const initialState = {
  categories: [],
  category: {},
};

const categoryReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actionType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
