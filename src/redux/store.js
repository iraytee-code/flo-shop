import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware, loggerMiddleware];

//method to find if you are local or production 

if (process.env.NODE_ENV  === "development") {
  middleware.push(loggerMiddleware);
}

// export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
