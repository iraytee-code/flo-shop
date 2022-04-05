import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";
import productReducer from "./productReducer";
import loadingReducer from "./loadingReducer";
import { reducer as ToastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
  categoryReducer,
  loadingReducer,
  productReducer,
  userReducer,
  toastr: ToastrReducer,
});

export default rootReducer;
