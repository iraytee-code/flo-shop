import * as type from "../types/productType";
import HTTP from "../../utils/httpClient";
// import { loadingStart, loadingEnd } from "./loadingAction";

export const getAllProducts = () => async (dispatch) => {
  try {
    // dispatch(loadingStart());
    const res = await HTTP.get("/product/all");
    dispatch({
      type: type.GET_PRODUCTS,
      payload: res.data.data,
    });
    // dispatch(loadingEnd());
  } catch (error) {
    console.log(error);
    // dispatch(loadingEnd());
  }
};
