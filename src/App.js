import React from "react";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import store from "./redux/store";
import "./App.scss";

import Home from "./pages/Home";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <ReduxToastr
          position="top-center"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          preventDuplicates={false}
        />
        <Home />
      </React.Fragment>
    </Provider>
  );
}

export default App;
