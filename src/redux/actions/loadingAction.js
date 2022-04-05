import * as type from "../types/loadingType";

export const loadingStart = () => {
  return {
    type: type.LOADING_START,
  };
};

export const loading = () => {
  return {
    type: type.LOADING_END,
  };
};

