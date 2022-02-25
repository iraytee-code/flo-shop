import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
