import { combineReducers } from "redux";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

import { reducer as ToastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  categoryReducer,
  productReducer,

  userReducer,
  toastr: ToastrReducer,
});

export default rootReducer;
