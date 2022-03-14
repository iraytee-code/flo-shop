import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
// import persitedReducer from "./reducers";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
const middleware = [thunkMiddleware];

if (process.env.NODE_ENV !== "development") {
  middleware.push(loggerMiddleware);
}
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
