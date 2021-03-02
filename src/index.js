import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

const middleware = [thunk];
const enhancers = [];
if (
  process.env.NODE_ENV === "development" &&
  typeof window != undefined &&
  window.devToolsExtension
) {
  enhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  );
}
const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware), ...enhancers)
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
