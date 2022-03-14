import * as type from "../types/productType";

const initialState = {
  products: [],
  product: {},
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
