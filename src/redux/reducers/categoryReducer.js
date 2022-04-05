import * as type from "../types/categoryType";
import { GET_CATEGORIES } from "./../types/categoryType";

const initialState = {
  categories: [],
  category: {},
};

const categoryReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
