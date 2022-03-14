import * as type from "../types/productType";
import HTTP from "../../utils/httpClient";
// import { loadingStart, loadingEnd } from "./loadingAction";
// import { asyncActionStart, asyncActionFinish } from "../../async/AsyncActions";

export const getAllProducts = () => async (dispatch) => {
  try {
    // dispatch(asyncActionStart());
    // const res = await axios.get(`${config.baseURL}/product/all`);
    const res = await HTTP.get("/product/all");
    dispatch({
      type: type.GET_PRODUCTS,
      payload: res.data.data,
    });
    // dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    // dispatch(asyncActionFinish());
  }
};
